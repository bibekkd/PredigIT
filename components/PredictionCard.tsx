import { View, Text, Image, TouchableOpacity } from "react-native";

const PredictionCard = () => (
    <TouchableOpacity>
        <View className="bg-white shadow-lg rounded-2xl p-4 mx-2 my-3">
            {/* Prediction Question */}
            <View className="flex flex-row items-center">
                <Image
                    source={{
                        uri: 'https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png'
                    }}
                    className="w-12 h-12 rounded-xl"
                />
                <Text className="font-JakartaSemiBold text-lg ml-4 text-gray-800">
                    Is Kohli the King of T20 Cricket?
                </Text>
            </View>

            {/* Prediction Info */}
            <View className="flex flex-row items-center mt-3">
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg'
                    }}
                    className="w-8 h-8 rounded-full"
                />
                <Text className="ml-3 text-gray-500">
                    Rohit bought <Text className="text-red-600">No</Text> at ₹100 (₹140)
                </Text>
            </View>
        </View>
    </TouchableOpacity>
);

export default PredictionCard;
