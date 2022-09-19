import { StatusBar } from 'react-native' 
import { useFonts, Inter_400Regular, Inter_900Black, Inter_700Bold, Inter_600SemiBold} from '@expo-google-fonts/inter'
import { Background } from './src/components/Background'
import { Home } from './src/screens/Home'
import { Loading } from './src/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_900Black,
    Inter_700Bold,
    Inter_600SemiBold,
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <Loading/>}
    </Background>
  );
}

