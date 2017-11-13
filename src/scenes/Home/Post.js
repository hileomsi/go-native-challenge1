import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import theme from '../../common/assets/styles/theme';

const Post = ({ title, author, text }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
    <Text style={styles.content}>{text}</Text>
  </View>
);

Post.propTypes = {
  title:  PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text:   PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: 20, 
    backgroundColor: theme.backgroundDefault, 
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: theme.shadowColor,
    shadowRadius: 5,
    shadowOffset: { x: 0, y: 2 },
    shadowOpacity: 1
  },
  header: {
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.darkPrimaryText,
    marginBottom: 2
  },
  author: {
    color: theme.lightPrimaryText,
    marginBottom: 10
  },
  content: {
    color: theme.primaryText,
    lineHeight: 20
  }
})

export default Post;
