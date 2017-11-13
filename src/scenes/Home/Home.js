import React, { Component } from 'react';

import { Page, Header, Container } from '../../common/components';
import Post from './Post';

class Home extends Component {
  state = {
    posts: [
      { 
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Hiléo Andersson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisi vitae vestibulum pharetra. Nam pellentesque et massa ut varius. In in lobortis leo. Quisque massa leo, ultrices sed vehicula ultricies, consequat eget libero.'
      },
      { 
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Hiléo Andersson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisi vitae vestibulum pharetra. Nam pellentesque et massa ut varius. In in lobortis leo. Quisque massa leo, ultrices sed vehicula ultricies, consequat eget libero.'
      },
      { 
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Hiléo Andersson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra nisi vitae vestibulum pharetra. Nam pellentesque et massa ut varius. In in lobortis leo. Quisque massa leo, ultrices sed vehicula ultricies, consequat eget libero.'
      }
    ]
  }

  render = () => (
    <Page>
      <Header title='Go Native' />
      <Container>
        <For each='post' of={ this.state.posts }>
          <Post key={post.id} title={post.title} author={post.author} text={post.text} />
        </For>
      </Container>
    </Page>
  )
}

export default Home;