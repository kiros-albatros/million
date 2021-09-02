import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./App";

const defaultState = {
	data: [],
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case "GET_QUESTIONS":
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
