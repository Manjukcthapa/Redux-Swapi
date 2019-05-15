import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {fetchChars}from "../actions"
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchChars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h1>Character are on the way... they will be here shortly.</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFeaching:state.charsReducer.isFeach
})


export default connect(
  mapStateToProps/* mapStateToProps replaces null here */,
  {
    fetchChars/* action creators go here */

  }
)(CharacterListView);
