import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id}>
          {song.title}
        </li>
      );
    });
  }
  render() {
    let list = <div>Loading...</div>
    if (!this.props.data.loading) {
      list = (
        <ul>
          {this.renderSongs()}
        </ul>
      )
    }
    return (
      <div>
        {list}
      </div>
    );
  }
}

const query = gql`
{
  songs {
    id
    title
  }
}
`;

export default graphql(query)(SongList);
