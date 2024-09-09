import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => (
    <SafeAreaView>
        <View className="flex flex-col items-center justify-center pt-10">
            {/* Profile Picture */}
            <Image
                source={{
                    uri: 'https://static.toiimg.com/thumb/msid-86058708,width-1070,height-580,imgsize-40966,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
                }}
                className="w-[150] h-[150] rounded-full"
            />
            <TouchableOpacity className="mt-2">
                <Text className="text-blue-500 text-base font-JakartaMedium">Change Profile Picture</Text>
            </TouchableOpacity>
        </View>

        {/* Username */}
        <Text className="text-center px-5 py-3 text-3xl font-JakartaSemiBold">Ganesha</Text>

        {/* Email Section */}
        <View className="px-5 py-3">
            <Text className="text-lg font-JakartaMedium text-gray-700 mb-2">Email</Text>
            <TextInput
                placeholder="ganesha@example.com"
                className="bg-gray-100 p-3 rounded-md"
                editable={false} // Make this editable if you want users to change it directly
            />
            <TouchableOpacity className="mt-2">
                <Text className="text-blue-500 text-base font-JakartaMedium">Change Email</Text>
            </TouchableOpacity>
        </View>

        {/* Password Section */}
        <View className="px-5 py-3">
            <Text className="text-lg font-JakartaMedium text-gray-700 mb-2">Password</Text>
            <TextInput
                placeholder="••••••••"
                secureTextEntry={true}
                className="bg-gray-100 p-3 rounded-md"
                editable={false} // Same as email, you can enable editing as needed
            />
            <TouchableOpacity className="mt-2">
                <Text className="text-blue-500 text-base font-JakartaMedium">Change Password</Text>
            </TouchableOpacity>
        </View>

        {/* Log Out Button */}
        <View className="px-5 py-3">
            <TouchableOpacity className="bg-red-500 p-3 rounded-md">
                <Text className="text-white text-center text-base font-JakartaMedium">Log Out</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);

export default Profile;
