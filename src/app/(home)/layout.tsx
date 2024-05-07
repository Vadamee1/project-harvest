import { auth } from "@/auth";
import Appbar from "@/components/shared/Appbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sesion = await auth();
  const isLoggedIn = !!sesion?.user;

  return (
    <>
      <Appbar isLoggedIn={isLoggedIn} />
      {children}
    </>
  );
}
