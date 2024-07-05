import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

//import components
import CustomButton from '../../../components/CustomButton';

const CablePaySuccess = () => {

    const navigation = useNavigation(); //handle navigation to other screens

    return (
        <>
            <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
                <ScrollView vertical>
                    <View style={tw`flex justify-start items-center gap-12 bg-white min-h-full py-12 px-2`}>
                        <View style={tw`flex justify-center items-center gap-3 bg-white rounded-lg shadow-md px-8 py-6`}>
                            <Image source={require("../../../assets/check-badge.png")} />
                            <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-3xl text-black text-center')}>Successful</Text>
                            <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-xl text-black text-center')}>Your Cable purchase was Successful</Text>
                        </View>

                        <View style={tw`flex justify-center items-stretch gap-8 rounded-lg shadow-md bg-white px-8 py-4 w-full`}>
                            <View style={tw`flex flex-row justify-between items-center gap-24`}>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black text-center')}>Network</Text>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black text-center')}>MTN</Text>
                            </View>
                            <View style={tw`flex flex-row justify-between items-center gap-24`}>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black text-center')}>Amount</Text>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black text-center')}>1000</Text>
                            </View>
                            <View style={tw`flex flex-row justify-between items-center gap-24`}>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black text-center')}>Phone Number</Text>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black text-center')}>08149998467</Text>
                            </View>
                            <View style={tw`flex flex-row justify-between items-center gap-24`}>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black text-center')}>Transaction Date</Text>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black text-center')}>22-01-2024</Text>
                            </View>
                            <View style={tw`flex flex-row justify-between items-center gap-24`}>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black text-center')}>Transaction Time</Text>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black text-center')}>11:59pm</Text>
                            </View>
                            <View style={tw`flex flex-row justify-between items-center gap-24`}>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black text-center')}>Package</Text>
                                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black text-center')}>10GB for a month</Text>
                            </View>
                        </View>

                        <View style={tw`flex flex-row justify-center items-center`}>
                            <CustomButton
                                style={tw`flex flex-row justify-center items-center bg-[#29BB00] px-6 py-3 w-full rounded-full`}
                                onPress={() => navigation.navigate("Home")}
                            >
                                <Text
                                    style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-white text-center text-base')}>
                                    Done
                                </Text>
                            </CustomButton>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default CablePaySuccess;