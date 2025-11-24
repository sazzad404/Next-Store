import AllAppsList from "@/Components/AllAppList";
import FeatureDark from "@/Components/Feature";
import AnimatedAppFeedback from "@/Components/features/AnimatedFeedbacks";
import AppFeedbackCarousel from "@/Components/features/AnimatedFeedbacks";

import PrivateRoute from "@/Private/PrivateRoute";

export default async function AllApps() {
  const res = await fetch("http://localhost:5000/apps");
  const apps = await res.json();

  return (
    <PrivateRoute>
      <div className="min-h-screen bg-[#0b0b0e] text-white py-10 px-4">
        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          All Apps
        </h1>
        <AllAppsList apps={apps} itemsPerPage={12} />
      </div>
      <FeatureDark></FeatureDark>
      <AnimatedAppFeedback></AnimatedAppFeedback>
    </PrivateRoute>
  );
}
