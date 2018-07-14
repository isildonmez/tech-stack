import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
	renderItem({ item }) {
		return <ListItem library={item} />;
	}

	render() {
		return (
			<FlatList
				data={this.props.libraries}
				renderItem={this.renderItem}
				keyExtractor={(library) => library.id}
			/>
		);
	}
}

// If an object is returned from this method
// then this object will show up as props to the LibraryList component
const mapStateToProps = state => {
	return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
