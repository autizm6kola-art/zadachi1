import React, { useEffect } from "react";
import '../styles/taskItem.css';

function Task({ task, onCorrect, alreadyCorrect }) {
  const [answer, setAnswer] = React.useState('');
  const [isCorrect, setIsCorrect] = React.useState(null);

  useEffect(() => {
    if (alreadyCorrect) {
      setIsCorrect(true);
    }
  }, [alreadyCorrect]);

  const handleChange = (e) => {
    setAnswer(e.target.value);
    setIsCorrect(null);
  };

  const checkAnswer = () => {
    if (answer.trim().toLowerCase() === task.correctAnswer.toLowerCase()) {
      if (!isCorrect) {
        setIsCorrect(true);
        onCorrect(task.id);
      }
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="task-item" style={{ marginBottom: '20px' }}>
      <p><strong>Задача {task.id}</strong></p>
      <p>{task.text}</p>

      <input
        type="text"
        value={answer}
        onChange={handleChange}
        placeholder="Введите ответ"
        disabled={isCorrect === true}
        className={
          isCorrect === null ? '' : isCorrect ? 'correct' : 'incorrect'
        }
      />

      <button
        onClick={checkAnswer}
        disabled={isCorrect === true}
        className="check-button"
      >
        Проверить
      </button>
    </div>
  );
}

export default Task;
