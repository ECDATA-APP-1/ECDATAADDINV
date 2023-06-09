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
  itemText: {
    fontStyle: 'italic',
    color: 'gray',
  },
  itemQuantity: {
    fontStyle: 'italic',
    color: 'gray',
  },
  itemQRCode: {
    color: 'blue',
    marginTop: 5,
  },
 header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
 buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
