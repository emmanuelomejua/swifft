//import libraries
import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

//import components
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ForgotEmail = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [inputColor, setInputColor] = useState(false);
    const [buttonColor, setButtonColor] = useState(false);

    const handleFocus = () => {
        setInputColor(true);
        setButtonColor(true);
    }

    const handleBlur = () => {
        setInputColor(false);
    }


    return (
        <View style={tw`flex flex-col justify-start items-start gap-16 bg-white h-full p-4`}>
            <View style={tw`flex justify-start items-start gap-2`}>
                <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-black text-2xl')}>Enter Email Address</Text>
                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-sm font-light')}> Provide Your Email Address to Continue.</Text>
            </View>

            <View style={tw`flex justify-center items-start gap-4`}>
                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-sm w-80 h-4')}>Email Address</Text>
                <CustomInput
                    placeholder="Enter email"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={tw`border-2 border-gray-400 px-6 w-[350px] h-14 rounded-lg ${inputColor ? 'border-[#29BB00]' : ''}`}
                    placeholderTextColor="#808080"
                />
            </View>


            <View style={tw`flex flex-row justify-center items-center`}>
                <CustomButton
                    style={tw`flex flex-row justify-center items-center w-[350px] py-4 px-8 bg-gray-200 rounded-full ${buttonColor ? 'bg-[#29bb00]' : 'bg-gray-200'}`}
                    onPress={() => navigation.navigate("OTP")}
                >
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-center text-sm')}>Continue</Text>
                </CustomButton>
            </View>

        </View>
    )
}

export default ForgotEmail;