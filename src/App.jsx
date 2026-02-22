import React, { useState, useEffect } from 'react';
import { QUESTIONS } from './data/questions';

function App() {
    const [gameState, setGameState] = useState('landing'); // landing, quiz, result
    const [currentIdx, setCurrentIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [audio] = useState(new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3')); // A calm ambient track

    useEffect(() => {
        audio.loop = true;
        audio.volume = 0.1; // Low volume for background

        if (isMusicPlaying) {
            audio.play().catch(err => {
                console.error("Audio play failed:", err);
                setIsMusicPlaying(false);
            });
        } else {
            audio.pause();
        }

        return () => {
            audio.pause();
        };
    }, [isMusicPlaying, audio]);

    const toggleMusic = () => {
        setIsMusicPlaying(!isMusicPlaying);
    };

    const startQuiz = () => {
        setGameState('quiz');
        setCurrentIdx(0);
        setScore(0);
        setAnswers([]);
        setSelectedOption(null);
        setIsAnswered(false);
    };

    const currentQuestion = QUESTIONS[currentIdx];

    const handleSelect = (idx) => {
        if (isAnswered) return;
        setSelectedOption(idx);
    };

    const playSound = (isCorrect) => {
        // Web Speech API for voice feedback
        try {
            const msg = new SpeechSynthesisUtterance();
            msg.text = isCorrect ? "Correct!" : "Wrong answer.";
            msg.lang = 'en-US';
            msg.rate = 1.1; // Slightly faster for responsiveness
            window.speechSynthesis.speak(msg);
        } catch (e) {
            console.error("SpeechSynthesis error:", e);
        }

        // Web Audio API ding for correct answers
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                const audioCtx = new AudioContext();

                // Active resume for suspended contexts
                if (audioCtx.state === 'suspended') {
                    audioCtx.resume();
                }

                const oscillator = audioCtx.createOscillator();
                const gainNode = audioCtx.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioCtx.destination);

                if (isCorrect) {
                    // Success sound: Rising pleasant tone
                    oscillator.type = 'sine';
                    oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
                    oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1); // A5

                    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
                    gainNode.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.05);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);

                    oscillator.start(audioCtx.currentTime);
                    oscillator.stop(audioCtx.currentTime + 0.5);
                } else {
                    // Fail sound: Lower duller tone
                    oscillator.type = 'square';
                    oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.2);

                    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
                    gainNode.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.05);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);

                    oscillator.start(audioCtx.currentTime);
                    oscillator.stop(audioCtx.currentTime + 0.3);
                }
            }
        } catch (e) {
            console.error("Web Audio API error:", e);
        }
    };

    const handleSubmit = () => {
        if (selectedOption === null || isAnswered) return;

        setIsAnswered(true);
        const correct = selectedOption === currentQuestion.answer;
        setScore(prev => correct ? prev + 1 : prev);

        // Play sound/voice feedback
        playSound(correct);

        setAnswers([...answers, {
            questionId: currentQuestion.id,
            selected: selectedOption,
            correct: correct
        }]);
    };

    const nextQuestion = () => {
        if (currentIdx + 1 < QUESTIONS.length) {
            setCurrentIdx(currentIdx + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setGameState('result');
        }
    };

    if (gameState === 'landing') {
        return (
            <div className="glass-card fade-in text-center" style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>English Level Quiz</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.2rem' }}>
                    Test your English proficiency with 300 curated questions based on G-TELP and Military English standards.
                </p>
                <button className="btn btn-primary" onClick={startQuiz}>Start 300 Challenge</button>
            </div>
        );
    }

    if (gameState === 'result') {
        return (
            <div className="glass-card fade-in">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Quiz Accomplished!</h2>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                        {score} / {QUESTIONS.length}
                    </div>
                    <p style={{ color: 'var(--text-muted)' }}>Completion Score: {Math.round((score / QUESTIONS.length) * 100)}%</p>
                </div>
                <button className="btn btn-primary" onClick={startQuiz} style={{ width: '100%' }}>Try Again</button>
            </div>
        );
    }

    return (
        <>
            <div className="glass-card fade-in">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}></div>
                </div>

                <div className="category-badge">{currentQuestion.category}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                    Q{currentIdx + 1}. {currentQuestion.question}
                </h3>

                <div className="options">
                    {currentQuestion.options.map((opt, idx) => {
                        let className = "option-btn";
                        if (isAnswered) {
                            if (idx === currentQuestion.answer) className += " correct";
                            else if (idx === selectedOption) className += " wrong";
                        } else if (idx === selectedOption) {
                            className += " selected";
                        }

                        return (
                            <button key={idx} className={className} onClick={() => handleSelect(idx)} disabled={isAnswered}>
                                {opt}
                            </button>
                        );
                    })}
                </div>

                {!isAnswered ? (
                    <button className="btn btn-primary" onClick={handleSubmit} disabled={selectedOption === null} style={{ width: '100%', marginTop: '1rem' }}>
                        Submit Answer
                    </button>
                ) : (
                    <div className="fade-in">
                        <div className="explanation">
                            <strong>Explantion:</strong> {currentQuestion.explanation}
                        </div>
                        <button className="btn btn-primary" onClick={nextQuestion} style={{ width: '100%', marginTop: '1rem' }}>
                            {currentIdx + 1 === QUESTIONS.length ? 'Show Results' : 'Next Question'}
                        </button>
                    </div>
                )}
            </div>
            <button
                className={`music-toggle ${isMusicPlaying ? 'playing' : ''}`}
                onClick={toggleMusic}
                title="Music Toggle"
            >
                {isMusicPlaying ? '🎵' : '🔇'}
            </button>
        </>
    );
}

export default App;
