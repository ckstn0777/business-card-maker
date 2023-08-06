import { readFile } from "fs/promises";
import path from "path";
import { PrismaClient } from "@prisma/client";

const templateSave = async () => {
  const prisma = new PrismaClient();

  try {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), "src", "data");
    //Read the json data file data.json
    const fileContents = await readFile(
      jsonDirectory + "/template.json",
      "utf8"
    );

    // console.log(JSON.parse(fileContents));

    await prisma.businessCard.create({
      data: {
        content: JSON.parse(fileContents),
      },
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

templateSave();
