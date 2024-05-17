"use client";

import updateCharacter from "@/actions/characters/update";
import { CharacterDetailType } from "@/types/characters";
import {
  Button,
  DatePicker,
  DateValue,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

import { parseDate, getLocalTimeZone } from "@internationalized/date";

type Params = Omit<CharacterDetailType, "birthday"> & {
  birthday?: Date | null;
};

interface Props {
  character: CharacterDetailType | null;
}

export default function EditForm({ character }: Props) {
  const router = useRouter();

  console.log(character?.birthday?.toISOString().substring(0, 16));

  const formik = useFormik({
    initialValues: {
      id: character?.id ? character.id : 1,
      name: character?.name ? character.name : "",
      faction: character?.faction ? character.faction : "",
      age: character?.age ? character.age : "",
      birthday: character?.birthday
        ? parseDate(character.birthday.toISOString().substring(0, 10))
        : null,
      height: character?.height ? character.height : "",
      weight: character?.weight ? character.weight : "",
      race: character?.race ? character.race : "",
      position: character?.position ? character.position : "",
      profile: character?.profile ? character.profile : "",
      history: character?.history ? character.history : "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Debes ingresar un nombre"),
      faction: yup.string().required("Selecciona una facción"),
      age: yup.number().positive().integer(),
      birthday: yup.date().nullable(),
      height: yup.number(),
      weight: yup.number(),
      race: yup.string(),
      position: yup.string(),
      profile: yup.string(),
      history: yup.string(),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const resp = await updateCharacter({
        ...values,
        birthday: values.birthday?.toDate(getLocalTimeZone()),
      });
      if (resp.severity === "success") {
        router.push("/");
      }
    },
  });

  const handleDateChange = (newDate: DateValue) => {
    formik.setFieldValue("birthday", newDate, true);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-3 ml-5 mr-5">
        <Input
          label="Nombre del personaje"
          name="name"
          size="lg"
          variant="underlined"
          isRequired
          value={formik.values.name}
          onChange={formik.handleChange}
          errorMessage={formik.errors.name}
        />
        <Input
          label="Facción"
          name="faction"
          size="lg"
          variant="underlined"
          isRequired
          value={formik.values.faction}
          onChange={formik.handleChange}
          errorMessage={formik.errors.faction}
        />
        <Input
          label="Edad"
          name="age"
          size="lg"
          variant="underlined"
          value={String(formik.values.age)}
          onChange={formik.handleChange}
          errorMessage={formik.errors.age}
        />
        <DatePicker
          label="Cumpleaños"
          name="birthday"
          size="lg"
          variant="underlined"
          value={formik.values.birthday}
          onChange={handleDateChange}
        />
        <Input
          label="Altura"
          name="height"
          size="lg"
          variant="underlined"
          value={String(formik.values.height)}
          onChange={formik.handleChange}
          errorMessage={formik.errors.height}
        />
        <Input
          label="Peso"
          name="weight"
          size="lg"
          variant="underlined"
          value={String(formik.values.weight)}
          onChange={formik.handleChange}
          errorMessage={formik.errors.weight}
        />
        <Input
          label="Raza"
          name="race"
          size="lg"
          variant="underlined"
          value={formik.values.race}
          onChange={formik.handleChange}
          errorMessage={formik.errors.race}
        />
        <Input
          label="Rango militar"
          name="position"
          size="lg"
          variant="underlined"
          defaultValue="07/12/2000"
          value={formik.values.position}
          onChange={formik.handleChange}
          errorMessage={formik.errors.position}
        />
        <Input
          label="Perfil"
          name="profile"
          size="lg"
          variant="underlined"
          value={formik.values.profile}
          onChange={formik.handleChange}
          errorMessage={formik.errors.profile}
        />
      </div>
      <div className="flex mt-5 ml-5 mr-5">
        <Textarea
          label="Historia"
          name="history"
          size="lg"
          variant="underlined"
          value={formik.values.history}
          onChange={formik.handleChange}
          errorMessage={formik.errors.history}
        />
      </div>
      <div className="flex justify-end mt-8">
        <Button variant="ghost" color="primary" type="submit">
          Send
        </Button>
      </div>
    </form>
  );
}
