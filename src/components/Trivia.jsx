import React from "react";
import { useState, useEffect } from "react";

function Trivia({
	data,
	question,
	wrongAnswers,
	correctAnswer,
	questionNumber,
}) {
	function shuffle(a) {
		return a.sort(() => Math.random() - 0.5);
	}

	wrongAnswers.push(correctAnswer);
	shuffle(wrongAnswers);
	console.log(correctAnswer);
	return (
		<div className='trivia'>
			<div className='question'>{question}</div>
			<div className='answers'>
				{wrongAnswers.map((element, index) => (
					<div className='answer' key={index}>
						{element}
					</div>
				))}
			</div>
		</div>
	);
}

export default Trivia;
