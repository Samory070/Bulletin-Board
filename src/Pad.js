import React from 'react'
import './App.css';
import Draggable from 'draggable'

class Pad extends React.Component {
  edit() {
    alert('edit')
  }
  remove() {
    alert('remove')
  }
  render() {
    return(
      <div className="note">
        <p></p>
        <span>
          <button onClick={this.edit}>EDIT</button>
          <button onClick={this.remove}>X</button>
        </span>
      </div>
    )
  }
}

export default Pad
