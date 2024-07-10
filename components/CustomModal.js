import { View, Text, Modal } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const CustomModal = ({ children, animationType, transparent, visible, onRequestClose }) => {
    return (
        <>
            <View style={tw`flex-1 justify-center items-center`}>
                <Modal animationType={animationType} transparent={transparent} visible={visible} onRequestClose={onRequestClose}>
                    <View style={tw`flex-1 justify-center items-center bg-gray-400 opacity-90 h-full`}>
                        <View style={tw`bg-white p-8 rounded-lg items-center`}>
                            {children}
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    )
}

export default CustomModal;