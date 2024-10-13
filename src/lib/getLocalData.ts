import fsPromises from 'fs/promises';
import path from 'path';

export async function getLocalData(fileName: string, locale?: string) {
    const filePath = locale
        ? path.join(process.cwd(), `src/data/${locale}/${fileName}.json`)
        : path.join(process.cwd(), `src/data/${fileName}.json`);

    const jsonData = await fsPromises.readFile(filePath, "utf8");
    const objectData = JSON.parse(jsonData);

    return objectData
}