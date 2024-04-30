import { CHARACTERS } from "@/constants/pages/characters";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

export default function IndividualCards() {
  return (
    <>
      <div className="grid gap-5">
        {CHARACTERS.map((item) => (
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-5"
            key={item.id}
          >
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={item.image}
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
                href={item.profile}
                as={Link}
              >
                Perfil
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
