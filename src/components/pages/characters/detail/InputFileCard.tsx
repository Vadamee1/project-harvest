"use client";

import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import NextImage from "next/image";
import { IoAddCircleOutline } from "react-icons/io5";

interface Props {
  image: string | null | undefined;
  isOwner: boolean;
}

export default function InputCardFile({ image, isOwner }: Props) {
  const [onEdit, setOnEdit] = useState(false);

  const formik = useFormik({
    initialValues: {
      profilePhoto: "",
    },
    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append("profilePhoto", values.profilePhoto);
    },
  });

  const handleFileChange = (e: any) => {
    formik.setFieldValue("profilePhoto", e.target.files[0]);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelectClick = () => {
    if (isOwner) {
      if (inputRef.current) inputRef.current.click();
    } else {
    }
    setOnEdit(true);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Card isBlurred isPressable>
          {!image ? (
            <CardBody onClick={handleSelectClick}>
              <div className="flex justify-center items-center h-80 w-64">
                <IoAddCircleOutline className="text-4xl" />
              </div>
            </CardBody>
          ) : (
            <>
              <CardBody>
                <Image
                  alt="Profile picture"
                  src={image ? image : "/images/Cat_November.jpg"}
                  height={400}
                  width={300}
                  as={NextImage}
                  priority
                  className="object-cover"
                />
              </CardBody>
              <CardFooter
                className="absolute bg-white/70 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center"
                onClick={handleSelectClick}
              >
                <p className="text-black">Change photo</p>
              </CardFooter>
            </>
          )}
        </Card>
        <input
          type="file"
          name="proflePhoto"
          onChange={handleFileChange}
          className="hidden"
          ref={inputRef}
        />
        <Button type="submit">send</Button>
      </form>
    </>
  );
}
