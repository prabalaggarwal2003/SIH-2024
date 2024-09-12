import React, { useState } from "react";
import "./spin.css";

function Spin() {
  const [angle, setAngle] = useState(0); // Track wheel's rotation angle
  const [spinning, setSpinning] = useState(false); // Track spinning state
  const [selectedPrize, setSelectedPrize] = useState(""); // Track the prize after spin
  const [showPrize, setShowPrize] = useState(false); // Toggle to show prize
  const [showQuiz, setShowQuiz] = useState(false); // Toggle to show quiz
  const [quizComplete, setQuizComplete] = useState(false); // Track if the quiz is completed
  const [score, setScore] = useState(0); // Track correct answers
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question
  const [selectedAnswer, setSelectedAnswer] = useState(""); // Track selected answer
  const [feedback, setFeedback] = useState(""); // Feedback for each question
  const [showWheelAgain, setShowWheelAgain] = useState(false); // Track if wheel is to be shown again

  // List of prizes (corresponding to wheel segments)
  const prizes = ["Articles", "History", "Preamble", "Rights", "Duties", "Amendments", "Emergency", "Reservations"];
  const segments = prizes.length;

  // Quiz questions specific to certain prizes
  const prizeSpecificQuestions = {
    "Articles": [
      {
        question: "What is 25 + 25?",
        options: ["40", "45", "50", "60"],
        correctAnswer: "50",
      },
      {
        question: "How many states are there in the USA?",
        options: ["48", "49", "50", "51"],
        correctAnswer: "50",
      },
    ],
    "History": [
      {
        question: "What is the fastest car in the world?",
        options: ["Bugatti", "Tesla", "Ferrari", "Lamborghini"],
        correctAnswer: "Bugatti",
      },
      {
        question: "How many wheels does a car have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
      },
    ],
    "Preamble": [
      {
        question: "What is RAM in a laptop?",
        options: ["Random Access Memory", "Read All Memory", "Run All Memory", "Random All Memory"],
        correctAnswer: "Random Access Memory",
      },
      {
        question: "Which company makes the MacBook?",
        options: ["Microsoft", "Apple", "Google", "Dell"],
        correctAnswer: "Apple",
      },
    ],
    "Rights": [
      {
        question: "What is RAM in a laptop?",
        options: ["Random Access Memory", "Read All Memory", "Run All Memory", "Random All Memory"],
        correctAnswer: "Random Access Memory",
      },
      {
        question: "Which company makes the MacBook?",
        options: ["Microsoft", "Apple", "Google", "Dell"],
        correctAnswer: "Apple",
      },
    ],
    "Duties": [
      {
        question: "What is RAM in a laptop?",
        options: ["Random Access Memory", "Read All Memory", "Run All Memory", "Random All Memory"],
        correctAnswer: "Random Access Memory",
      },
      {
        question: "Which company makes the MacBook?",
        options: ["Microsoft", "Apple", "Google", "Dell"],
        correctAnswer: "Apple",
      },
    ],
    "Amendments": [
      {
        question: "What is RAM in a laptop?",
        options: ["Random Access Memory", "Read All Memory", "Run All Memory", "Random All Memory"],
        correctAnswer: "Random Access Memory",
      },
      {
        question: "Which company makes the MacBook?",
        options: ["Microsoft", "Apple", "Google", "Dell"],
        correctAnswer: "Apple",
      },
    ],
    "Emergency": [
      {
        question: "What is RAM in a laptop?",
        options: ["Random Access Memory", "Read All Memory", "Run All Memory", "Random All Memory"],
        correctAnswer: "Random Access Memory",
      },
      {
        question: "Which company makes the MacBook?",
        options: ["Microsoft", "Apple", "Google", "Dell"],
        correctAnswer: "Apple",
      },
    ],
    "Reservations": [
      {
        question: "What is RAM in a laptop?",
        options: ["Random Access Memory", "Read All Memory", "Run All Memory", "Random All Memory"],
        correctAnswer: "Random Access Memory",
      },
      {
        question: "Which company makes the MacBook?",
        options: ["Microsoft", "Apple", "Google", "Dell"],
        correctAnswer: "Apple",
      },
    ],
  };

  // Handle spinning the wheel
  const spinWheel = () => {
    if (!spinning) {
      setSpinning(true); // Start spinning
      setQuizComplete(false); // Reset quiz completion
      setShowQuiz(false); // Reset quiz display
      setShowPrize(false); // Hide prize display initially
      setShowWheelAgain(false); // Hide the wheel again button

      // Random angle between 3600 and 3960 degrees for a smooth, long spin
      const newAngle = Math.floor(3600 + Math.random() * 360);
      setAngle((prevAngle) => prevAngle + newAngle); // Always spin in the same direction

      // Simulate the spinning duration (3 seconds for a faster spin)
      setTimeout(() => {
        const finalAngle = newAngle % 360; // Normalize the final angle (between 0 and 360 degrees)
        const segmentAngle = 360 / segments; // Each segment covers this many degrees
        const selectedIndex = Math.floor(finalAngle / segmentAngle); // Determine which prize

        const prize = prizes[segments - 1 - selectedIndex];
        setSelectedPrize(prize);

        setSpinning(false); // Stop spinning
        setShowPrize(true); // Show prize

        // Delay displaying the quiz if applicable
        if (prizeSpecificQuestions[prize]) {
          setTimeout(() => setShowQuiz(true), 1000); // Show quiz after 2 seconds
        } else {
          setShowWheelAgain(true); // Show wheel again button for non-quiz prizes
        }
      }, 3000); // 3-second spin for a faster experience
    }
  };

  // Handle answer selection in the quiz
  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);

    // Check if selected answer is correct
    if (answer === prizeSpecificQuestions[selectedPrize][currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("Correct! 🎉");
    } else {
      setFeedback("Wrong! ❌");
    }
  };

  // Handle moving to the next question
  const handleNextQuestion = () => {
    setSelectedAnswer(""); // Clear the selected answer for the next question
    setFeedback(""); // Clear feedback

    // Check if we have reached the end of the quiz
    if (currentQuestionIndex === prizeSpecificQuestions[selectedPrize].length - 1) {
      setQuizComplete(true); // Mark the quiz as complete
      setShowWheelAgain(true); // Show wheel again button after quiz completes
    } else {
      // Move to the next question
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Reset the game state to allow the user to spin the wheel again
  const resetGame = () => {
    setSelectedPrize("");
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setFeedback("");
    setShowPrize(false);
    setShowQuiz(false);
    setQuizComplete(false);
    setShowWheelAgain(false);
  };

  return (
    <div className="App">
      <div className="wheel-container">
        <div className="wheel" style={{ transform: `rotate(${angle}deg)` }}>
          {prizes.map((prize, index) => (
            <div key={index} className="segment">
              {prize}
            </div>
          ))}
        </div>
      </div>
      <div className="prize-display">
        {showPrize && !spinning && (
          <div>
            Your Topic is: <strong>{selectedPrize}</strong> 
          </div>
        )}
      </div>
      {!spinning && !quizComplete && selectedPrize && showQuiz && (
        <div className="quiz-container">
          <h3 style={{textAlign:"center"}}>
            Question {currentQuestionIndex + 1}/{prizeSpecificQuestions[selectedPrize].length}
          </h3>
          <p style={{textAlign:"center"}}>{prizeSpecificQuestions[selectedPrize][currentQuestionIndex].question}</p>
          <ul>
            {prizeSpecificQuestions[selectedPrize][currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <button className="btn2"
                  onClick={() => handleAnswerSelection(option)}
                  disabled={!!selectedAnswer} // Disable after selecting an answer
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          {feedback && <p>{feedback}</p>}
          {selectedAnswer && (
            <button className="btn" onClick={handleNextQuestion}>Next Question</button>
          )}
        </div>
      )}
      {quizComplete && (
        <div className="quiz-complete">
          <h2>Quiz Complete!</h2>
          <p>
            You got {score} out of {prizeSpecificQuestions[selectedPrize].length} correct!
          </p>
        </div>
      )}
      {!spinning && (showQuiz || quizComplete || showPrize) && (
        <button className="btn" onClick={resetGame}>Play Again</button>
      )}
      {!spinning && !selectedPrize && !showQuiz && !quizComplete && !showPrize && (
        <button onClick={spinWheel} disabled={spinning} className="btn">
          {spinning ? "Spinning..." : "Spin the Wheel"}
        </button>
      )}
    </div>
  );
}

export default Spin;
