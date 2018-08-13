import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import query from '../queries/fetchSongs';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }
  render() {
    let list = <div>Loading...</div>
    if (!this.props.data.loading) {
      list = (
        <ul className="collection">
          {this.renderSongs()}
        </ul>
      )
    }
    return (
      <div>
        {list}
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(query)(SongList);
