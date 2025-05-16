import { router } from "expo-router";
import { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, Text } from "react-native-paper";

export default function UserDetailsScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Mock form submission
    router.replace("/dashboard");
  };

  const isFormValid =
    name.trim() && email.trim() && email.includes("@") && email.includes(".");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>
          Tell us about yourself
        </Text>

        <View style={styles.form}>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#999"
          />

          <TextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999"
          />

          <Button
            mode="contained"
            onPress={handleSubmit}
            disabled={!isFormValid}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            Continue
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    marginVertical: 20,
  },
  form: {
    marginTop: 20,
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
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
