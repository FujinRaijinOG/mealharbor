// filepath: c:\Users\Lenovo\mealharbor\components\About\index.tsx
"use client";

import Image from "next/image";
import { MotionDiv } from "@/app/libs/framer-utls";

const About = () => {
  return (
    <>
      {/* ===== About Section Start ===== */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <MotionDiv
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="MealHarbor in Action - Light Mode"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="MealHarbor in Action - Dark Mode"
                className="hidden dark:block"
                fill
              />
            </MotionDiv>
            <MotionDiv
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                MealHarbor – Your AI Kitchen Assistant
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Transforming Meal Planning for a Healthier Lifestyle
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  {" "}
                  with Smart AI
                </span>
              </h2>
              <p>
                MealHarbor leverages artificial intelligence to create personalized meal plans based on your pantry, dietary needs, and lifestyle preferences. Enjoy a stress-free cooking experience while saving time and reducing food waste.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    AI-Driven Personalized Meal Plans
                  </h3>
                  <p>Tailor-made recipes that adapt to your pantry and taste.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Smart Grocery & Pantry Management
                  </h3>
                  <p>Automated grocery lists and inventory tracking for effortless shopping.</p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>
      {/* ===== About Section End ===== */}

      {/* ===== About Two Start ===== */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <MotionDiv
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Effortless Kitchen Integration
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Seamless Connectivity with
                <span className="relative ml-2.5 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  {" "}
                  Your Favorite Services
                </span>
              </h2>
              <p>
                Connect effortlessly with grocery delivery platforms, smart appliances, and more. MealHarbor streamlines your meal planning process, ensuring you always have what you need for a perfect meal.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Discover More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4766 6.16664L6.00658 1.69664L7.18492 0.518311L13.6666 6.99998L7.18492 13.4816L6.00658 12.3033L10.4766 7.83331H0.333252V6.16664H10.4766Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </MotionDiv>
            <MotionDiv
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-02.svg"
                alt="MealHarbor Integration Overview - Light Mode"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-02.svg"
                alt="MealHarbor Integration Overview - Dark Mode"
                className="hidden dark:block"
                fill
              />
            </MotionDiv>
          </div>
        </div>
      </section>
      {/* ===== About Two End ===== */}
    </>
  );
};

export default About;
