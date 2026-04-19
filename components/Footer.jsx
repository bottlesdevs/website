import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-zinc-100 dark:bg-black py-12 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          <div>
            <span className="text-lg font-bold text-zinc-900 dark:text-white block mb-4">Bottles</span>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-zinc-900 dark:text-white mb-4">{t.footer.community}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/orgs/bottlesdevs/discussions" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Forums
                </a>
              </li>
              <li>
                <a href="https://twitter.com/usebottles" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://discord.gg/wF4JAdYrTR" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://github.com/bottlesdevs" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.footer.github}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/docs" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.footer.documentation}
                </Link>
              </li>
              <li>
                <Link to="/database/dependencies" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Dependencies
                </Link>
              </li>
              <li>
                <Link to="/runners" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Runners
                </Link>
              </li>
              <li>
                <a href="https://github.com/bottlesdevs/Bottles/issues?q=is%3Aissue+label%3ABug" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Report a bug
                </a>
              </li>
              <li>
                <a href="https://github.com/bottlesdevs/Bottles/issues?q=is%3Aissue+label%3A%22Feature+request%22" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Request a feature
                </a>
              </li>
              <li>
                <a href="https://github.com/bottlesdevs/dependencies/issues" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Report a dependency
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-zinc-900 dark:text-white mb-4">Others</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/bottlesdevs/Bottles/blob/main/COPYING.md" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.footer.license} (GPLv3)
                </a>
              </li>
              <li>
                <Link to="/next" className="text-zinc-500 hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400 transition-colors font-semibold">
                  Bottles Next
                </Link>
              </li>
              <li>
                <a href="/blog" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  {t.footer.blog}
                </a>
              </li>
              <li>
                <a href="/funding" className="text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors">
                  Support Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-500 dark:text-zinc-600 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Bottles Developers.
          </div>
          <div className="text-zinc-500 dark:text-zinc-600 text-xs text-center md:text-right">
            {t.footer.made}
            <br className="md:hidden" />
            <span className="hidden md:inline"> • </span>
            <a href="https://fabricators.ltd/?utm_source=bottles&utm_medium=referral" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              sponsored by fabricators.ltd
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;