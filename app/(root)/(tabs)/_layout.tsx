import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";
import { icons } from "@/constants";

const TabIcon = ({
                     source,
                     focused,
                 }: {
    source: ImageSourcePropType;
    focused: boolean;
}) => (
    <View
        className={`flex flex-row items-center justify-center
            rounded-full ${focused ? "bg-general-300" : ""}`}
    >
        <View
            className={`rounded-full w-12 h-12 items-center justify-center
                ${focused ? "bg-general-400" : ""}`}
        >
            <Image
                source={source}
                tintColor="white"
                resizeMode="contain"
                className="w-7 h-7"
            />
        </View>
    </View>
);

const Layout = () => (
    <Tabs
        initialRouteName="index"
        screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "white",
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: "#333333",
                paddingBottom: 0,
                overflow: "hidden",
                height: 78,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                position: "relative",
            },
        }}
    >
        <Tabs.Screen
            name="Home"
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} source={icons.home} />
                ),

            }}
        />
        <Tabs.Screen
            name="Market"
            options={{
                title: "Market",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} source={icons.market} />
                ),
            }}
        />
        <Tabs.Screen
            name="Predictions"
            options={{
                title: "Predictions",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} source={icons.prediction} />
                ),
            }}
        />
        <Tabs.Screen
            name="More"
            options={{
                title: "More",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} source={icons.more} />
                ),
            }}
        />
    </Tabs>
);

export default Layout;
