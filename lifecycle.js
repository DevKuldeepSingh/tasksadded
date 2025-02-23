import React, {Component} from 'react';

import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

class Lifecycle extends Component {
  constructor(props) {
    console.log('constructor called');
    super(props);
    this.state = {
      points: 0,
      color: 'red',
    };
  }

  static getDerivedStateFromProps(props, state) {
    // The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
    // This is the natural place to set the state object based on the initial props.
    // It takes state as an argument, and returns an object with changes to the state.

    console.log('getDerivedStateFromProps->', state);
    return {
      // points: 1,
      // color: 'yellow',
    };
  }

  componentDidMount() {
    // The componentDidMount() method is called after the component is rendered.
    // This is where you run statements that requires that the component is already placed in the DOM.
    // In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.
    // The default value is true.

    console.log('componentDidMount->', this.state.color);
    setTimeout(() => {
      this.setState({color: 'blue'});
    }, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextState);
    // if (prevState !== nextState) return true;
    // return false;
    if (this.state.points > 10) return false;
    // this.setState({color: 'green'});
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // In the getSnapshotBeforeUpdate() method you have access to the props and state
    // before the update, meaning that even after the update, you can check what the values were before the update.

    // If the getSnapshotBeforeUpdate() method is present, you should also include the
    // componentDidUpdate() method, otherwise you will get an error.

    console.log('getSnapshotBeforeUpdate');
    // return value || null // where 'value' is a  valid JavaScript value

    return prevState;
  }

  //   Whatever value is returned from the getSnapshotBeforeUpdate lifecycle method
  // is passed as the third argument to the componentDidUpdate method.

  componentDidUpdate(prevProps, prevState, snapshot) {
    // The componentDidUpdate method is called after the component is updated in the DOM.

    console.log('componentDidUpdate', snapshot);
  }

  componentWillUnmount() {
    // The componentWillUnmount lifecycle method is invoked immediately before a component
    // is unmounted and destroyed. This is the ideal place to perform any necessary cleanup such
    // as clearing up timers, cancelling network requests, or cleaning up any subscriptions that
    // were created in componentDidMount()

    console.log('componentWillUnmount');
  }

  render() {
    console.log('render method-> ', this.state.color);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: this.state.color}}>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            you scored {this.state.points}
          </Text>
          <TouchableOpacity
            style={{backgroundColor: 'white', alignSelf: 'center', padding: 10}}
            onPress={() => {
              this.setState({points: this.state.points + 1});
            }}>
            <Text>counter</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Lifecycle;
