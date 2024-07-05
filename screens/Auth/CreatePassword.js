//import libraries
import { Text, View, SafeAreaView, Alert } from 'react-native';
import { useState } from 'react';
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Constants from 'expo-constants';
//import components
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slice/userSlice';

const CreatePassword = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    // const auth = FIREBASE_AUTH;

    // const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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

    const handleUserRegistration = async () => {
        if (password !== confirmPassword) {
            Alert.alert("passwords don't match");
        }

        try {
            dispatch(setUser(password))
            setLoading(!loading)
            navigation.navigate("Profile");
            Alert.alert("Welcome to Swift Connect");
        } catch (error) {
            console.log(error);
            Alert.alert("Error in creating your account")
        } 
    }

    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <View style={tw`flex justify-start items-start gap-12 bg-white h-full p-4`}>
                <Ionicons name='chevron-back' size={24} color={"#000"} onPress={() => navigation.goBack()} />
                <View style={tw`flex justify-start items-start gap-4`}>
                    <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-3xl text-black')}>Create Password</Text>
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base')}>Create Your Password (Minimum 8 Characters).</Text>
                </View>

                <View style={tw`flex justify-start items-center gap-8 p-2`}>

                    <CustomInput
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder="Enter Password"
                        value={password}
                        type="password"
                        placeholderTextColor={"#808080"}
                        onChangeText={(password) => setPassword(password)}
                        style={tw`border-2 border-gray-400 px-6 w-[350px] h-14 rounded-lg  ${inputColor ? 'border-[#29BB00]' : ''}`}
                        secureTextEntry={!isVisible}
                    />
                    <Ionicons name={isVisible ? "eye-outline" : "eye-off-outline"} size={18} color={"#000000"} style={tw`absolute bottom-[138px] right-[25px]`} onPress={handleToggle} />

                    <CustomInput
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder="Re-Enter Password"
                        value={confirmPassword}
                        type="password"
                        placeholderTextColor={"#808080"}
                        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                        style={tw`border-2 border-gray-400 px-6 w-[350px] h-14 rounded-lg  ${inputColor ? 'border-[#29BB00]' : ''}`}
                        secureTextEntry={!isVisible}
                    />
                    <Ionicons name={isVisible ? "eye-outline" : "eye-off-outline"} size={18} color={"#000000"} style={tw`absolute bottom-[52px] right-[25px]`} onPress={handleToggle} />
                </View>
                <View style={tw`flex justify-center items-center p-2`}>
                    <CustomButton style={tw`flex flex-row justify-center items-center w-[350px] py-4 px-8 bg-gray-200 rounded-full ${inputColor ? 'bg-[#29bb00]' : 'bg-gray-200'}`} onPress={handleUserRegistration}>
                        <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, `${inputColor ? 'text-center text-white' : 'text-center text-black'}`)}>Create Account</Text>
                    </CustomButton>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CreatePassword;