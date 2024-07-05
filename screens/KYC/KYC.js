import { View, SafeAreaView, Text } from 'react-native';
import React from 'react';
import Constants from "expo-constants";
import tw from 'twrnc';

//import components
import KYCForm from './KYCForm';

const KYC = () => {

    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <View style={tw`flex justify-center items-center gap-4 bg-white h-full`}>
                <KYCForm />
            </View>
        </SafeAreaView>
    )
}

export default KYC;