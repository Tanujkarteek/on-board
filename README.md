# Onboarding Flow - React Native App

A simple mobile app demonstrating an onboarding flow with permissions, phone login, and user details collection.

## Features

- Location permission handling
- App Tracking Transparency (ATT) for iOS
- Phone number-based login with OTP
- User details collection form
- Dashboard screen
- Clean and modern UI using React Native Paper

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS) or Android Emulator (for Android)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the App

1. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

2. Press:
   - `i` to run on iOS simulator
   - `a` to run on Android emulator
   - Or scan the QR code with Expo Go app on your physical device

## Project Structure

```
app/
  ├── index.tsx           # Entry point, redirects to permissions
  ├── permissions.tsx     # Location and ATT permissions
  ├── login.tsx          # Phone number login with OTP
  ├── user-details.tsx   # User information collection
  ├── dashboard.tsx      # Final screen after onboarding
  └── _layout.tsx        # Navigation configuration
```

## Implementation Details

- Uses Expo Router for navigation
- React Native Paper for UI components
- Expo Location for location permissions
- Expo Tracking Transparency for ATT
- Form validation for user details
- Mock OTP verification

## Notes

- The OTP verification is mocked for demonstration purposes
- Location and ATT permissions are properly configured for both iOS and Android
- The app follows a clean, modular architecture
- All screens are responsive and work on both iOS and Android

## License

MIT
