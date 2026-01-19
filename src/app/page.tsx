import InteractiveNetwork from "@/components/InteractiveNetwork";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-black selection:bg-neutral-200 dark:selection:bg-neutral-800">
      {/* Background Interactive Art */}
      <InteractiveNetwork />

      {/* Content Overlay */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-8xl sm:text-9xl font-bold tracking-tighter text-neutral-900 dark:text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          SOYORO
        </h1>
        <p className="text-xl sm:text-2xl font-light text-neutral-600 dark:text-neutral-300 tracking-widest animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          예술경영 입시의 확실한 길을 잇다
        </p>

        {/* Optional: Call to Action or minimalistic decorative element */}
        <div className="mt-12 h-px w-24 bg-neutral-300 dark:bg-neutral-700 animate-in fade-in zoom-in duration-1000 delay-500"></div>
      </main>
    </div>
  );
}
