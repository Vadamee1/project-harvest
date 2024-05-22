"use client";

import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { convertBase64 } from "@/helpers/convert-base64";

interface Props {
  isOwner: boolean;
  image: string | null | undefined;
}

export default function InputCardFile({ isOwner, image }: Props) {
  const [chargedImage, setChargedImage] = useState<Blob | null>(null);
  const [base64Image, setBase64Image] = useState("");

  useEffect(() => {
    if (chargedImage) {
      const uploadImage = async () => {
        const base64 = await convertBase64(chargedImage);
        setBase64Image(base64);
      };
      uploadImage();
    }
  }, [chargedImage]);

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
    setChargedImage(e.target.files[0]);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelectClick = () => {
    if (inputRef.current && isOwner) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {!image ? (
          <Card isBlurred isPressable={!base64Image}>
            {!base64Image ? (
              <>
                <CardBody onClick={handleSelectClick}>
                  <div className="flex justify-center items-center h-64 w-64">
                    <IoAddCircleOutline className="text-4xl" />
                  </div>
                </CardBody>
              </>
            ) : (
              <>
                <Image alt="Imagen de perfil" src={base64Image} />
                <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <Button
                    className="text-tiny"
                    variant="ghost"
                    color="primary"
                    radius="lg"
                    size="sm"
                  >
                    Guardar
                  </Button>
                </CardFooter>
              </>
            )}
          </Card>
        ) : (
          <Card>
            <Image
              alt="Imagen de perfil"
              src={image}
              height={250}
              width={250}
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                className="text-tiny"
                variant="ghost"
                color="primary"
                radius="lg"
                size="sm"
              >
                Guardar
              </Button>
            </CardFooter>
          </Card>
        )}
        <input
          type="file"
          name="proflePhoto"
          onChange={handleFileChange}
          className="hidden"
          ref={inputRef}
        />
      </form>
    </>
  );
}
