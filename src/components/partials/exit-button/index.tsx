import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ExitButton() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch('/api/logout', { method: 'POST', credentials: 'include' })
        router.push('/');
    }

    return (
        <Button
            variant='ghost'
            size='icon'
            onClick={handleLogout}
            className='bg-red-500/20 dark:bg-red-700/30 hover:bg-red-500/30 dark:hover:bg-red-700/40 rounded-xl'
        >
            <LogOut className='w-4 h-4 text-red-600' />
        </Button>
    )
}