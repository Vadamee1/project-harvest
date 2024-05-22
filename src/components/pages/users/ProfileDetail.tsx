"use client";

import { SendResetPassword } from "@/app/api/send/reset-password";
import { infoText } from "@/config/fonts";
import { UserType } from "@/types/user";
import { Button } from "@nextui-org/react";

interface Props {
  user: UserType;
}

export default function ProfileDetail({ user }: Props) {
  return (
    <div className="grid gap-4">
      <div className={infoText.className}>
        <p className="text-xl">Apodo</p>
        <p>{user.nickname}</p>
      </div>
      <div>
        <p className="text-xl">Correo electronico</p>
        <p>{user.email}</p>
      </div>
      <Button onClick={() => SendResetPassword(user.email)}>
        Cambiar contraseña
      </Button>
    </div>
  );
}
