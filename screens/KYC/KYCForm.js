import { View, Text } from 'react-native'
import { useState } from 'react'
import tw from 'twrnc'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

//import components
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const KYCForm = () => {

    const navigation = useNavigation();

    const [inputColor, setInputColor] = useState(false);

    const handleFocus = () => {
        setInputColor(true);
    }

    const handleBlur = () => {
        setInputColor(true);
    }

    return (
        <View style={tw`flex justify-start items-start gap-12 p-4 bg-white h-full`}>
            <Ionicons name="chevron-back" size={24} color={"#000"} onPress={() => navigation.goBack()} />
            <View style={tw`flex flex-col justify-start items-start gap-2`}>
                <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-black text-3xl')}>KYC Verification</Text>
                <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base')}>Provide your information</Text>
            </View>
            <View style={tw`flex justify-center items-center gap-5`}>
                <View style={tw`flex flex-col justify-center items-start gap-2`}>
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base')}>Fullname</Text>
                    <CustomInput onBlur={handleBlur} onFocus={handleFocus} placeholder="Enter fullname" style={tw`border-2 border-[#2b2c2b] px-6 py-4 rounded-lg w-[350px] ${inputColor ? 'border-2 border-[#29BB00]' : 'border-2 border-[#E6E6E6]'}`} />
                </View>
                <View style={tw`flex flex-col justify-center items-start gap-2`}>
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base')}>Gender</Text>
                    <CustomInput onBlur={handleBlur} onFocus={handleFocus} placeholder="Select your Gender" style={tw`border-2 border-[#2b2c2b] px-6 py-4 rounded-lg w-[350px] ${inputColor ? 'border-2 border-[#29BB00]' : 'border-2 border-[#E6E6E6]'}`} />
                </View>
                <View style={tw`flex flex-col justify-center items-start gap-2`}>
                    <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base')}>Date of Birth</Text>
                    <CustomInput onBlur={handleBlur} onFocus={handleFocus} placeholder="dd/mm/yy" style={tw`px-6 py-4 rounded-lg w-[350px] ${inputColor ? 'border-2 border-[#29BB00]' : 'border-2 border-[#E6E6E6]'}`} />
                    <Ionicons name="calendar-outline" size={24} color={'#000'} style={tw`absolute top-14 left-72`} />
                </View>
            </View>
            <View style={tw`flex justify-center items-center gap-4 p-2`}>
                <CustomButton
                    style={tw`flex flex-row justify-center items-center bg-[#29bb00] w-[350px] px-8 py-4 rounded-full ${inputColor ? 'bg-[#29BB00]' : 'bg-[#E6E6E6]'}`}
                    onPress={() => navigation.navigate("KYCDocuments")}
                >
                    <Text
                        style={tw.style({ fontFamily: 'PTSans-Regular' }, `${inputColor ? 'text-center text-white text-base' : 'text-center text-black text-base'}`)}
                    >
                        Continue
                    </Text>
                </CustomButton>
            </View>
        </View>
    )
}

export default KYCForm