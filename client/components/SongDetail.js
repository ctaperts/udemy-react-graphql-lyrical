import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import fetchSongByID from '../queries/fetchSongByID';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) { return <div>Loading...</div> }

    return (
      <div>
        <Link to="/">
          Back
        </Link>
        <h3>Song Detail</h3>
        {song.title}
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id}/>
      </div>
    )
  }
}

export default graphql(fetchSongByID, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
