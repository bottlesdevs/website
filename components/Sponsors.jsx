const Sponsors = ({ onNavigate }) => {
  return (
    <section className="text-center py-20 border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-zinc-900 dark:text-white tracking-tight">Sponsors</h2>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
          <a href="https://www.jetbrains.com/?from=bottles" target="_blank" rel="noopener noreferrer" className="group">
            <img
              src={`/assets/sponsors/jetbrains.png`}
              alt="JetBrains"
              className="h-12 grayscale opacity-70 dark:invert group-hover:grayscale-0 group-hover:opacity-100 dark:group-hover:[filter:none] transition-all duration-300"
            />
          </a>
          <a href="https://www.gitbook.com/?ref=bottles" target="_blank" rel="noopener noreferrer" className="group">
            <img
              src={`/assets/sponsors/gitbook.png`}
              alt="GitBook"
              className="h-12 grayscale opacity-70 dark:invert group-hover:grayscale-0 group-hover:opacity-100 dark:group-hover:[filter:none] transition-all duration-300"
            />
          </a>
          <a href="https://www.linode.com/?from=bottles" target="_blank" rel="noopener noreferrer" className="group">
            <img
              src={`/assets/sponsors/linode-brand.png`}
              alt="Linode"
              className="h-12 grayscale opacity-70 dark:invert group-hover:grayscale-0 group-hover:opacity-100 dark:group-hover:[filter:none] transition-all duration-300"
            />
          </a>
          <a href="https://appwrite.io?from=bottles" target="_blank" rel="noopener noreferrer" className="group">
            <img
              src={`/assets/sponsors/built-with-appwrite.svg`}
              alt="Appwrite"
              className="h-12 grayscale opacity-70 dark:invert group-hover:grayscale-0 group-hover:opacity-100 dark:group-hover:[filter:none] transition-all duration-300"
            />
          </a>
          <a href="https://hyperbit.it/" target="_blank" rel="noopener noreferrer" className="group">
            <img
              src={`/assets/sponsors/HyperBit_Dark_Logo.png`}
              alt="Hyperbit"
              className="h-12 grayscale opacity-70 dark:invert group-hover:grayscale-0 group-hover:opacity-100 dark:group-hover:[filter:none] transition-all duration-300"
            />
          </a>
          <a href="https://www.scaleway.com/en/" target="_blank" rel="noopener noreferrer" className="group">
            <img
              src={`/assets/sponsors/Scaleway_FOSS.png`}
              alt="Scaleway"
              className="h-12 grayscale opacity-70 dark:invert group-hover:grayscale-0 group-hover:opacity-100 dark:group-hover:[filter:none] transition-all duration-300"
            />
          </a>
        </div>

        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          Plus all the donations from the awesome users who support Bottles!
        </p>

        {onNavigate && (
          <button
            onClick={() => onNavigate('funding')}
            className="bg-zinc-900 dark:bg-white hover:bg-zinc-700 dark:hover:bg-zinc-200 text-white dark:text-black px-6 py-2 rounded-full font-medium transition-all"
          >
            Show more
          </button>
        )}
      </div>
    </section>
  );
};

export default Sponsors;