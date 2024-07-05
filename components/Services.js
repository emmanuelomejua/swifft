import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const Services = () => {

    //handle navigation state
    const navigation = useNavigation();

    return (
        <View style={tw`flex flex-row justify-center items-center gap-12 px-8`}>
            <View style={tw`flex justify-start items-center gap-6`}>
                <TouchableOpacity style={tw`flex justify-start items-center gap-3`} onPress={() => navigation.navigate("Data")}>
                    <Image source={require("../assets/data.png")} />
                    <Text onPress={() => navigation.navigate("Data")} style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2b2c2b]')}>Data</Text>
                </TouchableOpacity>
                <Pressable style={tw`flex justify-start items-center gap-3`} onPress={() => navigation.navigate("Coupon Pay")}>
                    <Image source={require("../assets/coupon.png")} />
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2b2c2b]')}>Data Coupon</Text>
                </Pressable>
                <Pressable style={tw`flex justify-start items-center gap-3`} onPress={() => navigation.navigate("Education Pay")}>
                    <Image source={require("../assets/education.png")} />
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2b2c2b]')}>Education</Text>
                </Pressable>
            </View>
            <View style={tw`flex justify-center items-center gap-6`}>
                <Pressable style={tw`flex justify-center items-center gap-3`} onPress={() => navigation.navigate("Airtime Purchase")}>
                    <Image source={require("../assets/airtime.png")} />
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2b2c2b]')}>Airtime</Text>
                </Pressable>
                <Pressable style={tw`flex justify-center items-center gap-3`} onPress={() => navigation.navigate("Cable")}>
                    <Image source={require("../assets/cable.png")} />
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2b2c2b]')}>Cable</Text>
                </Pressable>
                <Pressable style={tw`flex justify-center items-center gap-3`} onPress={() => navigation.navigate("Card Printing")}>
                    <Image source={require("../assets/printing.png")} />
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'w-24 h-[48px] text-center text-base text-[#2b2c2b]')}>Recharge card printing</Text>
                </Pressable>
            </View>
            <View style={tw`flex justify-center items-center gap-6`}>
                <Pressable style={tw`flex justify-end items-center gap-3`} onPress={() => navigation.navigate("Airtime Cash")}>
                    <Image source={require("../assets/cash.png")} />
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-center w-[88px] h-[48px] text-[#2b2c2b]')}>Airtime to Cash</Text>
                </Pressable>
                <Pressable style={tw`flex justify-end items-center gap-3`}>
                    <Image source={require("../assets/electricity.png")} />
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2b2c2b]')}>Electricity</Text>
                </Pressable>
                <Pressable style={tw`flex justify-end items-center gap-3`} onPress={() => navigation.navigate("Bulk sms")}>
                    <Image source={require("../assets/bulk.png")} />
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2b2c2b]')}>Bulk SMS</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Services