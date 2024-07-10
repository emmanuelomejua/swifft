//import libraries
import { Text, View, SafeAreaView, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { useState } from 'react';
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Constants from 'expo-constants';
import axios from 'axios';
//import components
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SERVER from '../../util/server';
import { setToken } from '../../store/token';

const CreatePassword = () => {
    const navigation = useNavigation();

    const [user, setUser] = useState({
        email: '',
        username: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    })

    // const [email, setEmail] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [inputColor, setInputColor] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFocus = () => {
        setInputColor(true);
    }

    const handleBlur = () => {
        setInputColor(true);
    }

    const [isVisible, setIsVisbile] = useState(false);

    const handleToggle = () => {
        setIsVisbile(!isVisible);
    }

    const handleChangeText = (field, value) => {
        setUser(prevUser => ({
            ...prevUser,
            [field]: value
        }));
    }

    const handleUserRegistration = async () => {
        if (password !== confirmPassword) {
            Alert.alert("passwords don't match");
        }
        try {
            const res = await SERVER.post('api/v1/customer', {
                username,
                email,
                phoneNumber,
                password
            });
            setLoading(true);
            console.log(res);
            setToken(res.tokens);
            Alert.alert("Welcome to Swift Connect");
            navigation.navigate("Profile");
            setLoading(false)
        } catch (error) {
            console.log(error);
            Alert.alert(error);
            setLoading(false)
        }
    }

    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <ScrollView>
                <View style={tw`flex justify-start items-start gap-12 bg-white h-full p-4`}>
                    <Ionicons name='chevron-back' size={24} color={"#000"} onPress={() => navigation.goBack()} />
                    <View style={tw`flex justify-start items-start gap-4`}>
                        <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-3xl text-black')}>Create Account</Text>
                        <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base')}>Create an Account with us today! 😇 </Text>
                    </View>

                    <View style={tw`flex justify-start items-center gap-8 p-2`}>
                        <CustomInput
                            placeholder="Enter Username"
                            value={user.username}
                            type="username"
                            placeholderTextColor={"#808080"}
                            onChangeText={(value) => handleChangeText('username', value)}
                            style={tw`border-2 border-gray-400 px-6 w-[350px] h-14 rounded-lg  ${inputColor ? 'border-[#29BB00]' : ''}`}
                        />
                        <CustomInput
                            placeholder="Enter Email Address"
                            value={user.email}
                            type="username"
                            placeholderTextColor={"#808080"}
                            onChangeText={(value) => handleChangeText('email', value)}
                            style={tw`border-2 border-gray-400 px-6 w-[350px] h-14 rounded-lg  ${inputColor ? 'border-[#29BB00]' : ''}`}
                        />
                        <CustomInput
                            placeholder="Enter Phone number"
                            value={user.phoneNumber}
                            type="phoneNumber"
                            placeholderTextColor={"#808080"}
                            onChangeText={(value) => handleChangeText('phoneNumber', value)}
                            style={tw`border-2 border-gray-400 px-6 w-[350px] h-14 rounded-lg  ${inputColor ? 'border-[#29BB00]' : ''}`}
                        />

                        <CustomInput
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Enter Password"
                            value={user.password}
                            type="password"
                            placeholderTextColor={"#808080"}
                            onChangeText={(value) => handleChangeText('password', value)}
                            style={tw`border-2 border-gray-400 px-6 w-[350px] h-14 rounded-lg  ${inputColor ? 'border-[#29BB00]' : ''}`}
                            secureTextEntry={!isVisible}
                        />
                        <Ionicons name={isVisible ? "eye-outline" : "eye-off-outline"} size={18} color={"#000000"} style={tw`absolute bottom-[138px] right-[25px]`} onPress={handleToggle} />

                        <CustomInput
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Re-Enter Password"
                            value={user.confirmPassword}
                            type="password"
                            placeholderTextColor={"#808080"}
                            onChangeText={(value) => handleChangeText('confirmPassword', value)}
                            style={tw`border-2 border-gray-400 px-6 w-[350px] h-14 rounded-lg  ${inputColor ? 'border-[#29BB00]' : ''}`}
                            secureTextEntry={!isVisible}
                        />
                        <Ionicons name={isVisible ? "eye-outline" : "eye-off-outline"} size={18} color={"#000000"} style={tw`absolute bottom-[52px] right-[25px]`} onPress={handleToggle} />
                    </View>
                    <View style={tw`flex justify-center items-center p-2`}>
                        {loading ?
                            <View style={tw`bg-[#29bb00] rounded-full py-4 px-8 flex flex-row justify-center items-center w-[350px] m-auto`}>
                                <ActivityIndicator size={"large"} color={"#fff"} />
                            </View>
                            :
                            <CustomButton style={tw`flex flex-row justify-center items-center w-[350px] py-4 px-8 bg-gray-200 rounded-full ${inputColor ? 'bg-[#29bb00]' : 'bg-gray-200'}`} onPress={handleUserRegistration}>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, `${inputColor ? 'text-center text-white' : 'text-center text-black'}`)}>Create Account</Text>
                            </CustomButton>
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CreatePassword;