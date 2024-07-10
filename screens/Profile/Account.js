import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const Account = () => {

  //handle navigation
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
        <ScrollView>
          <View style={tw`flex justify-start items-start gap-4 min-h-full bg-white p-4`}>
            <View style={tw`flex flex-row justify-start items-center gap-3`}>
              <Ionicons name='chevron-back' size={22} color={"#000"} onPress={() => navigation.goBack()} />
              <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-lg')}>My Profile</Text>
            </View>

            <View style={tw`flex justify-center items-center gap-16 shadow-lg border-white border-2 rounded-lg py-6 min-w-full bg-white`}>
              <View style={tw`flex justify-center items-center gap-2`}>
                <Image source={require("../../assets/avatar.png")} />
                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-lg text-black text-center')}>Johnson</Text>
              </View>
              <View style={tw`flex flex-row justify-between items-center gap-24`}>
                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base')}>Account Number</Text>
                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base')}>
                  22344455677
                  <Ionicons name='copy-outline' size={22} color={"#29BB00"} />
                </Text>
              </View>
            </View>
            <View style={tw`flex justify-start items-start gap-10 bg-white shadow-md rounded-lg min-w-full bg-white p-6`}>
              <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-lg text-black')}>Account Details</Text>
              <View style={tw`flex flex-row justify-start items-center gap-16`}>
                <View style={tw`flex justify-start items-start gap-6`}>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-sm text-[#656765]')}>Fullname</Text>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-sm text-[#656765]')}>Username</Text>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-sm text-[#656765]')}>Gender</Text>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-sm text-[#656765]')}>Date of Birth</Text>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-sm text-[#656765]')}>Phone Number</Text>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-sm text-[#656765]')}>Email</Text>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-sm text-[#656765]')}>Address</Text>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-sm text-[#656765]')}>KYC Verification</Text>
                </View>
                <View style={tw`flex justify-end items-end gap-6`}>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2B2C2B]')}>Johnson Isaac</Text>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2B2C2B]')}>Johnny</Text>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2B2C2B]')}>Male</Text>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2B2C2B]')}>28**** <Ionicons name='create-outline' size={20} color={"#2B2C2B"} /></Text>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2B2C2B]')}>09012345678 <Ionicons name='create-outline' size={20} color={"#2B2C2B"} onPress={() => { navigation.navigate("Edit Number") }} /></Text>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2B2C2B]')}>john***@gmail.com <Ionicons name='create-outline' size={20} color={"#2B2C2B"} onPress={() => { navigation.navigate("Edit Mail") }} /></Text>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2B2C2B]')}>10, fadaka street <Ionicons name='create-outline' size={20} color={"#2B2C2B"} onPress={() => { navigation.navigate("Edit Address") }} /></Text>
                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#29BB00]')}>Approved <Ionicons name='create-outline' size={20} color={"#2B2C2B"} /></Text>
                </View>
              </View>
            </View>
          </View >
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Account