import { supabase } from './supabase'; // Import the Supabase client

// Add funds to the user's wallet
export const addFundsToWallet = async (userId, amount) => {
    try {
        const { data, error } = await supabase
            .from('wallet')
            .update({ balance: supabase.raw('balance + ?', [amount]) })
            .eq('user_id', userId);

        if (error) throw error;

        await supabase
            .from('transactions')
            .insert({
                user_id: userId,
                amount,
                type: 'deposit',
                status: 'completed',
            });

        return data;
    } catch (err) {
        console.error('Error adding funds:', err);
    }
};

// Withdraw funds from the user's wallet
export const withdrawFundsFromWallet = async (userId, amount) => {
    try {
        const { data: walletData, error: walletError } = await supabase
            .from('wallet')
            .select('balance')
            .eq('user_id', userId)
            .single();

        if (walletError || walletData.balance < amount) {
            throw new Error('Insufficient balance');
        }

        const { data, error } = await supabase
            .from('wallet')
            .update({ balance: supabase.raw('balance - ?', [amount]) })
            .eq('user_id', userId);

        if (error) throw error;

        await supabase
            .from('transactions')
            .insert({
                user_id: userId,
                amount,
                type: 'withdrawal',
                status: 'completed',
            });

        return data;
    } catch (err) {
        console.error('Error withdrawing funds:', err);
    }
};

// Get the user's transaction history
export const getTransactionHistory = async (userId) => {
    const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('user_id', userId);

    if (error) {
        console.error('Error fetching transaction history:', error);
        return [];
    }

    return data;
};

export const getWalletBalance = async (userId) => {
    try {
        const { data, error } = await supabase
            .from('wallet')
            .select('balance')
            .eq('user_id', userId)
            .single();

        if (error) {
            console.error('Error fetching wallet balance:', error);
            return 0;  // Return 0 in case of an error
        }

        return data.balance;
    } catch (err) {
        console.error('Error:', err);
        return 0;  // Return 0 if something goes wrong
    }
};

