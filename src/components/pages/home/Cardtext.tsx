"use client";

import { projectTitle } from "@/config/fonts";
import { homeText } from "@/constants/pages/home";
import { Card, CardBody } from "@nextui-org/react";
import Typewriter from "typewriter-effect";

interface Props {
  textSize: string;
}

export default function CardText({ textSize }: Props) {
  return (
    <Card isBlurred className="ml-4 mr-4">
      <CardBody>
        <div className={`${projectTitle.className} ${textSize}`}>
          <Typewriter
            options={{
              strings: homeText,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </CardBody>
    </Card>
  );
}
