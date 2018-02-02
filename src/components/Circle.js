import React from 'react';

class Circle extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.color !== nextProps.color);
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    //const { color } === this.props.color

    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
