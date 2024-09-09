import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Function to determine time-based gradient
const getTimeBasedGradient = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
        // Morning: Soft sunrise colors
        return ['#ff9a9e', '#fad0c4'];
    } else if (currentHour >= 12 && currentHour < 18) {
        // Afternoon: Bright and vibrant
        return ['#00c6ff', '#0072ff'];
    } else if (currentHour >= 18 && currentHour < 21) {
        // Evening: Warm sunset colors
        return ['#f2994a', '#f2c94c'];
    } else {
        // Night: Cool, dark tones
        return ['#2c3e50', '#4ca1af'];
    }
};

const WelcomeMessage = () => {
    const gradientColors = getTimeBasedGradient();
    const getCurrentTimeGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning!";
        if (hour < 18) return "Good Afternoon!";
        return "Good Evening!";
    };

    return (
        <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ borderRadius: 15, marginHorizontal: 10, marginVertical: 15 }}
        >
            <View className="p-6 flex flex-row justify-center items-center">
                <Text className="font-JakartaBold text-4xl text-center text-white">
                    Hello, {getCurrentTimeGreeting()}!
                </Text>
            </View>
        </LinearGradient>
    );
};

export default WelcomeMessage;
