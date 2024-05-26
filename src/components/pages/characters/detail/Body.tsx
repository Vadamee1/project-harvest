import { infoText, projectTitle } from "@/config/fonts";
import { CharacterDetailType } from "@/types/characters";
import { Button, Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import { IoPencil } from "react-icons/io5";
import NextLink from "next/link";
import InfoCard from "./InfoCard";
import EditForm from "./EditForm";

interface Props {
  character: CharacterDetailType | null;
  onEdit?: boolean;
  isOwner: boolean;
}

export default function Body({ character, onEdit, isOwner }: Props) {
  return (
    <Card isBlurred className="w-full">
      <CardHeader className="flex justify-between">
        <p className={`flex justify-start ${projectTitle.className} text-4xl`}>
          Datos
        </p>
        {!onEdit && isOwner ? (
          <Button
            startContent={<IoPencil />}
            color="warning"
            variant="ghost"
            href={`/characters/${character?.id}/editar`}
            as={NextLink}
          >
            Editar
          </Button>
        ) : (
          ""
        )}
      </CardHeader>
      <CardBody className="">
        {!onEdit ? (
          <InfoCard character={character} />
        ) : (
          <EditForm character={character} />
        )}
      </CardBody>
    </Card>
  );
}
