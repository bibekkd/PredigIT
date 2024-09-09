import RoundButton from "@/components/RoundButton";
import * as DropdownMenu from 'zeego/dropdown-menu';
const Dropdown = () => {
    const onPress = () => {}
    return (
        <DropdownMenu.Root>
            <RoundButton title={'More'} icon={'ellipsis-horizontal'} onPress={onPress}/>
        </DropdownMenu.Root>
    )
}


export default Dropdown;
