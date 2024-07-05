//import libraries
import { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";

//import components & Screens
import Welcome from './screens/Welcome';
import CreateAccount from './screens/Auth/CreateAccount';
import EmailRegistration from './screens/Auth/EmailRegistration';
import CreatePassword from "./screens/Auth/CreatePassword";
import PhoneNumberRegistration from "./screens/Auth/PhoneNumberRegistration";
import Successful from "./screens/Auth/Successful";
import Login from "./screens/Auth/Login";
import ForgotPassword from "./screens/Forgot/ForgotPassword";
import ForgotEmail from "./screens/Forgot/ForgotEmail";
import ForgotNumber from "./screens/Forgot/ForgotNumber";
import KYC from "./screens/KYC/KYC";
import KYCForm from "./screens/KYC/KYCForm";
import KYCDocumentSelection from "./screens/KYC/KYCDocumentSelection"
import Home from "./screens/Profile/Home";
import Bonus from "./screens/Profile/Bonus";
import Support from "./screens/Profile/Support";
import Account from "./screens/Profile/Account";
import Data from "./screens/Services/Data/Data";
import EditPhoneNumber from "./screens/Profile/Edit/EditPhoneNumber";
import EditMail from "./screens/Profile/Edit/EditMail";
import EditAddress from "./screens/Profile/Edit/EditAddress";
import CreatePin from "./screens/Profile/Pin/CreatePin";
import SuccessfulTransfer from "./screens/Services/Data/SuccessfulTransfer";
import Airtime from "./screens/Services/Airtime/Airtime";
import AirtimeSuccess from "./screens/Services/Airtime/AirtimeSuccess";
import BulkSMS from "./screens/Services/BulkSMS/BulkSMS";
import BulkSMSSuccessful from "./screens/Services/BulkSMS/BulkSMSSuccessful";
import AirtimeToCashPay from "./screens/Services/AirtimeToCash/AirtimeToCashPay";
import AirtimeToCashSuccess from "./screens/Services/AirtimeToCash/AirtimeToCashSuccess";
import CablePay from "./screens/Services/Cable/CablePay";
import CablePaySuccess from "./screens/Services/Cable/CablePaySuccess";
import CouponSuccessful from "./screens/Services/Coupon/CouponSuccessful";
import DataCoupon from "./screens/Services/Coupon/DataCoupon";
import EducationPay from "./screens/Services/Education/EducationPay";
import EducationPaySuccess from "./screens/Services/Education/EducationPaySuccess";
import RechargeCardPay from "./screens/Services/RechargeCardPrinting/RechargeCardPrintingPay";
import RehargeCardPrintingSuccess from "./screens/Services/RechargeCardPrinting/RechargeCardPrintingSuccess";
import Transfer from "./screens/Profile/Transfer/Transfer";
import TransferDetails from "./screens/Profile/Transfer/TransferDetails";
import { store } from "./redux/store";
import { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'PTSans-Bold': require('./assets/fonts/PTSans-Bold.ttf'),
    'PTSans-Regular': require('./assets/fonts/PTSans-Regular.ttf')
  });

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
      <Provider store={store}>
      <PersistGate  persistor={persistor} loading={null}>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Create Account"
            component={CreateAccount}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Email Registration"
            component={EmailRegistration}
            options={{ headerShown: false }}
          />
      
          <Stack.Screen
            name="Create Password"
            component={CreatePassword}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="PhoneNumber Registration"
            component={PhoneNumberRegistration}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Successful"
            component={Successful}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Forgot Password"
            component={ForgotPassword}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Forgot Email"
            component={ForgotEmail}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Forgot Number"
            component={ForgotNumber}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="KYC"
            component={KYC}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="KYC Form"
            component={KYCForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="KYCDocuments"
            component={KYCDocumentSelection}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Data"
            component={Data}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Edit Number"
            component={EditPhoneNumber}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Edit Mail"
            component={EditMail}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Edit Address"
            component={EditAddress}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Create Pin"
            component={CreatePin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Airtime Purchase"
            component={Airtime}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Airtime Success"
            component={AirtimeSuccess}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bulk sms"
            component={BulkSMS}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bulk Success"
            component={BulkSMSSuccessful}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Airtime Cash"
            component={AirtimeToCashPay}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Cash Success"
            component={AirtimeToCashSuccess}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cable"
            component={CablePay}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cable Success"
            component={CablePaySuccess}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Coupon Pay"
            component={DataCoupon}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Coupon Success"
            component={CouponSuccessful}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Data Pay"
            component={Data}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Successful Transfer"
            component={SuccessfulTransfer}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Education Pay"
            component={EducationPay}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Education Success"
            component={EducationPaySuccess}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Card Printing"
            component={RechargeCardPay}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Print Success"
            component={RehargeCardPrintingSuccess}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name="Transfer"
            component={Transfer}
            options={{ headerShown: false }}
            />
          <Stack.Screen 
          name="Transfer Details" 
          component={TransferDetails} 
          options={{headerShown: false}}
          />
        </Stack.Navigator>
        </PersistGate>
      </Provider>
      </NavigationContainer>
      <StatusBar style="dark" backgroundColor="#fff" />
    </>
  );
}

export const Profile = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{ tabBarStyle: { height: 60 }, tabBarActiveTintColor: '#29BB00', tabBarInactiveTintColor: '#656756' }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons name="home" size={24} color={focused ? "#29BB00" : '#656765'} />
            ),
          }}
        />
        <Tab.Screen
          name="Bonus"
          component={Bonus}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons name="gift-outline" size={24} color={focused ? "#29BB00" : '#656765'} />
            ),
          }}
        />
        <Tab.Screen
          name="Support"
          component={Support}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons name="help-circle-outline" size={24} color={focused ? "#29BB00" : '#656765'} />
            ),
          }}
        />
        <Tab.Screen
          name="Me"
          component={Account}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons name="person-circle-outline" size={24} color={focused ? "#29BB00" : '#656765'} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  )
}