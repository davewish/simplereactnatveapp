import React, {useEffect, useState} from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

//Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const DataTable = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // fetching Data from remote API
  useEffect(() => {
    fetch('https://api.jsonbin.io/b/5f306844dddf413f95c0d9f9/8', {
      method: 'GET',
      withCredentials: true,
      headers: {
        'secret-key':
          '$2b$10$HbPophOzGB1kcv3azKUSE.yjSwK6FbqDDNhs7lLglxG1JMLTluYJ6',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => setData(json.contacts))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <SectionList
          sections={data}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      )}
    </View>
  );
};

export default DataTable;
