import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PropsTypes from 'prop-types';

export const Container = ({ children }) => (
  <ScrollView style={styles.container}>{children}</ScrollView>
);

Container.propTypes = {
  children: PropsTypes.any
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});