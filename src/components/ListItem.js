import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  
  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// ownProps are the props that were passed to the component we're wrapping (which is LisItem)
// ownProps is exactly equal to the this.props in the ListItem component

// whenever application state changes, mapStateToProps function will rerun,
// pass in a new set of props to our Component which causes our component to rerender

// whenever we call an action creator, that dispatches action, reducers rerun,
// state is recalculated, state flows into mapStateToProps,
// new props show up inside the component, and our application is rerendered.
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

// 2nd argument of connect helper method (which is actions) takes all actions (one in this case)
// and passes all to component as props
// If we don't have mapStateToProps method then we have to pass null here.
export default connect(mapStateToProps, actions)(ListItem);
