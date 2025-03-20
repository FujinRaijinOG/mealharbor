// filepath: c:\Users\Lenovo\mealharbor\components\Hero\index.tsx
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🍽️ MealHarbor - Smarter Meals, Less Effort
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Plan. Shop. Eat.  
                <span className="relative ml-2.5 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Effortlessly.
                </span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Let AI simplify your meal planning. Upload your pantry, get customized meal plans, and generate a grocery list in seconds. 
                No more guesswork—just smart, stress-free meals every day.
              </p>

              <div className="mt-10 flex gap-4">
                <Link
                  href="/dashboard"
                  aria-label="Try MealHarbor AI"
                  className="inline-block rounded-full bg-green-600 px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                >
                  Get Started for Free
                </Link>
                <Link
                  href="/features"
                  aria-label="Discover Features"
                  className="inline-block rounded-full border border-green-600 px-7.5 py-2.5 text-green-600 duration-300 ease-in-out hover:bg-green-600 hover:text-white dark:border-green-500 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-white"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="Decorative Shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="Decorative Shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="Decorative Shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="MealHarbor AI Dashboard Preview"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="MealHarbor AI Dashboard Preview (Dark Mode)"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
