import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';

const Transfer = () => {

    const navigation = useNavigation();

    const [inputValue, setInputValue] = useState('');
    const [inputColor, setInputColor] = useState(false);

    const handleBlur = () => {
        setInputColor(true);
    }
    const handleFocus = () => {
        setInputColor(true);
    }

    return (
        <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}> 
            <View style={tw`flex justify-start items-start gap-8 bg-white h-full p-4`}>
                <View style={tw`flex flex-row justify-center items-center gap-5`}>
                    <Ionicons name="chevron-back" size={22} color={"#000"} onPress={() => navigation.goBack()} />
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-lg')}>Transfer</Text>
                </View>
                <View style={tw`flex justify-start items-start gap-4 p-2`}>
                    <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-black text-lg')}>Recipient Account</Text>
                    <CustomInput onBlur={handleBlur} onFocus={handleFocus} placeholder="Enter Swift acct no/name" style={tw`border-2 px-6 py-4 rounded-lg min-w-full ${inputColor ? 'border-[#29bb00]' : 'border-[#e6e6e6]'}`} onChangeText={(e) => setInputValue(e)} value={inputValue} />
                </View>
                <View style={tw`flex flex-row justify-center items-center p-2`}>
                    <CustomButton onPress={() => navigation.navigate("Transfer Details")} style={tw`flex flex-row justify-center items-center bg-white px-6 py-3 rounded-full w-full ${inputColor ? 'bg-[#29bb00]' : 'bg-[#e6e6e6]'}`}>
                        <Text style={tw.style({fontFamily: 'PTSans-Regular'}, `${inputColor ? 'text-white text-center text-lg' : 'text-black text-center text-lg'}`)}>Next</Text>
                    </CustomButton>
                </View>
                <View style={tw`flex flex-row justify-center items-center gap-32 p-4 w-full`}>
                    <Text style={tw.style({fontFamily: 'PTSans-Bold'}, 'text-[#29bb00] text-lg')}>Recents</Text>
                    <Text style={tw.style({fontFamily: 'PTSans-Bold'}, 'text-lg text-black')}>Beneficiaries</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Transfer

const styles = StyleSheet.create({})