import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  Animated,
} from 'react-native';

export default class FadeInOut extends Component {
  constructor(props){
    super(props);

    this.state={
      view : this.props.children,
      opacity: new Animated.Value(this.props.isVisible ? 1 : 0);
    }
  };

  _StartFadeInOut() {
    const isVisible = this.props.isVisible;

    if (!isVisible) {
      this._insertView
      Animated.timing(this.state.opacity, {
        toValue: 0,
      }).start(this._removeView);
    }

    if (isVisible) {      
      Animated.timing(this.state.opacity, {
        toValue: 1
      }).start();
    }
  }

   _insertView() {
    this.setState({ view: this.props.children });
   }
   _removeView() {
     this.setState({ view: null });
   }

  render(){
    return(

    )
};

  propType: {
    IsVisible : PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    style: View.propTypes.style,
  }
}
