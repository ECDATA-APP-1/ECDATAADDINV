// App.tsx

import React, { useState, useEffect } from 'react';
import { View, TextInput,TouchableOpacity, Button, FlatList, Text, Image } from 'react-native';
import { styles } from './styles';
import { generateUniqueQRCode } from './utils/qrCodeUtils';
import mysql from 'mysql';

const App: React.FC = () => {
  const [containerName, setContainerName] = useState('');

  const [inventoryList, setInventoryList] = useState<{ containerName: string; qrCode: string; id: string; }[]>([] as { containerName: string; qrCode: string; id: string; }[]);
  

  const handleAddItem = () => {
    if (containerName) {
      const newItem = {
        containerName,
        qrCode: 'Unique QR Code',
        id: 'Unique ID',
      };

      setInventoryList((prevList) => [...prevList, newItem]);
      setContainerName('');
    }
  };

  

  const renderItem = ({ item }: { item: { containerName: string; qrCode: string; id: string; } }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>Container Name: {item.containerName}</Text>
      <Text style={styles.itemText}>QR Code: {item.qrCode}</Text>
      <Text style={styles.itemText}>ID: {item.id}</Text>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Happy Inventory List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={containerName}
          onChangeText={setContainerName}
          placeholder="Container Name"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddItem}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={inventoryList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

export default App;
