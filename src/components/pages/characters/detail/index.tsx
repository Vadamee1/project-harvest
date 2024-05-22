import { projectTitle } from "@/config/fonts";
import ImageCard from "./ImageCard";
import Body from "./Body";
import { CharacterDetailType } from "@/types/characters";
import InputCardFile from "./InputFileCard";

interface Props {
  character: CharacterDetailType | null;
  onEdit?: boolean;
  isOwner: boolean;
}

export default function DetailCard({ character, isOwner, onEdit }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
      <div>
        {onEdit ? (
          <InputCardFile isOwner={isOwner} image={character?.image} />
        ) : (
          <>
            <p
              className={`flex justify-center ${projectTitle.className} text-4xl`}
            >
              Imagen
            </p>
            <ImageCard image={character?.image} />
          </>
        )}
      </div>
      <div>
        <Body character={character} onEdit={onEdit} isOwner={isOwner} />
      </div>
    </div>
  );
}
