"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import BodyHome from "./BodyHome";
import { Faction } from "@/types/home";
import { useState } from "react";
import { projectTitle } from "@/config/fonts";
import { COVENANT, UNSC } from "@/constants/pages/home";

export default function HomePage() {
  const [faction, setFaction] = useState<Faction>(UNSC);

  const handleChangeFaction = () => {
    faction.name !== "Covenant" ? setFaction(COVENANT) : setFaction(UNSC);
  };
  return (
    <Card isBlurred isPressable onClick={handleChangeFaction}>
      {/* <CardHeader className="flex justify-center">
        <h1 className={`${projectTitle.className} text-3xl`}>
          Project Harvest
        </h1>
      </CardHeader> */}
      <CardBody>
        <BodyHome
          href={faction.image}
          color={faction.color}
          height={faction.height}
        />
      </CardBody>
    </Card>
  );
}
