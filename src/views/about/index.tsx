import Info from "./info";
import Skills from "./skills";

export default function AboutView() {
    return (
        <div className='space-y-20 pt-8 md:pt-16'>
            <Info />
            <Skills />
        </div>
    )
}