import { View } from 'react-native';
import FilterImg from '../../assets/filter.svg';
import GenerationImg from '../../assets/generation.svg';
import SortImg from '../../assets/sort.svg';
import { styles } from './styles';

export default function Filters() {
  return (
    <View style={styles.container}>
      <FilterImg width={20} height={20} />
      <GenerationImg width={20} height={20} />
      <SortImg width={20} height={20} />
    </View>
  );
}
