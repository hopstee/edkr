import Contacts from "./contacts";
import Info from "./info";
import Skills from "./skills";

export default function AboutView() {
    return (
        <div className="space-y-20 py-8 md:py-16">
            <Info />
            <Contacts />
            <Skills />
        </div>
    )
}