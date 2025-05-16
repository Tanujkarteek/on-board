# Onboarding Flow - React Native App

A modern mobile app demonstrating an onboarding flow with permissions, phone login, and user details collection, built with Expo and React Native.

## Features

- Location permission handling
- App Tracking Transparency (ATT) for iOS
- Phone number-based login with OTP
- User details collection form
- Dashboard screen
- Clean and modern UI with React Native Paper and Native IOS Components
- Redux state management
- TypeScript support
- Expo Router for navigation

## Prerequisites

- Node.js (v14 or higher)
- npm
- Expo CLI (EAS CLI)
- iOS Simulator (for iOS) or Android Emulator (for Android)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

1. Start the development server:

   ```bash
   npm start
   # or
   npx expo start
   ```

2. Press:
   - `i` to run on iOS simulator
   - `a` to run on Android emulator
   - Or scan the QR code with Expo Go app on your physical device

## Project Structure

```
├── app/                  # Main application screens and navigation
├── assets/              # Static assets (images, fonts, etc.)
├── components/          # Reusable React components
├── constants/           # App constants and configuration
├── hooks/               # Custom React hooks
├── scripts/             # Utility scripts
└── ios/ & android/      # Native platform configurations
```

## Key Dependencies

- Expo SDK 53
- React Native 0.79.2
- React 19.0.0
- Expo Router for navigation
- React Native Paper for UI components
- Redux Toolkit for state management
- TypeScript for type safety
- Various Expo modules for native functionality

## Available Scripts

- `npm start` - Start the development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint
- `npm run reset-project` - Reset project configuration

## Implementation Details

- Uses Expo Router for file-based navigation
- React Native Paper for consistent UI components
- Expo Location for location permissions
- Expo Tracking Transparency for ATT
- Form validation for user details
- Mock OTP verification
- Redux for state management
- TypeScript for type safety
- ESLint for code quality

## Notes

- The OTP verification is mocked for demonstration purposes
- Location and ATT permissions are properly configured for both iOS and Android
- The app follows a clean, modular architecture
- All screens are responsive and work on both iOS and Android
- Built with TypeScript for better type safety and developer experience

## License

MIT
