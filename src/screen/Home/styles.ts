import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray[600],
  },
  header: {
    backgroundColor: theme.colors.gray[700],
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 27,
  },
  content: {
    marginTop: -27,
    paddingHorizontal: 24,
  },
  inputContainer: {
    height: 54,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: theme.colors.gray[500],
    borderRadius: 6,
    flex: 1,
    padding: 16,
    fontSize: 16,
    color: theme.colors.gray[100],
  },
  addButton: {
    marginLeft: 4,
    padding: 15,
    backgroundColor: theme.colors.blue.dark,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsCounter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 32,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[400],
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterLabel: {
    fontWeight: 'bold',
  },
  counter: {
    backgroundColor: theme.colors.gray[400],
    color: theme.colors.gray[200],
    fontWeight: 'bold',
    marginLeft: 8,
    paddingHorizontal: 8,
    borderRadius: 50,
  },
  emptyList: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48,
  },
  emptyListTitle: {
    color: theme.colors.gray[300],
    fontWeight: 'bold',
    marginTop: 16,
  },
  emptyListText: {
    color: theme.colors.gray[300],
  },
});
