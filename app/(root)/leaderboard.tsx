import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

const leaderboardData = [
    { id: 1, name: 'Ganesha', points: 1500, avatar: 'https://example.com/avatar1.jpg' },
    { id: 2, name: 'Lakshmi', points: 1300, avatar: 'https://example.com/avatar2.jpg' },
    { id: 3, name: 'Shiva', points: 1200, avatar: 'https://example.com/avatar3.jpg' },
    { id: 4, name: 'Kali', points: 1100, avatar: 'https://example.com/avatar4.jpg' },
    { id: 5, name: 'Vishnu', points: 1000, avatar: 'https://example.com/avatar5.jpg' },
];

const LeaderboardCard = ({ rank, name, points, avatar }) => (
    <View className="flex flex-row items-center bg-gray-100 rounded-lg my-2 p-4 mx-3">
        <Text className="text-2xl font-bold text-blue-500">{rank}</Text>
        <Image
            source={{ uri: avatar }}
            className="w-[50px] h-[50px] rounded-full mx-3"
        />
        <View className="flex-1">
            <Text className="text-lg font-JakartaSemiBold">{name}</Text>
            <Text className="text-sm text-gray-500">{points} Points</Text>
        </View>
        <Ionicons name="trophy" size={24} color="#FFD700" />
    </View>
);

const Leaderboard = () => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <Text className="text-4xl font-JakartaBold text-center my-4">Leaderboard</Text>

            <ScrollView className="flex-1">
                {leaderboardData.map((user, index) => (
                    <LeaderboardCard
                        key={user.id}
                        rank={index + 1}
                        name={user.name}
                        points={user.points}
                        avatar={user.avatar}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Leaderboard;
