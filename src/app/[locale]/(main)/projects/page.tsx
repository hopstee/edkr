import { Project } from "@/shared/types/project";
import ProjectsView from "@/views/main/projects";
import { promises as fs } from "fs";
import { getLocale } from "next-intl/server";

export default async function ProjectsPage() {
    const locale = await getLocale();
    const projectsFile = await fs.readFile(`data/${locale}/projects.json`, "utf8");
    const projects: Project[] = JSON.parse(projectsFile);

    return <ProjectsView projects={projects} />
}