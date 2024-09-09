import React from 'react';
import { View, ScrollView } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import MorePageCard from "@/components/MorePageCard";
import MorePageButtomIcon from "@/components/MorePageButtomIcon";
import VersionTextComponent from "@/components/VersionTextComponent"; // Use Ionicons for social media icons
import {router} from "expo-router";

const More = () => {
    return (
        <SafeAreaView className="bg-gray-100">
        <ScrollView showsVerticalScrollIndicator={false} className="bg-gray-100">
            <View className="flex-1 bg-gray-100 px-4 py-4">

                {/* Profile Card */}
                <MorePageCard title={'Profile'} description={'View and edit your profile details here.'} onPress={() => router.push("/(root)/profile")} />

                {/* Resources Card */}
                <MorePageCard title={'Resources'} description={'Explore helpful resources and materials.'} onPress={() => router.push("/(root)/resources")}/>

                {/* Leaderboard Card */}
                <MorePageCard title={'Leaderboard'} description={'Check out the leaderboard rankings.'} onPress={() => router.push("/(root)/leaderboard")}/>

                {/* About Us Card */}
                <MorePageCard title={'About'} description={'Learn more about our mission and team.'} onPress={() => router.push("/(root)/about")}/>

                {/* Version and Social Media */}
                <View className="mt-10 mb-6">
                    {/* Version */}
                    <VersionTextComponent versionText={`Version  1.0.0`}/>
                    {/* Connect with Us */}
                    <View className="flex flex-row justify-center mt-4">
                        <MorePageButtomIcon iconName={'logo-facebook'} iconSize={30} iconColor="#3b5998" link="https://facebook.com/"/>
                        <MorePageButtomIcon iconName={'logo-discord'} iconSize={30} iconColor="#5865F2" link="https://discord.com/"/>
                        <MorePageButtomIcon iconName={'logo-youtube'} iconSize={30} iconColor ="#FF0000" link="https://youtube.com/"/>
                        <MorePageButtomIcon iconName={'logo-twitter'} iconSize={30} iconColor ="#1da1f2" link="https://x.com/"/>
                        <MorePageButtomIcon iconName={'logo-instagram'} iconSize={30} iconColor ="#e1306c" link="https://instagram.com/"/>
                        <MorePageButtomIcon iconName={'logo-linkedin'} iconSize={30} iconColor ="#0077b5" link="https://linkedin.com/"/>
                    </View>
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
};

export default More;
