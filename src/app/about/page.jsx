// server component
import AnimatedCard from "./AnimatedCard";

export default function AboutSection() {
  const features = [
    {
      title: "Fast Performance",
      description: "Our apps are optimized for speed and efficiency.",
    },
    {
      title: "User Friendly",
      description: "Intuitive design that anyone can use easily.",
    },
    {
      title: "Secure",
      description: "Security first approach for user data and privacy.",
    },
    {
      title: "Global Access",
      description: "Access apps from anywhere in the world anytime.",
    },
    {
      title: "Modern Design",
      description: "Beautiful UI/UX that is responsive and sleek.",
    },
    {
      title: "Continuous Updates",
      description: "Regular updates to keep apps safe and up-to-date.",
    },
    {
      title: "Multi-Platform",
      description: "Use our apps on mobile, tablet, and desktop seamlessly.",
    },
    {
      title: "Offline Mode",
      description:
        "Access essential features even without an internet connection.",
    },
    {
      title: "24/7 Support",
      description: "Our team is available around the clock to assist you.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-24 px-4 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Text */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6">
          About NEXT STORE
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl mb-16 max-w-3xl mx-auto">
          NEXT STORE is your go-to app store for the latest and most secure
          apps. Explore our features below to see why we are the best choice.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <AnimatedCard
              key={index}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
