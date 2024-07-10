import { Text, View, Image, SafeAreaView, Alert } from 'react-native';
import { useState } from 'react';
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

//import components
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const PhoneNumberRegistration = () => {

    const navigation = useNavigation();

    const [number, setNumber] = useState("");
    const [inputColor, setInputColor] = useState(false);

    const handleFocus = () => {
        setInputColor(true);
    }

    const handleBlur = () => {
        setInputColor(true);
    }

    const handleRegistration = async (e) => {
        e.preventDefault();
        if (number) {
            navigation.navigate("Create Password", { number: number });
        } else {
            Alert.alert("Please enter phone number");
        }
    }

    return (
        <>
            <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
                <View style={tw`flex justify-start items-start gap-16 bg-white h-full p-4`}>
                    <Ionicons name='chevron-back' size={24} color={"#000"} onPress={() => navigation.goBack()} />
                    <View style={tw`flex justify-start items-start gap-3`}>
                        <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-black text-xl')}>Phone Number</Text>
                        <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base')}>Provide Your Phone Number to Continue.</Text>
                    </View>

                    <View style={tw`flex justify-start items-start gap-4`}>
                        <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-xl text-black')}>Phone Number</Text>
                        <View style={tw`w-[350px] border-2 border-gray-200 flex flex-row justify-start items-center gap-4 rounded-lg min-w-full`}>
                            <View style={tw`flex flex-row justify-start items-start gap-2 pl-2`}>
                                <Image source={require("../../assets/Naija.png")} style={tw`absolute ml-2`} />
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black ml-8')}>+234</Text>
                            </View>
                            <CustomInput
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="Phone Number"
                                placeholderTextColor={"#808080"}
                                value={number}
                                type="number"
                                onChangeText={(number) => setNumber(number)}
                                style={tw`px-6 h-14 rounded-lg ${inputColor ? 'border-[#29BB00]' : ''}`}
                                keyboardType="numeric"
                                maxLength={10}
                            />
                        </View>
                    </View>

                    <View style={tw`flex flex-row justify-center items-center p-2`}>
                        <CustomButton
                            style={tw`flex flex-row justify-center items-center min-w-full py-4 px-8 bg-gray-200 rounded-full ${inputColor ? 'bg-[#29bb00]' : 'bg-gray-200'}`}
                            onPress={() => handleRegistration()}
                        >
                            <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, `${inputColor ? 'text-white text-center text-lg' : 'text-black text-center text-lg'}`)}>Continue</Text>
                        </CustomButton>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default PhoneNumberRegistration;