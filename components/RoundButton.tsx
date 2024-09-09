import {View, Text, TouchableOpacity} from 'react-native';
import {RoundButtonProps} from "@/types/type";
import {Ionicons} from '@expo/vector-icons';
const RoundButton = ({
    title,
    icon,
   onPress
}: RoundButtonProps) => {
    return (
        <TouchableOpacity className="align-items-center gap-x-5" onPress={onPress}>
            <View className="flex flex-row items-center justify-center w-[60] h-[60] rounded-2xl bg-purple-200">
                <Ionicons name={icon} size={35} color={'#0b0d1f'}/>
            </View>
            <Text className="font-JakartaMedium text-[30] mt-2">{title}</Text>
        </TouchableOpacity>
    )
}

export default RoundButton;