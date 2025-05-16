import * as Location from "expo-location";
import { router } from "expo-router";
import * as TrackingTransparency from "expo-tracking-transparency";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function PermissionsScreen() {
  const [locationStatus, setLocationStatus] =
    useState<Location.PermissionStatus | null>(null);
  const [trackingStatus, setTrackingStatus] = useState<string | null>(null);

  useEffect(() => {
    checkPermissions();
  }, []);

  // If they have, then we can skip the permissions screen
  useEffect(() => {
    if (locationStatus === "granted" && trackingStatus === "granted") {
      router.replace("/login");
    }
  }, [locationStatus, trackingStatus]);

  // If user has denied the permissions, we should show a modal to ask them to enable in settings only if we can't ask for the permission again
  useEffect(() => {
    if (
      locationStatus &&
      trackingStatus &&
      (locationStatus === "denied" || trackingStatus === "denied")
    ) {
      showModal(
        "Please enable location and tracking permissions from settings to use the app"
      );
    }
  }, [locationStatus, trackingStatus]);

  const showModal = (message: string) => {
    Alert.alert(message);
  };

  const checkPermissions = async () => {
    const location = await Location.getForegroundPermissionsAsync();
    setLocationStatus(location.status);

    const tracking = await TrackingTransparency.getTrackingPermissionsAsync();
    setTrackingStatus(tracking.status);
  };

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setLocationStatus(status);
  };

  const requestTrackingPermission = async () => {
    const { status } =
      await TrackingTransparency.requestTrackingPermissionsAsync();
    setTrackingStatus(status);
  };

  const handleContinue = () => {
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.title}>
          Permissions Required
        </Text>
      </View>

      <View style={styles.permissionSection}>
        <Text variant="titleMedium">Location Permission</Text>
        <Text variant="bodyMedium" style={styles.description}>
          We need your location to provide location-based services
        </Text>
        <Button
          mode="contained"
          onPress={
            locationStatus === "denied"
              ? () =>
                  showModal(
                    "Please enable location perssion from settings to use the app"
                  )
              : requestLocationPermission
          }
          disabled={locationStatus === "granted"}
          style={styles.button}
        >
          {locationStatus === "granted" ? "Location Granted" : "Grant Location"}
        </Button>
      </View>

      <View style={styles.permissionSection}>
        <Text variant="titleMedium">App Tracking Transparency</Text>
        <Text variant="bodyMedium" style={styles.description}>
          Allow tracking to improve your experience
        </Text>
        <Button
          mode="contained"
          onPress={
            trackingStatus === "denied"
              ? () =>
                  showModal(
                    "Please enable tracking permissions from settings to use the app"
                  )
              : requestTrackingPermission
          }
          disabled={trackingStatus === "granted"}
          style={styles.button}
        >
          {trackingStatus === "granted" ? "Tracking Granted" : "Grant Tracking"}
        </Button>
      </View>

      <Button
        mode="contained"
        onPress={handleContinue}
        disabled={locationStatus !== "granted" || trackingStatus !== "granted"}
        style={styles.continueButton}
      >
        Continue
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    marginVertical: 20,
  },
  permissionSection: {
    marginBottom: 30,
  },
  description: {
    marginVertical: 8,
    color: "#666",
  },
  button: {
    marginTop: 8,
  },
  continueButton: {
    marginTop: "auto",
    marginBottom: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
  },
});
