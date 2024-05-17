import CharactersForm from "./CharactersForm";
import { Card, CardBody } from "@nextui-org/react";
import getUsers from "@/actions/user/read";

export default async function Create() {
  const users = await getUsers();

  return (
    <div className="flex items-center">
      <Card isBlurred>
        <CardBody className="mb-5">
          <CharactersForm users={users} />
        </CardBody>
      </Card>
    </div>
  );
}
