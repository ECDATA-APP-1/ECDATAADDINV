// App.tsx

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, Image } from 'react-native';
import { styles } from './styles';
import { generateQRCode } from './utils/qrCodeUtils';

import * as mysql from 'mysql';


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'jaya33',
  password: 'Huat@1221',
  database: 'myinventory_server',
});

interface Item {
  id: number;
  name: string;
  quantity: number;
}

const App: React.FC = () => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [inventoryList, setInventoryList] = useState<Item[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleAddItem = () => {
    if (itemName && itemQuantity) {
      const newItem: Item = {
        id: nextId,
        name: itemName,
        quantity: Number(itemQuantity),
      };
      setInventoryList((prevList) => [...prevList, newItem]);
      setItemName('');
      setItemQuantity('');
      setNextId((prevId) => prevId + 1);
    }
  };

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={itemName}
          onChangeText={setItemName}
          placeholder="Item Name"
        />
        <TextInput
          style={styles.input}
          value={itemQuantity}
          onChangeText={setItemQuantity}
          placeholder="Item Quantity"
          keyboardType="numeric"
        />
        <Button title="Add Item" onPress={handleAddItem} />
      </View>
      <FlatList
        data={inventoryList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

export default App;
