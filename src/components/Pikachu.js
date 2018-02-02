import React from 'react';

class Pikachu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      size: 100
    };
  }

  resizePikachu = () => {
    const pikachu = document.getElementById("pikachu");
    pikachu.height = this.state.size;
    pikachu.width = this.state.size;
  }

  makeBigger = () => {
    this.setState({
      size: this.state.size + 10
    });
  }

  makeSmaller = () => {
    this.setState({
      size: this.state.size - 10
    });
  }

  componentDidUpdate() {
    //useful for changing things not related to class or outside the react dom.
    //okay the state of Pikachu got updated...
    //now do it to the actual picture of pikachu...which
    //was outside of the react dom global...//see public/index.html;
    this.resizePikachu();
  }

  render() {
    return (
      <div>
        <button onClick={this.makeBigger}>Bigger!</button>
        <button onClick={this.makeSmaller}>Smaller!</button>
      </div>
    )
  }
}

export default Pikachu;
