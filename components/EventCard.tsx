import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import OutcomeButton from "@/components/OutcomeButton";
import QuickInfoButton from "@/components/QuickInfoButton";
const CardWithInfoButton = ({ imageUrl, eventName, positiveOutcome, negativeOutcome, onInfoPress }) => {
    return (
        <>
        <TouchableOpacity>
            <View className="relative w-fit h-[200px] bg-white shadow-md my-2 mx-3 rounded-xl">

                <View className="flex flex-row">
                    <Image
                        source={{ uri: imageUrl }}
                        className="w-[60px] h-[60px] rounded-xl m-3"
                    />
                    <Text className="font-JakartaExtraBold text-xl mr-3 my-3 flex-1 flex-shrink flex-wrap">
                        {eventName}
                    </Text>
                </View>
                <View>
                    <View className="flex flex-row justify-between flex-shrink flex-wrap">
                        <OutcomeButton title={positiveOutcome} />
                        <OutcomeButton title={negativeOutcome} />
                    </View>
                    <QuickInfoButton/>

                </View>


            </View>

        </TouchableOpacity>
        </>
    );
};

export default CardWithInfoButton;
