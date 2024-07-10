//import libraries
import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";

//import components
import CustomButton from '../components/CustomButton';

const Welcome = () => {

    const navigation = useNavigation();

    return (
        <View style={tw`flex justify-evenly items-center h-full bg-white p-4`}>
            <View style={tw`flex flex-col justify-start items-start gap-2 pt-4`}>
                <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'h-[36px] text-xl text-black')}>Welcome to Swift Connect</Text>
                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'w-[350px] h-20 h-[81px] text-lg text-black')}>Empowering Your Financial Journey with Swift Connect – Seamlessly Manage Transactions, Services, and More.</Text>
            </View>

            <View style={tw`flex flex-row justify-center items-center`}>
                <Image source={require("../assets/phone.png")} />
            </View>

            <View style={tw`flex flex-col justify-center items-center gap-4`}>
                <CustomButton style={tw`flex flex-row justify-center items-center bg-[#29BB00] w-[350px] h-12 rounded-full border-[#29BB00] border-2`}>
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-white font-normal text-lg text-center')} onPress={() => navigation.navigate("Create Password")}>I'm new to the app</Text>
                </CustomButton>
                <CustomButton style={tw`flex flex-row justify-center items-center bg-white border-[#29BB00] border-2 w-[350px] h-12 rounded-full`}>
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-[#29BB00] font-normal text-lg text-center')} onPress={() => navigation.navigate("Login")}>Login</Text>
                </CustomButton>
            </View>
        </View>
    )
}

export default Welcome;