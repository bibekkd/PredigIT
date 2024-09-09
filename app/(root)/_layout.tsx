import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="profile" options={{ headerShown: false }}/>
            <Stack.Screen name="resources" options={{ headerShown: false }}/>
            <Stack.Screen name="leaderboard" options={{ headerShown: false }}/>
            <Stack.Screen name="about" options={{ headerShown: false }}/>
        </Stack>
    );
};

export default Layout;