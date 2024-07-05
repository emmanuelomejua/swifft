//import libraries
import { View, Text } from 'react-native';
import React from 'react';
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

//import components
import CustomButton from '../../components/CustomButton';

const ForgotPassword = () => {

    const navigation = useNavigation(); //call useNavigation for navigating screens

    return (
        <View style={tw`flex flex-col justify-between items-center gap-[6px] bg-white h-full`}>
            <View style={tw`flex flex-col justify-start items-start gap-2`}>
                <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-2xl text-black h-9')}>Forget Password</Text>
                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black w-[350px]')}>Choose how you want to recover your password</Text>
            </View>
            <View style={tw`flex flex-col justify-center items-center gap-8 mb-80`}>
                <CustomButton
                    style={tw`flex flex-row flex-nowrap justify-center items-center bg-[#ebffe5] rounded-full py-2 px-5 w-[350px]`}
                    onPress={() => navigation.navigate("Forgot Email")}
                >
                    <Ionicons name="mail-outline" size={18} color={"#29BB00"} /> <></>
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-[#29BB00] text-base')}>Email</Text>
                </CustomButton>
                <CustomButton
                    style={tw`flex flex-row flex-nowrap justify-center items-center bg-[#ebffe5] rounded-full py-2 px-5 w-[350px]`}
                    onPress={() => navigation.navigate("Forgot Number")}
                >
                    <Ionicons name="call-outline" size={18} color={"#29bb00"} /> <></>
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-[#29BB00] text-base')}>Phone Number</Text>
                </CustomButton>
            </View>
        </View>
    )
}

export default ForgotPassword;