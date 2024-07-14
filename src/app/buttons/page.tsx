import { Button } from "@/components/ui/button";

const Buttons = () => {
    return (
        <div className='flex flex-col max-w-[200px]'>
            <Button>inicio</Button>
            <Button variant={'primary'}>inicio</Button>
            <Button variant={'primaryOutline'}>inicio</Button>
            <Button variant={'secondary'}>inicio</Button>
            <Button variant={'secondaryOutline'}>inicio</Button>
            <Button variant={'danger'}>inicio</Button>
            <Button variant={'dangerOutline'}>inicio</Button>
            <Button variant={'super'}>inicio</Button>
            <Button variant={'superOutline'}>inicio</Button>
            <Button variant={'ghost'}>inicio</Button>
            <Button variant={'sidebar'}>inicio</Button>
            <Button variant={'sidebarOutline'}>inicio</Button>
        </div>
    );
}

export default Buttons;