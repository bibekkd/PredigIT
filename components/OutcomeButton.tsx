import {Text, TouchableOpacity} from "react-native";

const OutcomeButton =  ({title}) => (
        <TouchableOpacity className={`w-[160] h-10 rounded-2xl ${title === 'Yes' ? "bg-green-500" : "bg-red-500"} mt-5 mb-2 mx-3 justify-center items-center`}>
            <Text className="font-JakartaMedium text-xl">{title}</Text>
        </TouchableOpacity>

)

export default OutcomeButton;