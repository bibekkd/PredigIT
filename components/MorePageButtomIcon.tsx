import {Ionicons} from "@expo/vector-icons";
import {TouchableOpacity, Linking} from "react-native";
import React from "react";

const MorePageButtomIcon = ({iconName, iconSize, iconColor, link}: {link: string}) => {
const openSocialMedia = (url) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
};
    return (
        <TouchableOpacity className="mx-3" onPress={() => openSocialMedia(link)}>

        <Ionicons name={iconName} size={iconSize} color={iconColor} />

    </TouchableOpacity>
)
}

export default MorePageButtomIcon;