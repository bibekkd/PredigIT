import { View, Text, TouchableOpacity } from 'react-native';

const CategoryButton = () => (
    <TouchableOpacity>
        <View className="w-24 h-10 bg-indigo-500 mx-2 rounded-full justify-center items-center shadow-lg">
            <Text className="text-white text-base font-semibold">All</Text>
        </View>
    </TouchableOpacity>
);

export default CategoryButton;
