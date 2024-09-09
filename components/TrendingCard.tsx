import { TouchableOpacity, View, Text, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const TrendingCard = ({cardTitle, imageUrl, gradientOne, gradientTwo}) => (
    <TouchableOpacity>
        <LinearGradient
            colors={[`${gradientOne}`, `${gradientTwo}`]} // Gradient colors (orange '#ff7e5f' to peach '#feb47b')
            start={{ x: 0, y: 0 }} // Starting position of the gradient
            end={{ x: 1, y: 1 }} // Ending position of the gradient
            className="w-full h-[150] rounded-md mt-3 "
        >
            <View className="flex flex-row justify-between items-center h-full px-4">
                <Text className="text-white font-bold text-xl flex-1 flex-wrap mr-2">
                    {cardTitle}
                </Text>
                <Image
                    source={{ uri: imageUrl }}
                    className="w-[100] h-[120] rounded-xl"
                />
            </View>
        </LinearGradient>
    </TouchableOpacity>
);

export default TrendingCard;
