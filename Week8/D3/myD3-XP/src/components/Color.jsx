import React from "react";

class Child extends React.Component {
    componentWillUnmount() {
        alert("The Child component is being unmounted.");
      }
    
    render(){
        return <h1>Hello World</h1>
    }
}

class Color extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            color : 'red',
            show : true
        }
    }

    changeColor = () => {
        this.setState({color : 'blue'})
    }

    deleteChild = () => {
        this.setState({ show: false }); 
      };

    // shouldComponentUpdate (nextProps) {
    //     // Rendering the component only if
    //     // passed props value is changed
  
    //     if (nextProps.value !== this.props.value) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }

    componentDidMount() {
        // Set a timer to change the state to "yellow" after 2 seconds
        this.timer = setTimeout(() => {
          this.setState({ color: "yellow" });
        }, 2000);
      }

    componentDidUpdate(prevProps, prevState) {
        console.log("after update");
      }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("in getSnapshotBeforeUpdate");
        return null;
  }

    render(){
        return (
            <>
                <h1>My favorite color is {this.state.color}</h1>
                <button onClick={this.changeColor}>Change the color</button>
                {this.state.show ? <Child/> : null}
                <button onClick={this.deleteChild}>Delete Child</button>
            </>
        )
    }
}

export default Color