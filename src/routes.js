import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from "react-native";
import axios from "axios";

export const AuthContext = React.createContext();
const AppStack = createStackNavigator();

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdList from "./pages/AdList";
import AdDetail from "./pages/AdDetail";
import SellerProfile from "./pages/SellerProfile";
import FavoritesAd from "./pages/FavoritesAd";
import MyAds from "./pages/MyAds";
import CreateAd from "./pages/CreateAd";
import Account from "./pages/Account";
import CreateSellerProfile from "./pages/CreateSellerProfile";
import ChangePassword from "./pages/ChangePassword";
import EditAccounts from "./pages/EditAccounts";
import Legal from "./pages/Legal";
import Guidelines from "./pages/Guidelines";
import TermsOfUse from "./pages/TermsOfUse";
import AboutUs from "./pages/AboutUs";

export default function Routes() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      // Login
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        const { email, password } = data;

        await axios
          .post(`http://192.168.1.4:3333/sessions`, { email, password })
          .then((resp) => {
            console.log(resp);
          })
          .catch((err) => {
            console.log(err);
          });

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      // Logout
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      // Register
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <AppStack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={state.userToken ? "AdList" : "Login"}
        >
          {state.userToken ? (
            <>
              <AppStack.Screen name="AdList" component={AdList} />
              <AppStack.Screen name="AdDetail" component={AdDetail} />
              <AppStack.Screen name="SellerProfile" component={SellerProfile} />
              <AppStack.Screen name="FavoritesAd" component={FavoritesAd} />
              <AppStack.Screen name="MyAds" component={MyAds} />
              <AppStack.Screen name="CreateAd" component={CreateAd} />
              <AppStack.Screen name="Account" component={Account} />
              <AppStack.Screen
                name="ChangePassword"
                component={ChangePassword}
              />
              <AppStack.Screen
                name="CreateSellerProfile"
                component={CreateSellerProfile}
              />
              <AppStack.Screen name="EditAccounts" component={EditAccounts} />
              <AppStack.Screen name="Legal" component={Legal} />
              <AppStack.Screen name="Guidelines" component={Guidelines} />
              <AppStack.Screen name="TermsOfUse" component={TermsOfUse} />
              <AppStack.Screen name="AboutUs" component={AboutUs} />
            </>
          ) : (
            <>
              <AppStack.Screen name="Login" component={Login} />
              <AppStack.Screen name="Register" component={Register} />
            </>
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
