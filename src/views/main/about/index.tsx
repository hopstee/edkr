import fsPromises from "fs/promises";
import { getLocale } from "next-intl/server";
import path from "path";
import Info from "./info";
import Skills from "./skills";

export default async function AboutView() {
    const locale = await getLocale();
    const personalInfoFile = await fsPromises.readFile(path.resolve(`src/data/${locale}/personal.json`), "utf-8");
    const personalInfo = JSON.parse(personalInfoFile);

    const contactsFile = await fsPromises.readFile(path.resolve(`src/data/contacts.json`), "utf-8");
    const contacts = JSON.parse(contactsFile);

    const skillsFile = await fsPromises.readFile(path.resolve(`src/data/${locale}/skills.json`), "utf-8");
    const skills = JSON.parse(skillsFile);

    return (
        <div className='space-y-20 pt-8 md:pt-16'>
            <Info data={personalInfo} contacts={contacts} />
            <Skills data={skills} />
        </div>
    )
}