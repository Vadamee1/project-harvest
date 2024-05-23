"use client";

import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { convertBase64 } from "@/helpers/convert-base64";
import { useRouter } from "next/navigation";
import updateImage from "@/actions/user/updateImage";
import { UpdateUserImage } from "@/types/user";
import deleteUserImage from "@/actions/user/deleteImage";

interface Props {
  isOwner: boolean;
  image: string | null | undefined;
  userId: string;
}

export default function InputCardFile({ isOwner, image, userId }: Props) {
  const [chargedImage, setChargedImage] = useState<Blob | null>(null);
  const [base64Image, setBase64Image] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (chargedImage) {
      const uploadImage = async () => {
        const base64 = await convertBase64(chargedImage);
        setBase64Image(base64);
      };
      uploadImage();
    }
  }, [chargedImage]);

  const uploadImage = async (image: string) => {
    const data = {
      id: userId,
      image,
    };
    await updateImage(data);
    router.push("/");
  };

  const handleFileChange = (e: any) => {
    setChargedImage(e.target.files[0]);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelectClick = () => {
    if (inputRef.current && isOwner) {
      inputRef.current.click();
    }
  };

  const handleDeleteImage = async (image: string) => {
    const data: UpdateUserImage = {
      id: userId,
      image,
    };
    await deleteUserImage(data);
  };

  return (
    <>
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
                  onClick={() => uploadImage(base64Image)}
                >
                  Guardar
                </Button>
              </CardFooter>
            </>
          )}
        </Card>
      ) : (
        <Card>
          <Image alt="Imagen de perfil" src={image} height={250} width={250} />
          <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <Button
              className="text-tiny"
              variant="ghost"
              color="danger"
              radius="lg"
              size="sm"
              onClick={() => handleDeleteImage(image)}
            >
              Eliminar
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
    </>
  );
}
