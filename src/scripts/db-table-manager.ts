import jsyaml from 'js-yaml';

interface Dependency {
    Description: string;
    Category: string;
}

interface Component {
    Channel: string;
    Category: string;
    "Sub-category"?: string;
}

type DatabaseType = 'dependencies' | 'components';

class DatabaseTableManager {
    private tableId: string;
    private dataUrl: string;
    private databaseType: DatabaseType;

    constructor(tableId: string, databaseType: DatabaseType) {
        this.tableId = tableId;
        this.dataUrl = `https://raw.githubusercontent.com/bottlesdevs/${databaseType}/main/index.yml`;
        this.databaseType = databaseType;

        this.fetchAndRenderData();
    }

    private getCategoryColor(category: string): string {
        switch (category.toLowerCase()) {
            case 'essentials':
                return 'bg-green-300 text-green-900 dark:bg-green-600 dark:text-green-100';
            case 'fonts':
                return 'bg-yellow-300 text-yellow-900 dark:bg-yellow-600 dark:text-yellow-100';
            case 'runtimes':
                return 'bg-black text-white dark:bg-black dark:text-white';
            case 'winebridge':
                return 'bg-blue-300 text-blue-900 dark:bg-blue-600 dark:text-blue-100';
            case 'runners':
                return 'bg-orange-300 text-orange-900 dark:bg-orange-600 dark:text-orange-100';
            case 'vkd3d':
                return 'bg-green-300 text-green-900 dark:bg-green-600 dark:text-green-100';
            case 'dxvk':
                return 'bg-purple-300 text-purple-900 dark:bg-purple-600 dark:text-purple-100';
            case 'nvapi':
                return 'bg-emerald-300 text-emerald-900 dark:bg-emerald-600 dark:text-emerald-100';
            case 'latencyflex':
                return 'bg-sky-300 text-sky-900 dark:bg-sky-600 dark:text-sky-100';
            default:
                return 'bg-gray-300 text-gray-900 dark:bg-gray-600 dark:text-gray-200';
        }
    }

    private renderRow(item: string, data: Dependency | Component) {
        const table = document.getElementById(this.tableId)?.getElementsByTagName('tbody')[0];
        if (!table) {
            console.error('Table element not found');
            return;
        }

        const row = table.insertRow(-1);
        row.classList.add('hover:bg-gray-50', 'dark:hover:bg-gray-700', 'border-b', 'dark:border-gray-700');

        const name = row.insertCell(0);
        const descriptionOrType = row.insertCell(1);
        const category = row.insertCell(2);
        const additional = row.insertCell(3);
        const actions = row.insertCell(4);

        name.classList.add('px-6', 'py-4', 'whitespace-nowrap', 'text-lg', 'font-medium', 'text-gray-900', 'dark:text-gray-100');
        category.classList.add('px-6', 'py-4', 'whitespace-nowrap');
        actions.classList.add('px-6', 'py-4', 'whitespace-nowrap', 'text-lg', 'font-medium', 'text-blue-600', 'dark:text-blue-400');

        name.innerHTML = `<span class="font-semibold">${item}</span>`;

        if (this.databaseType === 'dependencies') {
            const dependency = data as Dependency;
            descriptionOrType.classList.add('px-6', 'py-4', 'whitespace-nowrap', 'text-lg', 'text-gray-500', 'dark:text-gray-300');
            descriptionOrType.innerHTML = `<span class="text-gray-600 dark:text-gray-400">${dependency.Description}</span>`;
            category.innerHTML = `<span class="px-2 py-1 rounded-lg ${this.getCategoryColor(dependency.Category)}">${dependency.Category}</span>`;
            additional.remove();
            actions.innerHTML = `
        <a href='https://github.com/bottlesdevs/dependencies/blob/main/${dependency.Category}/${item}.yml' class="text-blue-600 dark:text-blue-400">Details</a> |
        <a href='https://github.com/bottlesdevs/dependencies/issues/new/choose' class="text-blue-600 dark:text-blue-400">Report problem</a>`;
        } else if (this.databaseType === 'components') {
            const component = data as Component;
            descriptionOrType.classList.add('px-6', 'py-4', 'whitespace-nowrap');
            descriptionOrType.innerHTML = `<span class="px-2 py-1 rounded-lg">${component["Sub-category"] || 'n/a'}</span>`;
            category.innerHTML = `<span class="px-2 py-1 rounded-lg ${this.getCategoryColor(component.Category)}">${component.Category}</span>`;
            additional.classList.add('px-6', 'py-4', 'whitespace-nowrap');
            additional.innerHTML = `<span class="px-2 py-1 rounded-lg">${component.Channel}</span>`;
            actions.innerHTML = `
        <a href='https://github.com/bottlesdevs/components/blob/main/${component.Category}/${item}.yml' class="text-blue-600 dark:text-blue-400">Details</a> |
        <a href='https://github.com/bottlesdevs/components/issues/new/choose' class="text-blue-600 dark:text-blue-400">Report problem</a>`;
        }
    }

    private fetchAndRenderData() {
        fetch(this.dataUrl)
            .then((response) => response.text())
            .then((data) => {
                console.info(`${this.databaseType} database index found.`);
                const parsedData = jsyaml.load(data) as Record<string, any>;

                for (let item in parsedData) {
                    this.renderRow(item, parsedData[item]);
                }
            })
            .catch((err) => {
                console.error(`Failed to fetch ${this.databaseType} database index!`, err);
            });
    }
}

export default DatabaseTableManager;
