import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

export default function Banner() {
  return (
    <section className="container mx-auto px-4 text-center py-32 min-h-[60vh] flex flex-col items-center justify-center">
      <FadeInWhenVisible>
        <h1>
          <span className="text-7xl font-bold text-gray-900 dark:text-gray-100 max-sm:text-5xl">
            Komiljon Kamol
          </span>
        </h1>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-3xl font-medium text-gray-700 dark:text-gray-300 max-sm:text-2xl">
            Software Engineer
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Crafting responsive and accessible web experiences
          </p>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
