import React from "react";
import { SafeAreaView, StyleSheet, Text, Button, View } from "react-native";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";

import tw from "twrnc";

const CELL_COUNT = 4;

const CustomOTP = ({ onBlur, onFocus }) => {
    const [value, setValue] = React.useState("");
    // const [isFull, setIsFull] = React.useState(false);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    // const handleFulfill = (code) => {
    //     if (code.length === CELL_COUNT) {
    //         setIsFull(true);
    //     }
    // };

    return (
        <SafeAreaView style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={(code) => {
                    setValue(code);
                    // handleFulfill(code);
                }}
                cellCount={CELL_COUNT}
                rootStyle={tw`flex flex-row justify-evenly items-center gap-4 focus:border-black`}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[
                            styles.cell,
                            isFocused && styles.focusCell && styles.full,
                        ]}
                        onLayout={getCellOnLayoutHandler(index)}
                    >
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
                onBlur={onBlur}
                onFocus={onFocus}
            />
            {/* {isFull && (
                <View style={styles.fullMessage}>
                    <Text>Code confirmation is Done</Text>
                    <Button title="Proceed" onPress={() => console.log("Proceed")} />
                </View>
            )} */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        padding: 20,
        justifyContent: "center",
    },
    title: { textAlign: "center", fontSize: 30 },

    cell: {
        width: 52,
        height: 44,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: "#f5f7ff",
        backgroundColor: "#f5f7ff",
        borderRadius: 10,
        textAlign: "center",
    },
    focusCell: {
        borderColor: "#000",
    },
    full: {
        borderColor: "#f5f7ff",
    },
    fullMessage: {
        marginTop: 20,
        alignItems: "center",
    },
});

export default CustomOTP;