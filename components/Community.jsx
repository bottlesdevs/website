import { MessageSquare, ArrowRight } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="py-32 bg-white dark:bg-black relative border-t border-zinc-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-6">
            Community
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Join thousands of users sharing configurations, tips, and helping each other.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <a href="https://discord.gg/bottles" target="_blank" rel="noreferrer" className="group relative bg-gradient-to-br from-[#5865F2]/10 to-[#5865F2]/5 dark:from-[#5865F2]/20 dark:to-[#5865F2]/10 hover:from-[#5865F2]/20 hover:to-[#5865F2]/10 dark:hover:from-[#5865F2]/30 dark:hover:to-[#5865F2]/20 rounded-xl p-8 border-2 border-[#5865F2]/30 dark:border-[#5865F2]/40 hover:border-[#5865F2]/60 dark:hover:border-[#5865F2]/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#5865F2]/20">
            <div className="flex flex-col h-full justify-between">
              <div className="mb-8">
                <div className="w-14 h-14 bg-[#5865F2] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.5382-9.674-3.533-13.6632a.0697.0697 0 00-.032-.0277zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Join our Discord</h3>
                <p className="text-zinc-700 dark:text-zinc-300 font-medium">Chat in real-time with developers. The fastest way to get help and share your setups.</p>
              </div>
              <div className="inline-flex items-center justify-center bg-[#5865F2] text-white px-6 py-3 rounded-full text-sm font-bold group-hover:bg-[#4752C4] transition-colors shadow-md">
                Join Server <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </a>

          <a href="https://github.com/bottlesdevs/Bottles/discussions" target="_blank" rel="noreferrer" className="group relative bg-zinc-50 dark:bg-zinc-900/20 hover:bg-zinc-100 dark:hover:bg-zinc-900/40 rounded-xl p-8 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-white/50 transition-all duration-300">
            <div className="flex flex-col h-full justify-between">
              <div className="mb-8">
                <div className="w-12 h-12 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:border-zinc-900 dark:group-hover:border-white group-hover:text-zinc-900 dark:group-hover:text-white transition-colors text-zinc-500 dark:text-zinc-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">GitHub Discussions</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">Ask questions, propose features, and report bugs. Perfect for long-form support.</p>
              </div>
              <div className="flex items-center text-zinc-900 dark:text-white text-sm font-medium group-hover:gap-2 transition-all">
                Go to Forum <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Community;