import { Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ style, children, onPress }) => {
    return (
        <Pressable onPress={onPress} style={style}>
            <Text>{children}</Text>
        </Pressable>
    )
}

export default CustomButton;