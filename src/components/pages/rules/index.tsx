import RulesCard from "./RulesCard";
import RulesImage from "./RulesImage";

export default function Rules() {
  return (
    <div className="flex gap-14 justify-center items-center">
      <div className="hidden md:block">
        <RulesImage />
      </div>
      <RulesCard />
    </div>
  );
}
