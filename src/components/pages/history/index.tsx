import HistoryImage from "./HistoryImage";
import HistoryCard from "./HistoryCard";

export default function History() {
  return (
    <div className="flex gap-14 justify-center items-center">
      <div className="hidden md:block">
        <HistoryImage />
      </div>
      <HistoryCard />
    </div>
  );
}
