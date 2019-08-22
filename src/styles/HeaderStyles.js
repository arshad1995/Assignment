import { StyleSheet } from 'react-native';

const HeaderStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  name: {
    color: 'white',
  },
  menu: {
    width: 18,
    height: 18,
  },
});

export default HeaderStyles;
