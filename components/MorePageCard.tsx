import {TouchableOpacity, Text, View} from "react-native";
import React from "react";
import {router} from "expo-router";

const MorePageCard = ({title, description, onPress} : {title: string, description: string, onPress: () => void}) => (
    <TouchableOpacity className="w-full h-28 bg-white rounded-lg shadow-md mb-4 p-4" onPress={onPress}>
        <Text className="text-xl font-bold text-gray-800">{title}</Text>
        <Text className="text-sm text-gray-500 mt-2">
            {description}
        </Text>
    </TouchableOpacity>
)

export default MorePageCard;