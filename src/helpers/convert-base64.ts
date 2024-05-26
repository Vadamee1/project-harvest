export const convertBase64 = async (image: Blob): Promise<string> => {
  const buffer = await image.arrayBuffer();
  const base64Image = Buffer.from(buffer).toString("base64");

  return `data:image/png;base64,${base64Image}`;
};
