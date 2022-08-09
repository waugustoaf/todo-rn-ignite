import { View, StatusBar } from 'react-native';
import { HomeScreen } from './src/screen/Home';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <HomeScreen />
    </View>
  );
}
