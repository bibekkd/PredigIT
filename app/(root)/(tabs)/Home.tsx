import {View, Text, ScrollView, Animated} from "react-native";
import {useState, useEffect} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import RoundButton from "@/components/RoundButton";
import AccountButton from "@/components/AccountButton";
import TransactionCard from "@/components/TransactionCard";
import TrendingCard from "@/components/TrendingCard";
import WelcomeMessage from "@/components/WelcomeMessageCard";
import {supabase} from "@/utils/supabase";
import { addFundsToWallet, withdrawFundsFromWallet, getTransactionHistory, getWalletBalance } from '@/utils/walletFunctions';  // Import functions
import {router} from "expo-router";

const Home = ({userId}) => {
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Fetch wallet balance and transaction history on component mount
        const fetchData = async () => {
            const { data: walletData } = await supabase
                .from('wallet')
                .select('balance')
                .eq('user_id', userId)
                .single();

            setBalance(walletData.balance);

            const history = await getTransactionHistory(userId);
            setTransactions(history);
        };

        fetchData();
    }, []);

    const handleAddFunds = async () => {
        // Example: Add funds (replace with actual Razorpay integration)
        await addFundsToWallet(userId, 1000);  // Adds ₹1000
        const updatedBalance = await getWalletBalance(userId);
        setBalance(updatedBalance);
    };

    const handleWithdrawFunds = async () => {
        // Example: Withdraw funds
        await withdrawFundsFromWallet(userId, 500);  // Withdraws ₹500
        const updatedBalance = await getWalletBalance(userId);
        setBalance(updatedBalance);
    };

    const waitFor = () => {}
    return (

        <SafeAreaView>

        <ScrollView showsVerticalScrollIndicator={false}>
            <WelcomeMessage/>
                <View className="flex flex-row bg-yellow-50 h-60 rounded-3xl mx-5">
                    <View className="flex-1 my-10 flex-row justify-center items-center">
                        <View className="flex-col items-center">
                            <Text className="text-6xl">₹{` ${balance}`}</Text>
                            {/* Add the 'accounts' text below the balance */}
                            <AccountButton text={'accounts'}/>
                        </View>
                    </View>
                </View>
                <View className="flex flex-row justify-evenly mt-5">
                    <RoundButton title={'Add money'} icon={'add'} onPress={handleAddFunds}/>
                    <RoundButton title={'Withdraw'} icon={'remove-circle'} onPress={handleWithdrawFunds}/>
                    <RoundButton title={'Transactions'} icon={'swap-horizontal'} onPress={waitFor}/>
                    <RoundButton title={`     More`} icon={'ellipsis-horizontal'} onPress={() => router.push('/(tabs)/More')}/>

                </View>
                <View className="my-5 mx-3">
                    <Text className="text-2xl">Recent Transactions</Text>
                    <TransactionCard amount={"400"} type={'Add'} description={"500 rupees added"} date={'5 Sept 2024'}/>
                    <TransactionCard amount={"400"} type={'withdrawal'} description={"500 rupees added"} date={'5 Sept 2024'}/>
                    <TransactionCard amount={"400"} type={'withdrawal'} description={"500 rupees added"} date={'5 Sept 2024'}/>
                    <TransactionCard amount={"400"} type={'withdrawal'} description={"500 rupees added"} date={'5 Sept 2024'}/>
                </View>
                <View className="my-5 mx-3">
                    <Text className="text-3xl font-JakartaMedium">Trending</Text>
                    <TrendingCard
                        cardTitle={'কলকাতার টপ 10 পুজোর বাজি জিতবে কে?'}
                        imageUrl={'https://assets.telegraphindia.com/telegraph/2021/Oct/1633331729_dsc_3798.jpg'}
                        gradientOne={'#ff7e5f'}
                        gradientTwo={'#feb47b'}
                    />
                    <TrendingCard
                        cardTitle={'Big Billion Days: Will Flipkart Surpass Previous Year\'s Sales?'}
                        imageUrl={'https://i.pinimg.com/736x/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.jpg'}
                        gradientOne={'#ff9a9e'}
                        gradientTwo={'#4e4376'}
                    />
                    <TrendingCard
                        cardTitle={'India vs Bangladesh: Battle for the Border'}
                        imageUrl={'https://upload.wikimedia.org/wikipedia/commons/4/41/Cricket_ball_on_grass.jpg'}
                        gradientOne={'#00c6ff'}
                        gradientTwo={'#0072ff'}
                    />
                </View>
        </ScrollView>
            </SafeAreaView>

    )
}

export default Home