import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import tw from 'twrnc';
import { Ionicons, Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useDispatch } from 'react-redux';
// import ConfirmationCodeField from 'react-native-confirmation-code-field';

//import components
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import CustomOTP from '../../../components/CustomOTP';

const Airtime = () => {

     const navigation = useNavigation();

     //handle network data provider
     const [value, setValue] = useState(null);

     const data = [
          { label: 'MTN', value: '1' },
          { label: 'GLO', value: '2' },
          { label: 'Airtel', value: '3' },
          { label: '9Mobile', value: '4' },
     ]

     const packageData = [
          { label: '2G for one day', value: '1' },
          { label: '3G for two days', value: '2' },
          { label: '30GB for a month', value: '3' },
          { label: '100GB for a month', value: '4' },
          { label: '200GB for a month', value: '4' },
          { label: '500GB for 3 months', value: '4' },
          { label: '600GB for 6 months', value: '4' },
          { label: '1000GB for a year', value: '4' },
     ]

     //handle input filled and button color change
     const [inputColor, setInputColor] = useState(false);

     const handleFocus = () => {
          setInputColor(true);
     }
     const handleBlur = () => {
          setInputColor(true);
     };

     //handle bottom sheet modal
     const bottomSheetRRef = useRef(null);

     const snapPoints = ["25%", "35%", "50%", "75%", "100%"]

     const handleBottomSheetModal = () => {
          bottomSheetRRef?.current.present();
     }

     const handleBottomSheetModal2 = () => {
          bottomSheetRRef?.current.present();
     }

     const [cancelbutton, setCancelbutton] = useState(false);

     //handleInput
     const [fill, setFill] = useState("");

     useEffect(() => {
          if (fill.length === 4) {
               navigation.navigate("Successful Transfer")
          }
     }, [fill, navigation])

     const dispatch = useDispatch();

     //dispatch actions here
     const handleSubmit = () => {

     }

     return (
          <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
               <BottomSheetModalProvider>
                    <ScrollView vertical style={tw`h-full bg-white`} overScrollMode='never'>
                         <View style={tw`flex justify-start items-start gap-6 py-4 px-4`}>
                              <View style={tw`flex flex-row justify-start items-start gap-3`}>
                                   <Ionicons name="chevron-back" size={24} color={"#000"} onPress={() => navigation.goBack()} />
                                   <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-xl')}>Airtime Purchase</Text>
                              </View>
                              <View style={tw`flex flex-col justify-start items-start gap-4`}>
                                   <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-[#2b2c2b]')}>Beneficiaries</Text>
                                   <View style={tw`flex flex-row justify-start items-start gap-4`}>
                                        <View style={tw`flex justify-start items-center gap-2`}>
                                             <Image source={require('../../../assets/swift-logo.png')} style={tw`w-[40px] h-[40px]`} />
                                             <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-sm text-[#2b2c2b]')}>My Number</Text>
                                        </View>
                                        <View style={tw`flex justify-start items-center gap-2`}>
                                             <Image source={require('../../../assets/swift-logo.png')} style={tw`w-[40px] h-[40px]`} />
                                             <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-sm text-[#2b2c2b]')}>08035189352</Text>
                                        </View>
                                   </View>
                              </View>

                              <View style={tw`flex justify-center items-center gap-5 px-3 py-4`}>
                                   <View style={tw`flex justify-start items-start gap-3`}>
                                        <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-black text-base')}>Phone Number</Text>
                                        <CustomInput placeholder="Enter phone number" style={tw`border-2 border-gray-400 px-6 py-4 min-w-full rounded-lg`} keyboardType={'numeric'} maxLength={11} />
                                   </View>
                                   <View style={tw`flex justify-start items-start gap-3`}>
                                        <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-black text-base')}>Network Provider</Text>
                                        <Dropdown
                                             onFocus={handleFocus}
                                             onBlur={handleBlur}
                                             style={tw`h-[50px] border-gray-400 border-2 rounded-lg min-w-full p-4`}
                                             placeholderStyle={tw`text-sm`}
                                             selectedTextStyle={tw`text-base`}
                                             inputSearchStyle={tw`h-[40px] text-sm`}
                                             iconStyle={tw`w-[20px] h-[20px]`}
                                             data={data}
                                             search
                                             maxHeight={300}
                                             labelField="label"
                                             valueField="value"
                                             placeholder="Select network"
                                             searchPlaceholder="Select network"
                                             value={value}
                                             onChange={item => {
                                                  setValue(item.value);
                                             }}
                                        />
                                   </View>
                                   <View style={tw`flex justify-start items-start gap-3`}>
                                        <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-black text-base')}>Amount</Text>
                                        <CustomInput placeholder="Enter amount" style={tw`border-2 border-gray-400 px-6 py-4 min-w-full rounded-lg`} />
                                   </View>
                                   <View style={tw`flex justify-start items-start gap-3`}>
                                        <Text style={tw.style({ fontFamily: 'PTSans-Bold' }, 'text-black text-base')}>Select Amount</Text>
                                        <View style={tw`flex flex-row justify-start items-center gap-4`}>
                                             <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base bg-[#f2f2f2] p-4')}>#100</Text>
                                             <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base bg-[#f2f2f2] p-4')}>#200</Text>
                                             <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base bg-[#f2f2f2] p-4')}>#400</Text>
                                             <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base bg-[#f2f2f2] p-4')}>#500</Text>
                                        </View>
                                        <View style={tw`flex flex-row justify-start items-center gap-4`}>
                                             <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base bg-[#f2f2f2] p-4')}>#600</Text>
                                             <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base bg-[#f2f2f2] p-4')}>#1000</Text>
                                             <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base bg-[#f2f2f2] p-4')}>#2000</Text>
                                             <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-base bg-[#f2f2f2] p-4')}>#5000</Text>
                                        </View>
                                   </View>
                              </View>
                              <View style={tw`flex justify-center items-center px-4`}>
                                   <CustomButton
                                        style={tw`flex flex-row justify-center items-center bg-[#29BB00] px-6 py-4 min-w-full rounded-full  ${inputColor ? 'bg-[#29bb00]' : 'bg-gray-200'}`}
                                        onPress={handleBottomSheetModal}
                                   >
                                        <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, `${inputColor ? 'text-white text-center' : 'text-black text-center'}`)}>Continue</Text>
                                   </CustomButton>
                                   <BottomSheetModal
                                        ref={bottomSheetRRef}
                                        index={2}
                                        snapPoints={snapPoints}
                                        backgroundStyle={tw`rounded-3xl`}
                                   >

                                        <View style={tw`px-4 py-2 flex justify-center items-center gap-6`}>
                                             <Feather name='x' size={18} color={"#000"} style={tw`ml-auto`} onPress={() => setCancelbutton(!cancelbutton)} />
                                             <View style={tw`flex justify-center items-center gap-2`}>
                                                  <Image source={require("../../../assets/airtime.png")} />
                                                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-base text-black text-center')}>Airtime</Text>
                                             </View>
                                             <View style={tw`flex flex-row justify-between items-center w-full`}>
                                                  <Text>Network</Text>
                                                  <Text>MTN</Text>
                                             </View>
                                             <View style={tw`flex flex-row justify-between items-center w-full`}>
                                                  <Text>Phone Number</Text>
                                                  <Text>08149998467</Text>
                                             </View>
                                             <View style={tw`flex flex-row justify-between items-center w-full`}>
                                                  <Text>Amount</Text>
                                                  <Text>3000</Text>
                                             </View>
                                             <CustomButton style={tw`flex flex-row justify-center items-center bg-[#29bb00] w-full py-3 px-6 rounded-full`}>
                                                  <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-white text-center text-base')} onPress={handleBottomSheetModal2}>
                                                       Pay
                                                  </Text>
                                             </CustomButton>
                                             <BottomSheetModal
                                                  ref={bottomSheetRRef}
                                                  index={2}
                                                  snapPoints={snapPoints}
                                                  backgroundStyle={tw`rounded-xl`}
                                                  enableDismissOnClose={true}
                                             >
                                                  <View style={tw`flex justify-center items-center gap-5`}>
                                                       <Feather name='x' size={18} color={"#000"} style={tw`ml-auto px-4`} onPress={() => setCancelbutton(!cancelbutton)} />
                                                       <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-black text-center text-base')}>Enter Payment Pin</Text>
                                                       <CustomOTP onChangeText={setFill} value={fill} />
                                                       <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-[#29bb00] text-base text-center')}>Forgot pin</Text>
                                                       <CustomButton style={tw`flex flex-row justify-center items-center bg-[#29bb00] w-4/5 py-3 px-4 rounded-full`}>
                                                            <Text style={tw.style({ fontFamily: 'PTSans-Regular' }, 'text-white text-center text-base')} onPress={() => navigation.navigate("Successful Transfer")}>
                                                                 Confirm
                                                            </Text>
                                                       </CustomButton>
                                                  </View>
                                             </BottomSheetModal>
                                        </View>
                                   </BottomSheetModal>
                              </View>
                         </View>
                    </ScrollView>
               </BottomSheetModalProvider>
          </SafeAreaView>
     )
}

export default Airtime;