import { Inter, Jersey_10, Merriweather } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const textCards = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const projectTitle = Jersey_10({
  subsets: ["latin"],
  weight: ["400"],
});

export const infoText = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});
