import { ExperienceList } from "@/shared/types/experience";
import ExperiencesView from "@/views/main/experience";
import { promises as fs } from "fs";
import { getLocale } from "next-intl/server";
import path from "path";

export default async function ExperiencesPage() {
    const locale = await getLocale();
    const experienceListFile = await fs.readFile(path.resolve(`data/${locale}/experience.json`), "utf8");
    const experienceList: ExperienceList = JSON.parse(experienceListFile);

    return <ExperiencesView experienceList={experienceList} />
}