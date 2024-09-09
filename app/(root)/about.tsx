import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutPage = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="px-4 py-6">
                <Text className="font-JakartaBold text-3xl text-black mb-4">
                    About PredigIT
                </Text>
                <View className="bg-blue-500 pb-8 pt-2 px-4 rounded-xl">
                    <Text className="text-lg text-white font-JakartaMedium">
                        Welcome to <Text className="font-JakartaExtraBold">PredigIT</Text>,
                        an innovative cross-platform app designed to bring prediction markets
                        to your fingertips.
                    </Text>
                    <Text className="text-lg text-white font-JakartaMedium mt-3">
                        Our app allows users to participate in predictions on a wide range
                        of topics, from financial markets to sports and global events.
                    </Text>
                    <Text className="text-lg text-white font-JakartaMedium mt-3">
                        With a sleek, intuitive interface, users can easily trade virtual
                        currency using our secure virtual wallet system, empowering them
                        to make informed predictions and manage their funds seamlessly.
                    </Text>
                    <Text className="text-lg text-white font-JakartaMedium mt-3">
                        Whether you're predicting the outcome of the latest sports game or
                        following trends in the financial markets, PredigIT provides you
                        with the tools to stay ahead.
                    </Text>
                    <Text className="text-lg text-white font-JakartaMedium mt-3">
                        Join the community of savvy predictors and take control of your
                        virtual currency while making predictions that matter.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AboutPage;
