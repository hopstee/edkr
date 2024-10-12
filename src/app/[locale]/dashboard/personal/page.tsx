import PersonalContacts from "@/views/dashboard/personal/contacts";
import PersonalInfo from "@/views/dashboard/personal/info";

export default function PersonalPage() {
    return (
        <div className='max-w-[500px] mx-auto flex flex-col gap-5'>
            <PersonalInfo />
            <PersonalContacts />
        </div >
    )
}