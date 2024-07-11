import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import tw from 'twrnc'
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import CustomModal from '../../components/CustomModal';
import CustomButton from '../../components/CustomButton';
import Services from '../../components/Services';
import { useSelector } from 'react-redux';
import { useAuth } from '../../zustand/useAuth';
// import { FIREBASE_AUTH } from '../../firebaseConfig';

const Home = ({route}) => {

    // const { user } = route.params;
    const navigation = useNavigation();

   const {user} = useSelector((state) => state.user)

    const [isFocused, setIsFocused] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const handleModal = () => setModalVisible(() => !modalVisible); 

    useEffect(() => {
        setIsFocused(!isFocused);
        handleModal();
    }, [])

    const [isVisible, setIsVisible] = useState(true);


    return (
        <>
            <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
                <ScrollView vertical overScrollMode='never' style={tw`bg-white min-h-full`}>
                    <View style={tw`flex justify-start items-start gap-6 p-4`}>
                        <View style={tw`flex flex-row justify-between items-center w-full`}>
                            <View style={tw`flex flex-row justify-start items-center gap-3`}>
                                <Image source={require("../../assets/avatar.png")} />
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-xl text-black')}>Hi, {user?.username}</Text>
                            </View>
                            <View style={tw`flex flex-row justify-end items-end gap-2`}>
                                <Ionicons name="notifications-outline" size={20} color={"#29bb00"} />
                                <Ionicons name="log-out" size={20} color={"#ff0000"} onPress={() => navigation.navigate("Login")} accessibilityLabel={"Logout"}/>
                            </View>
                        </View>
                        <View style={tw`flex justify-start items-start gap-2 bg-[#29BB00] rounded-lg p-8 w-full`}>
                            <View style={tw`flex flex-row justify-start items-center gap-4 w-full`}>
                                <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-base text-white')}>Total Balance</Text>
                                <Ionicons name={isVisible ? "eye-off" : "eye"} size={18} color={"#fff"} onPress={() => setIsVisible(!isVisible)} />
                            </View>
                            {isVisible ?
                                <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-xl text-white')}>******</Text>
                                : <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-xl text-white')}>&#x20A6;8,000.00</Text>
                            }
                            <View style={tw`flex flex-row justify-end items-end ml-auto`}>
                                <CustomButton style={tw`flex flex-row justify-center items-center bg-white px-6 py-2 rounded-full`}>
                                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#29BB00]')}>+ Add money</Text>
                                </CustomButton>
                            </View>
                        </View>
                        <View style={tw`flex flex-row justify-center items-center gap-16 bg-white min-w-full`}>
                            <View style={tw`flex flex-row justify-start items-center gap-2`}>
                                <Image source={require("../../assets/transfer.png")} />
                                <Text onPress={() => navigation.navigate("Transfer")} style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-lg text-[#29bb00]')}>Transfer</Text>
                            </View>
                            <View style={tw`flex flex-row justify-end items-center gap-2`}>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-lg text-[#29bb00]')}>Transaction History</Text>
                                <Ionicons name='chevron-forward' size={18} color={"#29bb00"} />
                            </View>
                        </View>
                        <View style={tw`flex justify-start items-start gap-5 pt-5`}>
                            <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-lg text-[#000]')}>Services</Text>
                            <Services />
                        </View>
                    </View>
                    {isFocused && <CustomModal animationType={"slide"} transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                        <View style={tw`flex justify-center items-center gap-4 w-72`}>
                            <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'w-72 text-[#000000] text-xl text-center')}>Create Payment Pin</Text>
                            <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-[#8C8CA1] w-72 text-center text-base')}>Create your payment pin so you can make transactions easily</Text>
                            <View style={tw`flex justify-center items-center gap-4`}>
                                <CustomButton style={tw`flex flex-row justify-center items-center bg-[#29BB00] min-w-full py-2 px-8 rounded-full`} onPress={() => navigation.navigate("Create Pin")}>
                                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-center text-white text-base')}>Create</Text>
                                </CustomButton>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-sm text-[#29BB00] text-center')} onPress={handleModal}>No, Thanks</Text>
                            </View>
                        </View>
                    </CustomModal>
                    }
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Home;