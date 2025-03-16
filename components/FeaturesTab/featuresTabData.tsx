import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "AI-Powered Meal Planning",
    desc1:
      "Leverage advanced AI to create meal plans perfectly suited to your pantry and preferences.",
    desc2:
      "Experience tailored recipes that adjust based on your nutritional needs and cooking habits.",
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "Optimized Grocery Shopping",
    desc1:
      "Receive smart grocery lists that identify what you need, reducing waste and saving money.",
    desc2:
      "Streamline your shopping experience with lists that adjust in real time to your meal plans.",
    image: "/images/features/features-light-02.png",
    imageDark: "/images/features/features-dark-02.svg",
  },
  {
    id: "tabThree",
    title: "Seamless Pantry Management & Integrations",
    desc1:
      "Easily manage your pantry inventory and receive proactive meal suggestions.",
    desc2:
      "Integrate with grocery delivery services and smart kitchen devices for a hassle-free experience.",
    image: "/images/features/features-light-03.png",
    imageDark: "/images/features/features-dark-03.svg",
  },
];

export default featuresTabData;
