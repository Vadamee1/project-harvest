import { infoText } from "@/config/fonts";
import { sheetData, sheetInfo } from "@/constants/pages/characterSheet";

export default function SheetBody() {
  return (
    <div>
      <div>
        {sheetData.map((item) => (
          <div key={item} className={`${infoText.className} text-xl`}>
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 text-xl">
        <div className={`${infoText.className} mt-5`}>{sheetInfo[0]}</div>
        <div className={`${infoText.className}`}>{sheetInfo[1]}</div>
        <div className={`${infoText.className}`}>{sheetInfo[2]}</div>
      </div>
    </div>
  );
}
