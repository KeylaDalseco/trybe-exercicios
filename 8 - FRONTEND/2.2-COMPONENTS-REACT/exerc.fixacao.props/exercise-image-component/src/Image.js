import { Component } from "react"; // outra forma de fazer

// class Image extends React.Component {
 // modo tradicional de fazer
// }

class Image extends Component {  // outra forma de fazer
  render () {
    const { source, alternativeText } = this.props;
    console.log(alternativeText);
    return <img src={ source } alt= { alternativeText }/>
  }
}

export default Image;