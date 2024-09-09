import {View, Text, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {SafeAreaView} from "react-native-safe-area-context";
const SearchBar = () => (
    <>
        <View className="flex-row items-center bg-gray-200 rounded-full p-3 m-4">
            <Ionicons name="search" size={20} color="gray" style="mr-2" />
            <TextInput
                placeholder="Search"
                className="flex-1 text-xl ml-2"
                // Add additional styling or functionality as needed
            />
        </View>
    </>
)

export default SearchBar;