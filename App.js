import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainStack } from './navigation/mainStack';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold, } from '@expo-google-fonts/ubuntu'
import { ThemeProvider } from './utils/ThemeProvider';
export default function App() {


  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (

    <NavigationContainer >
      <ThemeProvider>
        <MainStack />
      </ThemeProvider>
    </NavigationContainer>
  );
}


