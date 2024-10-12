import { promises as fs } from "fs";
import { getLocale } from "next-intl/server";
import path from "path";
import Info from "./info";
import Skills from "./skills";

export default async function AboutView() {
    const locale = await getLocale();
    const personalInfoFile = await fs.readFile(path.join(process.cwd(), `data/${locale}/personal.json`), "utf-8");
    const personalInfo = JSON.parse(personalInfoFile);

    const contactsFile = await fs.readFile(path.join(process.cwd(), `data/contacts.json`), "utf-8");
    const contacts = JSON.parse(contactsFile);

    const skillsFile = await fs.readFile(path.join(process.cwd(), `data/${locale}/skills.json`), "utf-8");
    const skills = JSON.parse(skillsFile);

    return (
        <div className='space-y-20 pt-8 md:pt-16'>
            <Info data={personalInfo} contacts={contacts} />
            <Skills data={skills} />
        </div>
    )
}