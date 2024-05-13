import InfoCard from "./InfoCard";
import ImageCard from "./ImageCard";

export default function FirstStepsCard() {
  return (
    <div className="flex gap-14 justify-center items-center">
      <div className="hidden md:block">
        <ImageCard />
      </div>
      <InfoCard />
    </div>
  );
}
