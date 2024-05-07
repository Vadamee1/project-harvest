import { auth } from "@/auth";
import Appbar from "@/components/shared/Appbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user;
  const isLoggedIn = !!session?.user;

  return (
    <>
      <Appbar isLoggedIn={isLoggedIn} userImage={user?.image} />
      {children}
    </>
  );
}
