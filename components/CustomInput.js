import { TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ placeholder, type, value, style, onChangeText, placeholderTextColor, onFocus, onBlur, secureTextEntry, keyboardType, maxLength }) => {
    return (
        <>
            <TextInput
                placeholder={placeholder}
                type={type} value={value}
                style={style}
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
                onFocus={onFocus}
                onBlur={onBlur}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                maxLength={maxLength}
            />
        </>
    )
}

export default CustomInput