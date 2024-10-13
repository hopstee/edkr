import { Project } from "@/shared/types/project";
import ProjectsView from "@/views/main/projects";
import fsPromises from "fs/promises";
import { getLocale } from "next-intl/server";
import path from "path";

export default async function ProjectsPage() {
    const locale = await getLocale();
    const projectsFile = await fsPromises.readFile(path.resolve(`src/data/${locale}/projects.json`), "utf8");
    const projects: Project[] = JSON.parse(projectsFile);

    return <ProjectsView projects={projects} />
}