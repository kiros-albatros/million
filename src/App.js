import "./App.scss";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moneyPyramid from "./moneyPyramid";
import Trivia from "./components/Trivia";

function App() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data);

	const [questionNumber, setQuestionNumber] = useState(0);
	const [stop, setStop] = useState(false);

	useEffect(() => {
		const getQuestions = async () => {
			const questionsFromServer = await fetchQuestions();
			dispatch({
				type: "GET_QUESTIONS",
				payload: questionsFromServer.results,
			});
		};
		getQuestions();
	}, []);

	// Запрос к серверу
	const fetchQuestions = async () => {
		const response = await fetch("https://opentdb.com/api.php?amount=10");
		const serverData = await response.json();
		return serverData;
	};

	return (
		<div className='App'>
			<div className='main'>
				<div className='top'>
					<div className='timer'>30</div>
				</div>
				<div className='bottom'>
					{data.length > 0 ? (
						<Trivia
							data={data}
							question={data[questionNumber].question}
							wrongAnswers={
								data[questionNumber].incorrect_answers
							}
							correctAnswer={data[questionNumber].correct_answer}
							questionNumber={questionNumber}
						/>
					) : (
						""
					)}
				</div>
			</div>
			<div className='pyramid'>
				<ul className='pyramid__list'>
					{moneyPyramid.map((item, index) => (
						<li
							key={index}
							className={
								item.id === questionNumber
									? "pyramid__item active"
									: "pyramid__item"
							}
						>
							<span className='item__number'>{item.id}</span>
							<span className='item__amount'>{item.amount}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
