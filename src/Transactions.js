import React from 'react';
import { FlatList, View } from 'react-native';
import TransactionItem from "./TransactionItem";

const Transactions = ({ transactions, moves}) => {
    // const data = transactions;
    // console.log("===data.txnType===", JSON.stringify(data, null, 2))
    // console.log("===transactionType", transactionType)
    const renderItem = (tran) => {
        const data = tran.item;
        return (
            <View>
                <TransactionItem transaction={data} moves={moves}/>
            </View>
        )
    }


    return (
        <View>
            <FlatList
                initialNumToRender={100}
                keyExtractor={(item) => item.id.toString()}
                data={transactions}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Transactions;