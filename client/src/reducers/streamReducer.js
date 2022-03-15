import {
	CREATE_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS,
	DELETE_STREAM,
	EDIT_STREAM,
} from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAMS:
			const streamsObj = {};
			action.payload.forEach((element) => {
				streamsObj[element.id] = element;
			});
			return { ...state, ...streamsObj };
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			const newState = { ...state };
			delete newState[action.payload];
			return newState;
		default:
			return state;
	}
};
