import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import theme from '../assets/styles/theme';

export const Page = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColorPage
  },
});

export default Page;