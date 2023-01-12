import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import RegistrationScreen from './Screens/RegistrationScreen';
import { useState } from 'react';

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Medium": require('./assets/fonts/Roboto-Medium.ttf')
  })
}
export default function App() {
  // const [isReady, setIsReady] = useState(false);
  // if(!isReady) {
  //   return (
  //     <AppLoading 
  //     startAsync={loadApplication}
  //     onFinish={()=> setIsReady(true)}
  //     onError={console.error}
  //     />
  //   )
  // }
  return (
  
    <>
  
    <RegistrationScreen />
    </>
  );
}


