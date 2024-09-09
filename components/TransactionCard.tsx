import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TransactionCard = ({ type, amount, date, description }) => {
    return (
        <TouchableOpacity className= "bg-white p-4 m-2 rounded-xl shadow-md flex-row items-center">
            <View className="bg-blue-100 p-2 rounded-full mr-3">
                <Ionicons
                    name={type === 'withdrawal' ? 'arrow-down' : 'arrow-up'}
                    size={24}
                    color={type === 'withdrawal' ? 'red' : 'green'}
                />
            </View>
            <View className="flex-1">
                <Text className="text-lg font-semibold">{description}</Text>
                <Text className="text-sm text-gray-500">{date}</Text>
            </View>
            <Text className={`text-lg font-bold text-${type === 'withdrawal' ? 'red-500' : 'green-500'}`}>
                {type === 'withdrawal' ? '-' : '+'}₹{amount}
            </Text>
        </TouchableOpacity>
    );
};

export default TransactionCard;
