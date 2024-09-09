import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PredictionCard from "@/components/PredictionCard";

const Predictions = () => {
    return (
        <SafeAreaView className="bg-gray-50 flex-1">
            <ScrollView showsVerticalScrollIndicator={false} className="px-4">
                {/* Header */}
                <Text className="font-JakartaExtraBold text-3xl my-4 text-gray-800">
                    Predictions
                </Text>

                {/* Prediction Cards */}
                <View className="space-y-4">
                    {[...Array(9)].map((_, index) => (
                        <PredictionCard key={index} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Predictions;
