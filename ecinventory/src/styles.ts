// styles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  itemName: {
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontStyle: 'italic',
    color: 'gray',
  },
});
