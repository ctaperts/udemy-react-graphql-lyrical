import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchSongByID from '../queries/fetchSongByID';

class SongDetail extends Component {
  renderSong() {
    return (
      <li key={this.props.data.song.id} className="collection-item">
        title: {this.props.data.song.title}
      </li>
    );
  }
  render() {
    let song = <div>Loading...</div>
      if (!this.props.data.loading) {
        song = (
          <ul className="collection">
            {this.renderSong()}
          </ul>
        )
      }
    return (
      <div>
        <Link to="/">
          Back
        </Link>
        <h3>Song Detail</h3>
        {song}
      </div>
    )
  }
}

export default graphql(fetchSongByID, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
