import { CHARACTERS } from "@/constants/pages/characters";
import { CharacterList } from "@/types/characters";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

interface Props {
  characters: CharacterList[];
}

export default function IndividualCards({ characters }: Props) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {characters.map((item) => (
          <Card isFooterBlurred className="w-full h-[300px] " key={item.id}>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full  object-cover"
              src={item.image ? item.image : "/images/Cat_November.jpg"}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">{item.name}</p>
              </div>
              <Button
                className="text-white"
                color="warning"
                variant="ghost"
                radius="full"
                size="sm"
                href={`/characters/${item.id}`}
                as={Link}
              >
                Detalle
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
