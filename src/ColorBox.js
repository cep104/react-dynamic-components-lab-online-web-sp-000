import React, { Component } from "react";

export default class ColorBox extends Component {
  state = {
    todos: [],
  };

  render() {
    //basecase
    if (this.props.opacity >= 0.2) {
      //as long as opacity is greather than or equal to .2
      return (
        <div className="color-box" style={{ opacity: this.props.opacity }}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      );
    } else {
      //as soon as it doesn't meet the condition exit (return null)
      return null;
    }
  }
}

//// Alternative solution:

// export default class ColorBox extends Component {

//   render() {
//     return (
//       <div className="color-box" style={{opacity: this.props.opacity}}>
//         {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
//       </div>
//     )
//   }

// }
