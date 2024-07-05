import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import tw from 'twrnc';
import { Ionicons } from "@expo/vector-icons";
import Constants from 'expo-constants';
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";

//import Components
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';

const KYCDocumentSelection = () => {

  const navigation = useNavigation();

  //handle checkbox state
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [inputColor, setInputColor] = useState(false);

  //handle loading to account page
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000))
    navigation.navigate("Profile")
    setIsLoading(false);
  }


  //function for handling inputcolor and button color change 
  const handleFocus = () => {
    setInputColor(true);
  }
  const handleBlur = () => {
    setInputColor(true);
  }

  return (
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
      <View style={tw`flex justify-start items-start gap-12 bg-white h-full p-4`}>
        <Ionicons name="chevron-back" size={24} color="#2b2c2b" onPress={() => navigation.goBack()} />
        <View style={tw`flex justify-start items-start gap-2`}>
          <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-[#2B2C2B] text-3xl')}>KYC Verification</Text>
          <Text
            style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-[#2b2c2b] text-base w-[350px]')}>
            Identification Document (Please select the document you want to upload)
          </Text>
        </View>
        <View style={tw`flex justify-start items-start gap-12`}>
          <View style={tw`flex flex-row justify-start items-start gap-2`}>
            <Checkbox
              style={tw`rounded-full border-2`}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? "#29BB00" : "null"}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <Text>National ID Card</Text>
          </View>
          <View style={tw`flex flex-row justify-start items-start gap-2`}>
            <Checkbox
              style={tw`rounded-full border-2`}
              value={isChecked2}
              onValueChange={setIsChecked2}
              color={isChecked2 ? "#29BB00" : "null"}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <Text>Driver's License</Text>
          </View>
          <View style={tw`flex flex-row justify-start items-start gap-2`}>
            <Checkbox
              style={tw`rounded-full border-2`}
              value={isChecked3}
              onValueChange={setIsChecked3}
              color={isChecked3 ? "#29BB00" : "null"}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <Text>International Passport</Text>
          </View>
        </View>
        <View style={tw`flex justify-center items-center p-2`}>
          <CustomButton onPress={handleLoading} style={tw`flex flex-row justify-center items-center bg-[#E6E6E6] px-5 py-3 w-[350px] rounded-full ${inputColor ? 'bg-[#29bb00]' : 'bg-[#e6e6e6]'}`}>
            <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, `${inputColor ? 'text-white text-center text-base' : 'text-black text-center text-base'}`)}>Continue</Text>
          </CustomButton>
          {isLoading && <ActivityIndicator size="large" color={"#29BB00"} />}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default KYCDocumentSelection;