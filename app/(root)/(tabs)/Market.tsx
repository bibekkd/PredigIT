import {View, Text, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";
import CategoryButton from "@/components/CategoryButton";
import EventCard from "@/components/EventCard";
const Market = () => {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SearchBar />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mb-2">
                    <CategoryButton/>
                    <CategoryButton/>
                    <CategoryButton/>
                    <CategoryButton/>
                    <CategoryButton/>
                    <CategoryButton/>
                    <CategoryButton/>
                    <CategoryButton/>
                </ScrollView>

                <View >
                    <EventCard imageUrl='https://cdn.jdpower.com/Why%20Are%20Lamborghinis%20So%20Expensive.jpg' eventName={'Is Lamborghini the Sexiest Supercar?'} positiveOutcome={'Yes'} negativeOutcome={'No'}/>
                    <EventCard imageUrl='https://cdn.jdpower.com/Why%20Are%20Lamborghinis%20So%20Expensive.jpg' eventName={'Is Lamborghini the Sexiest Supercar?'} positiveOutcome={'Yes'} negativeOutcome={'No'}/>
                    <EventCard imageUrl='https://cdn.jdpower.com/Why%20Are%20Lamborghinis%20So%20Expensive.jpg' eventName={'Is Lamborghini the Sexiest Supercar?'} positiveOutcome={'Yes'} negativeOutcome={'No'}/>
                    <EventCard imageUrl='https://cdn.jdpower.com/Why%20Are%20Lamborghinis%20So%20Expensive.jpg' eventName={'Is Lamborghini the Sexiest Supercar?'} positiveOutcome={'Yes'} negativeOutcome={'No'}/>
                    <EventCard imageUrl='https://cdn.jdpower.com/Why%20Are%20Lamborghinis%20So%20Expensive.jpg' eventName={'Is Lamborghini the Sexiest Supercar?'} positiveOutcome={'Yes'} negativeOutcome={'No'}/>
                    <EventCard imageUrl='https://cdn.jdpower.com/Why%20Are%20Lamborghinis%20So%20Expensive.jpg' eventName={'Is Lamborghini the Sexiest Supercar?'} positiveOutcome={'Yes'} negativeOutcome={'No'}/>
                    <EventCard imageUrl='https://cdn.jdpower.com/Why%20Are%20Lamborghinis%20So%20Expensive.jpg' eventName={'Is Lamborghini the Sexiest Supercar?'} positiveOutcome={'Yes'} negativeOutcome={'No'}/>
                    <EventCard imageUrl='https://cdn.jdpower.com/Why%20Are%20Lamborghinis%20So%20Expensive.jpg' eventName={'Is Lamborghini the Sexiest Supercar?'} positiveOutcome={'Yes'} negativeOutcome={'No'}/>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Market