import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import theme from "../assets/styles/theme";

export const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    height: 70,
    backgroundColor: theme.backgroundDefault,
    shadowColor: theme.shadowColor,
    shadowRadius: 5,
    shadowOffset: { x: 0, y: 2 },
    shadowOpacity: 1
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.darkPrimaryText
  }
});