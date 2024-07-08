//import libraries
import { View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Constants from 'expo-constants';
import SERVER from '../../util/server';

//import components
import CustomButton from '../../components/CustomButton';

const CreateAccount = () => {
    const navigation = useNavigation(); 
    
    return (
        <>
            <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
                <View style={tw`flex flex-col justify-start items-start gap-12 bg-white min-h-full px-4 py-4`}>
                    <Ionicons name="chevron-back" size={24} color={"#000"} onPress={() => navigation.goBack()} />
                    <View style={tw`flex flex-col justify-start items-start gap-2`}>
                        <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-2xl text-black h-9')}>Create Account</Text>
                        <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-[#2B2C2B] text-base min-w-full')}>Select Your Preferred Method to Get Started.</Text>
                    </View>
                    <View style={tw`flex flex-col justify-center items-center gap-8 px-4 mt-12`}>
                        <CustomButton
                            style={tw`flex flex-row flex-nowrap justify-center items-center bg-[#ebffe5] rounded-full py-2 px-5 min-w-full`}
                            onPress={() => navigation.navigate("Email Registration")}
                        >
                            <Ionicons name="mail-outline" size={18} color={"#29BB00"} /> <></>
                            <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-[#29BB00] text-base')}>Email</Text>
                        </CustomButton>
                        <CustomButton
                            style={tw`flex flex-row flex-nowrap justify-center items-center bg-[#ebffe5] rounded-full py-2 px-5 min-w-full`}
                            onPress={() => navigation.navigate("PhoneNumber Registration")}
                        >
                            <Ionicons name="call-outline" size={18} color={"#29bb00"} /> <></>
                            <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-[#29BB00] text-base')}>Phone Number</Text>
                        </CustomButton>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default CreateAccount;