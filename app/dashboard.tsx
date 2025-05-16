import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store/authSlice";
import { RootState } from "./store/store";

export default function DashboardScreen() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Welcome to Dashboard
      </Text>

      <Text variant="bodyLarge" style={styles.message}>
        You have successfully completed the onboarding process!
      </Text>

      <Button
        mode="contained"
        onPress={handleLogout}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  message: {
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },
  button: {
    padding: 10,
    width: "90%",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
  },
});
