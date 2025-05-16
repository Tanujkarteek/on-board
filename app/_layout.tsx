import { Stack } from "expo-router";
import Providers from "./providers";

export default function Layout() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="dashboard" />
      </Stack>
    </Providers>
  );
}
