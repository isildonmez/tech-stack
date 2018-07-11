import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// state has keys as libraries and selectedLibraryId
export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer
});
