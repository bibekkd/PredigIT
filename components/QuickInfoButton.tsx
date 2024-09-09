import {TouchableOpacity, View, Text} from "react-native";

const QuickInfoButton = () => (
    <TouchableOpacity className="flex flex-row justify-center items-center w-max h-10 mx-3 bg-cyan-300 rounded-2xl">
        <View>
            <Text className="text-lg">Quick Info</Text>
        </View>
    </TouchableOpacity>
)

export default QuickInfoButton;