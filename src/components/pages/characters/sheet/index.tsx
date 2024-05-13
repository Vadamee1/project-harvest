import ImageSheet from "./ImageSheet";
import SheetCard from "./SheetCard";

export default function Sheet() {
  return (
    <div className="flex gap-14 justify-center items-center">
      <div className="hidden md:block">
        <ImageSheet />
      </div>
      <SheetCard />
    </div>
  );
}
