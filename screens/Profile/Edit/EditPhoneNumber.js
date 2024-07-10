import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation } from "@react-navigation/native";

//import components
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import CustomModal from '../../../components/CustomModal';

const EditPhoneNumber = () => {

    //handle navigation
    const navigation = useNavigation();

    //handle input state
    const [number, setNumber] = useState('');

    //handle input and button color state change
    const [inputColor, setInputColor] = useState(false);

    const handleFocus = () => {
        setInputColor(true);
    };
    const handleBlur = () => {
        setInputColor(true);
    };

    //handle modal
    const [modalVisible, setModalVisible] = useState(false);
    const handleModal = () => setModalVisible(() => !modalVisible);


    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <View style={tw`flex justify-start items-start gap-8 bg-white min-h-full p-4`}>
                <View style={tw`flex flex-row justify-start items-center gap-4`}>
                    <Ionicons name='chevron-back' size={24} color={"#000"} onPress={() => navigation.goBack()} />
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-lg text-black')}>Edit Phone Number</Text>
                </View>
                <View style={tw`flex justify-start items-start gap-4`}>
                    <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-lg text-black')}>
                        Phone Number
                    </Text>
                    <CustomInput
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={number}
                        onChangeText={(text) => setNumber(text)}
                        placeholder="Phone number"
                        style={tw`px-6 py-4 min-w-full rounded-lg ${inputColor ? 'border-2 border-[#29BB00]' : 'border-2 border-slate-600'}`}
                        maxLength={11}
                    />
                </View>
                <View style={tw`flex flex-row justify-center items-center mt-24`}>
                    <CustomButton
                        style={tw`flex flex-row justify-center items-center min-w-full py-4 px-8 bg-gray-200 rounded-full ${inputColor ? 'bg-[#29bb00]' : 'bg-gray-200'}`}
                        onPress={handleModal}
                    >
                        <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, `text-black text-center text-base ${inputColor ? 'text-white' : 'text-black'}`)}>Continue</Text>
                    </CustomButton>
                    <CustomModal animationType={"slide"} transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                        <View style={tw`flex justify-center items-center gap-4 w-72`}>
                            <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'w-72 text-[#000000] text-xl text-center')}>Phone Number Changed Successfully</Text>
                            <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-[#8C8CA1] w-72 text-center text-base')}>You have successfully change your phone number</Text>
                            <CustomButton style={tw`flex flex-row justify-center items-center bg-[#29BB00] min-w-full py-4 px-8 rounded-full`} onPress={() => navigation.navigate("Me")}>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-center text-white text-base')}>Done</Text>
                            </CustomButton>
                        </View>
                    </CustomModal>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EditPhoneNumber;