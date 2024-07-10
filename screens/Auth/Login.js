//import Libraries 
import { View, Text, ActivityIndicator, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Constants from 'expo-constants';
import axios from 'axios';
//import components
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
// import {  useAuth } from "../../zustand/useAuth";

import { useDispatch, useSelector } from 'react-redux'
import { login, setUser } from '../../redux/slice/authSlice';

const Login = () => {

    const navigation = useNavigation();
    // const setUser = useAuth((state) => state.setUser);

    const { status, error } = useSelector((state) => state.auth)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisble] = useState(false);
    const [inputColor, setInputColor] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);

    //function for handling login
    // const handleLogin = async () => {
    //     try {
    //         setIsLoading(true);
    //         const res = await SERVER.post("/api/v1/auth/login", {
    //             email,
    //             password
    //         })
    //         console.log(res)
    //         setToken(res.tokens);
    //         setUser(res)
    //         setIsAuthenticated(true);
    //         setIsLoading(false);
    //     } catch (error) {
    //         setIsLoading(false);
    //         console.log(error)
    //         Alert.alert(error)
    //     }
    // }

    const dispatch = useDispatch();

    //function for handling login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            dispatch(setUser({email, password}))
            dispatch(login({email, password}))
        } catch (error) {
            Alert.alert(error)
        }
    }


    //function for handling inputcolor and button color change 
    const handleFocus = () => {
        setInputColor(true);
    }
    const handleBlur = () => {
        setInputColor(true);
    }

    //function for handling toggle
    const handleToggle = () => setIsVisble(!isVisible);

    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <View style={tw`flex justify-start items-start bg-white gap-8 h-full p-4`}>
                <View style={tw`flex flex-row justify-between items-center min-w-full`}>
                    <Ionicons name='chevron-back' size={28} color={"#000"} onPress={() => navigation.goBack("Welcome")} />
                </View>
                <View style={tw`flex justify-start items-start gap-4`}>
                    <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-3xl text-[#2B2C2B]')}>Login</Text>
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2B2C2B]')}>Enter your phone number and password to login</Text>
                </View>
                <View style={tw`flex justify-center items-start gap-4 px-2`}>
                    <View style={tw`flex justify-center items-start gap-4`}>
                        <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-base text-black')}>Email</Text>
                        <CustomInput
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Enter email"
                            value={email}
                            type="email"
                            onChangeText={(text) => setEmail(text)}
                            style={tw`border-2 border-[#E6E6E6] px-6 min-w-full h-14 rounded-lg ${inputColor ? 'border-[#29BB00]' : ''}`}
                        />
                    </View>
                    <View style={tw`flex justify-center items-start gap-4`}>
                        <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-base text-black')}>Password</Text>
                        <CustomInput
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Enter password"
                            value={password}
                            type="password"
                            onChangeText={(text) => setPassword(text)}
                            style={tw`border-2 border-[#E6E6E6] px-6 min-w-full h-14 rounded-lg ${inputColor ? 'border-[#29BB00]' : ''}`}
                            secureTextEntry={!isVisible}
                        />
                        <Ionicons name={isVisible ? 'eye-outline' : 'eye-off-outline'} size={22} color={"#808080"} style={tw`absolute bottom-[25px] right-[25px]`} onPress={handleToggle} />
                    </View>
                    <View style={tw`flex justify-end items-end ml-52`}>
                        <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-[#29BB00] text-lg')} onPress={() => navigation.navigate("Forgot Password")}>Forgot Password?</Text>
                    </View>
                </View>

                <View style={tw`flex justify-center items-center gap-4 px-4`}>
                    {status === 'pending' ?
                        <CustomButton style={tw`flex flex-row justify-center items-center min-w-full py-4 px-8 rounded-full bg-[#29bb00]`}>
                            <ActivityIndicator size="large" color={"#fff"} />
                        </CustomButton> :
                        <CustomButton style={tw`flex flex-row justify-center items-center min-w-full py-4 px-8 bg-[#e6e6e6] rounded-full ${inputColor ? 'bg-[#29bb00]' : 'bg-[#e6e6e6]'}`}>
                            <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, `${inputColor ? 'text-white text-center text-lg' : 'text-black text-center text-lg'}`)} onPress={() => handleLogin()}>Login</Text>
                        </CustomButton>
                    }
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-[#29BB00] text-center text-lg')} onPress={() => navigation.navigate("Create Account")}>Create New Account?</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;