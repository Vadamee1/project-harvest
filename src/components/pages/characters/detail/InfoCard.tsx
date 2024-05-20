import { infoText } from "@/config/fonts";
import { CharacterDetailType } from "@/types/characters";
import { Button, Link } from "@nextui-org/react";
import NextLink from "next/link";

interface Props {
  character: CharacterDetailType | null;
}

export default function InfoCard({ character }: Props) {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        <div className={`${infoText.className}`}>
          <p className="text-xl">Nombre:</p>
          <p>{character?.name}</p>
        </div>
        <div className={`${infoText.className}`}>
          <p className="text-xl">Facción:</p>
          <p>{character?.faction}</p>
        </div>
        <div className={`${infoText.className}`}>
          <p className="text-xl">Raza:</p>
          <p>{character?.race}</p>
        </div>
        <div className={`${infoText.className}`}>
          <p className="text-xl">Rango:</p>
          <p>{character?.position}</p>
        </div>
        <div className={`${infoText.className}`}>
          <p className="text-xl">Edad:</p>
          <p>{character?.age}</p>
        </div>
        <div className={`${infoText.className}`}>
          <p className="text-xl">Cumpleaños:</p>
          <p>{character?.birthday ? String(character?.birthday) : ""}</p>
        </div>
        <div className={`${infoText.className}`}>
          <p className="text-xl">Altura:</p>
          <p>{character?.height}</p>
        </div>
        <div className={`${infoText.className}`}>
          <p className="text-xl">Peso:</p>
          <p>{character?.weight}</p>
        </div>
        <div className={`${infoText.className}`}>
          <p className="text-xl">Usuario:</p>
          {character && (
            <Link as={NextLink} href={character?.profile} color="warning">
              {character?.user.nickname}
            </Link>
          )}
        </div>
      </div>
      <Button variant="ghost" color="warning" as={Link} href="/characters">
        Regresar
      </Button>
    </div>
  );
}
