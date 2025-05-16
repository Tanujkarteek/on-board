import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Keyboard,
  TextInput as RNTextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { login } from "./store/authSlice";

export const screenOptions = {
  headerShown: false,
};

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSendOtp = () => {
    // Mock OTP sending
    if (phoneNumber.length === 10) {
      setShowOtpInput(true);
    } else {
      Alert.alert("Please enter a valid phone number");
    }
  };

  const handleVerifyOtp = () => {
    // Mock OTP verification
    dispatch(login(phoneNumber));
    router.replace("/dashboard");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>
          Login with Phone
        </Text>

        {!showOtpInput ? (
          <View style={styles.inputContainer}>
            <RNTextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              style={styles.iosInput}
              maxLength={10}
              placeholder="Enter your phone number"
              placeholderTextColor="#999"
            />
            <Button
              mode="contained"
              onPress={handleSendOtp}
              disabled={!phoneNumber}
              style={styles.button}
              labelStyle={styles.buttonText}
            >
              Send OTP
            </Button>
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <RNTextInput
              value={otp}
              onChangeText={setOtp}
              keyboardType="number-pad"
              style={styles.iosInput}
              maxLength={4}
              placeholder="Enter OTP"
              placeholderTextColor="#999"
            />
            <Button
              mode="contained"
              onPress={handleVerifyOtp}
              disabled={!otp}
              style={styles.button}
              labelStyle={styles.buttonText}
            >
              Verify OTP
            </Button>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginVertical: 20,
  },
  inputContainer: {},
  iosInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
  },
});
