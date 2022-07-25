import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export default function InputSearch() {
  return (
    <SafeAreaView style={styles.input}>
      <TextInput placeholder="What Pokémon are you looking for?" />
    </SafeAreaView>
  );
}
