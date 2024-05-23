import { UserType } from "@/types/user";
import ProfileDetail from "./ProfileDetail";
import { Card, CardBody } from "@nextui-org/react";
import ImageCard from "./ImageCard";
import InputCardFile from "./InputCharacterFile";

interface Props {
  user: UserType;
  isOwner: boolean;
}

export default function UserCard({ user, isOwner }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <Card isBlurred>
        {isOwner ? (
          <InputCardFile
            isOwner={isOwner}
            image={user.image}
            userId={user.id}
          />
        ) : (
          <ImageCard image={user.image} />
        )}
        <CardBody>
          <ProfileDetail user={user} />
        </CardBody>
      </Card>
    </div>
  );
}
