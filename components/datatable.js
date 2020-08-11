import React, {useEffect, useState} from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {connect} from 'react-redux';
import {getData} from '../actions/index';
import {useLinkProps} from '@react-navigation/native';

//Styles
const mapStateToProps = (state) => {
  return {contacts: state.contacts};
};

const DataTable = ({getData, contacts}) => {
  const [tableHead, setTableHead] = useState([
    'Name',
    'Phone Number',
    'Email',
    'Country',
  ]);

  // fetching Data from remote API
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={contacts} textStyle={styles.text} />
      </Table>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 5, backgroundColor: '#fff'},
  head: {height: 45, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
});

export default connect(mapStateToProps, {getData})(DataTable);
