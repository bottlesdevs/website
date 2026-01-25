import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.join(__dirname, '../posts');
const DIST_DIR = path.join(__dirname, '../dist');
const SITE_URL = 'https://usebottles.com';

function parseFrontmatter(content) {
    const match = content.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);
    if (!match) return { frontmatter: {}, content };

    const frontmatterRaw = match[1];
    const body = match[2];
    const frontmatter = {};

    frontmatterRaw.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            let value = valueParts.join(':').trim();
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            frontmatter[key.trim()] = value;
        }
    });

    return { frontmatter, content: body };
}

function generateRSS() {
    if (!fs.existsSync(POSTS_DIR)) {
        console.log('No posts directory found.');
        return;
    }

    const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));
    const items = [];

    files.forEach(file => {
        const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
        const { frontmatter } = parseFrontmatter(content);

        if (frontmatter.title && frontmatter.pubDate) {
            items.push({
                title: frontmatter.title,
                description: frontmatter.description || '',
                link: `${SITE_URL}/blog/${file}`,
                pubDate: new Date(frontmatter.pubDate).toUTCString(),
                guid: `${SITE_URL}/blog/${file}`
            });
        }
    });

    // Sort by date desc
    items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
    <title>Bottles</title>
    <description>Keep in touch with the latest news from Bottles</description>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items.map(item => `
    <item>
        <title><![CDATA[${item.title}]]></title>
        <description><![CDATA[${item.description}]]></description>
        <link>${item.link}</link>
        <guid isPermaLink="true">${item.guid}</guid>
        <pubDate>${item.pubDate}</pubDate>
    </item>`).join('')}
</channel>
</rss>`;

    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR, { recursive: true });
    }

    fs.writeFileSync(path.join(DIST_DIR, 'rss.xml'), rss);
    console.log(`RSS feed generated at ${path.join(DIST_DIR, 'rss.xml')}`);
}

generateRSS();
