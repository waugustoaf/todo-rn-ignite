import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    padding: 16,
    backgroundColor: theme.colors.gray[500],
    borderRadius: 8,
  },
  description: {
    color: theme.colors.gray[100],
    paddingHorizontal: 10,
    flex: 1,
  },
});
