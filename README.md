# RxNAuth - React Native Authentication App

RxNAuth is a simple and lightweight authentication app built with React Native (without Expo). It uses **AsyncStorage** for local email/password-based authentication.

---

## 🚀 Features

- Email & password based authentication
- User registration (signup)
- User login
- Home screen after successful login
- AsyncStorage used for storing users locally
- React Navigation (stack navigator)
- React Native CLI (not Expo)

---

## 🛠️ Tech Stack

- React Native
- AsyncStorage
- React Navigation (`@react-navigation/native`, `@react-navigation/native-stack`)
- Metro bundler

---

## 📁 Project Structure

```
RxNAuth/
│
├── App.js
├── package.json
├── app.json
├── babel.config.js
│
├── src/
│   ├── navigation/
│   │   └── auth.js            # Contains stack navigator (Login, Signup, Home)
│   │
│   └── screens/
│       ├── LoginScreen.js     # Login UI and logic
│       ├── SignupScreen.js    # Signup/registration logic
│       └── HomeScreen.js      # Dummy home screen
```

---

## 📦 Installation

> ⚠ Make sure you have Android Studio, Node.js, Java JDK 11+, and React Native CLI properly configured.

```bash
git clone https://github.com/your-username/rxnauth.git
cd rxnauth
npm install
```

---

## 📱 Run on Android Emulator

```bash
npx react-native start
# In another terminal
npx react-native run-android
```

---

## 🔐 Authentication Flow (without Firebase)

- On Signup:
  - User's email & password are stored in `AsyncStorage` under the key `users`
- On Login:
  - Entered credentials are matched with stored `users`
  - On success, the key `loggedIn` is set to `"true"`
- After Login:
  - User is navigated to the `Home` screen
- No internet or backend required

---

## 📦 Dependencies

```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
npm install @react-navigation/native-stack



npm install @react-native-async-storage/async-storage react-native-vector-icons
npx pod-install # For iOS (if needed)
```

---

## 🧪 Future Enhancements

- 🔒 Firebase integration (auth, database)
- 🌐 Online API support
- 🔁 Persistent session
- 👤 User profile screen

---

## 📝 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 👨‍💻 Developed by

**Devendra Kumar Singh**