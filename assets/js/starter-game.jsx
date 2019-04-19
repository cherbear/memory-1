import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
}

class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	    currentTiles: [],                                                    // Should hold a maximum of two tiles at any given time
	    availableMatches: ["A", "B", "C", "D", "E", "F", "G", "H"],          // Initial available letter pairs to be matched
	    score: 0,                                                            // Beginning score when starting a game

    };
  }

hiddenValue() {


}

 tileClick(_ev) {
	// When a tile is clicked
	 // Check to see if another tile is also flipped
	 // 	-if yes go check if you have a match
	 // 	-if no add this tile to currentTiles and leave flipped
	 //

      let newTile = this.state.currentTiles.slice();
	 newTile.push(_ev);
	 this.setState({currentTiles: newTile});
	 console.log(newTile);
 }



  render() {

    let A1Tile = <div className="column"><button id = "A1" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let A2Tile = <div className="column"><button id = "A2" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let A3Tile = <div className="column"><button id = "A3" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let A4Tile = <div className="column"><button id = "A4" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let B1Tile = <div className="column"><button id = "B1" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let B2Tile = <div className="column"><button id = "B2" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let B3Tile = <div className="column"><button id = "B3" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let B4Tile = <div className="column"><button id = "B4" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let C1Tile = <div className="column"><button id = "C1" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let C2Tile = <div className="column"><button id = "C2" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let C3Tile = <div className="column"><button id = "C3" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let C4Tile = <div className="column"><button id = "C4" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let D1Tile = <div className="column"><button id = "D1" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let D2Tile = <div className="column"><button id = "D2" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let D3Tile = <div className="column"><button id = "D3" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;
    let D4Tile = <div className="column"><button id = "D4" onClick={this.tileClick.bind(this)}><TileValue value: {this.state.availableMatches}/></button></div>;


    return <div className="container">
		<div className="row">
		  {A1Tile}
	          {B1Tile}
	  	  {C1Tile}
	  	  {D1Tile}
		  </div>
		<div className="row">
          	  {A2Tile}
                  {B2Tile}
                  {C2Tile}
                  {D2Tile}
		  </div>
		<div className="row">
		  {A3Tile}
                  {B3Tile}
                  {C3Tile}
                  {D3Tile}
		  </div>
		<div className="row">
                  {A4Tile}
                  {B4Tile}
                  {C4Tile}
                  {D4Tile}
		  </div>
           </div>;
  }
}

function TileValue(params) {
  let {value} = params;


}

