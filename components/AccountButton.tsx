import {View, Text, TouchableOpacity} from "react-native";

const AccountButton = ({text} : string) => {
    return (
        <TouchableOpacity>
            <Text className="text-xl mt-1 bg-blue-50 p-3 rounded-full">{text}</Text>
        </TouchableOpacity>
    )
}

export default AccountButton;