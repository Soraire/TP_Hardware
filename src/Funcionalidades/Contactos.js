import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import * as Contacts from 'expo-contacts';

const Contactos = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();

      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers, Contacts.Fields.Image],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);
  
  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.phoneNumbers && item.phoneNumbers.length > 0 ? item.phoneNumbers[0].number : ''}</Text>
            <Image source={{ uri: item.image ? item.image.uri : 'https://www.svgrepo.com/show/110286/emergency-call.svg' }} style={{ width: 20, height: 20 }} />
          </View>
        )}
      />
    </View>
  );
};

export default Contactos;
