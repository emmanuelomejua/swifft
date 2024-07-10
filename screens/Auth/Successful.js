import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native"

import CustomButton from '../../components/CustomButton';

const Successful = () => {
    const navigation = useNavigation();

    return (
        <View style={tw`flex flex-1 justify-center items-center gap-8 bg-white`}>
            <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-xl text-black text-center')}>Your account was successfully created!</Text>
            <Text style={tw`text-xl`}>👍 😇 </Text>
            <CustomButton style={tw`flex flex-row justify-center items-center bg-[#29BB00] rounded-full px-8 py-4 w-[350px]`} onPress={() => navigation.navigate("KYC")}>
                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-center text-white text-xl')}>Register KYC</Text>
            </CustomButton>
        </View>
    )
}

export default Successful;