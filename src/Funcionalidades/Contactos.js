import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import Contacts from 'react-native-contacts';

const ContactListScreen = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    Contacts.getAll()
      .then(contactsData => {
        const emergencyContacts = contactsData.filter(contact => contact.isDefaultEmergency);
        setContacts(emergencyContacts);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.recordID}
        renderItem={({ item }) => (
          <View>
            <Text>{item.displayName}</Text>
            <Text>{item.phoneNumbers[0].number}</Text>
            {item.isDefaultEmergency && (
              <Image source={require('./emergency-icon.png')} style={{ width: 20, height: 20 }} />
            )}
          </View>
        )}
      />
    </View>
  );
};
export default ContactListScreen;
