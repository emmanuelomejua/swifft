import { View, Text, SafeAreaView } from 'react-native';
import { useState } from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

//components
import CustomOTP from '../../../components/CustomOTP';
import CustomButton from '../../../components/CustomButton';
import CustomModal from '../../../components/CustomModal';

const CreatePin = () => {

    const navigation = useNavigation();

    const [inputColor, setInputColor] = useState(false);

    const handleBlur = () => {
        setInputColor(true)
    }
    const handleFocus = () => {
        setInputColor(true);
    }

    //handle modal
    const [modalVisible, setModalVisible] = useState(false);
    const handleModal = () => setModalVisible(() => !modalVisible);

    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <View style={tw`flex justify-start items-start gap-8 h-full bg-white p-4`}>
                <Ionicons name='chevron-back' size={24} color={"#000"} onPress={() => navigation.goBack()} />
                <View style={tw`flex justify-start items-start gap-4`}>
                    <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-black text-3xl')}>Create Pin</Text>
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base')}>Enter 4 digit numbers to make payments</Text>
                </View>
                <View style={tw`flex flex-row justify-center items-center p-12`}>
                    <CustomOTP onBlur={handleBlur} onFocus={handleFocus} />
                </View>
                <View style={tw`flex justify-center items-center mt-24`}>
                    <CustomButton onPress={handleModal} style={tw`flex flex-row justify-center items-center bg-[#e6e6e6] px-6 py-3 rounded-full min-w-full ${inputColor ? 'bg-[#29BB00]' : 'bg-[#E6E6E6]'}`}>
                        <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, `${inputColor ? 'text-white text-center text-base' : 'text-black'}`)}>Create</Text>
                    </CustomButton>
                    <CustomModal animationType={"slide"} transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                        <View style={tw`flex justify-center items-center gap-4 w-72`}>
                            <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'w-72 text-[#000000] text-xl text-center')}>Payment Pin successfully created</Text>
                            <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-[#8C8CA1] w-72 text-center text-base')}>You have successfully created your payment pin for all transactions</Text>
                            <CustomButton style={tw`flex flex-row justify-center items-center bg-[#29BB00] min-w-full py-4 px-8 rounded-full`} onPress={() => navigation.navigate("Home")}>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-center text-white text-base')}>Done</Text>
                            </CustomButton>
                        </View>
                    </CustomModal>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CreatePin;
