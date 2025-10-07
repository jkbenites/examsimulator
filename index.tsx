
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI, Type } from "@google/genai";
import { examSuite, Simulacrum } from './examData';

// Interfaces for structured data
interface ChapterStats {
    name: string;
    score: number;
    total: number;
    percentage: number;
}
interface ExamResult {
    id: number; // Unique ID for each attempt
    simulacrumId: string;
    simulacrumTitle: string;
    score: number;
    totalQuestions: number;
    percentage: number;
    date: string;
    chapterStats: ChapterStats[];
    userAnswers: { [key: number]: number };
    timeTakenSeconds: number;
}

interface AnalysisPayload {
    generalStatus: string;
    feedbackPerQuestion: {
        questionIndex: number;
        feedback: string;
        questionText: string;
    }[];
}

// Fix: Define formatTime function
const formatTime = (totalSeconds: number): string => {
    if (isNaN(totalSeconds) || totalSeconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const App = () => {
    const [gameState, setGameState] = useState('start'); // 'start', 'exam', 'submitting', 'results', 'analysisDetail', 'history'
    const [selectedSimulacrum, setSelectedSimulacrum] = useState<Simulacrum | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
    const [timeLeft, setTimeLeft] = useState(0);
    const [isGeneratingAnalysis, setIsGeneratingAnalysis] = useState(false);
    const [analysisResult, setAnalysisResult] = useState<AnalysisPayload | null>(null);
    const [analysisError, setAnalysisError] = useState('');
    const [savedQuestions, setSavedQuestions] = useState<Set<number>>(new Set());
    const [examHistory, setExamHistory] = useState<ExamResult[]>([]);
    const [completedExams, setCompletedExams] = useState<Set<string>>(new Set());
    const [currentAnalysisIndex, setCurrentAnalysisIndex] = useState(0);

    // Load history, completed exams, and any ongoing exam from localStorage on initial render
    useEffect(() => {
        try {
            const storedHistory = localStorage.getItem('examHistory_v2');
            if (storedHistory) setExamHistory(JSON.parse(storedHistory));
            
            const storedCompleted = localStorage.getItem('completedExams_v2');
            if (storedCompleted) setCompletedExams(new Set(JSON.parse(storedCompleted)));

            const storedExamState = localStorage.getItem('currentExamState');
            if (storedExamState) {
                const resumedState = JSON.parse(storedExamState);
                const simulacrum = examSuite.simulacra.find(s => s.id === resumedState.simulacrumId);
                if (simulacrum) {
                    setSelectedSimulacrum(simulacrum);
                    setCurrentQuestionIndex(resumedState.currentQuestionIndex);
                    setUserAnswers(resumedState.userAnswers);
                    setSavedQuestions(new Set(resumedState.savedQuestions));
                    setTimeLeft(resumedState.timeLeft);
                    setGameState('exam');
                } else {
                    localStorage.removeItem('currentExamState');
                }
            }
        } catch (error) {
            console.error("Failed to parse stored data:", error);
            localStorage.removeItem('examHistory_v2');
            localStorage.removeItem('completedExams_v2');
            localStorage.removeItem('currentExamState');
        }
    }, []);

    // Save exam state to localStorage during an exam
    useEffect(() => {
        if (gameState === 'exam' && selectedSimulacrum) {
            const examState = {
                simulacrumId: selectedSimulacrum.id,
                currentQuestionIndex,
                userAnswers,
                savedQuestions: Array.from(savedQuestions),
                timeLeft,
            };
            localStorage.setItem('currentExamState', JSON.stringify(examState));
        }
    }, [gameState, selectedSimulacrum, currentQuestionIndex, userAnswers, savedQuestions, timeLeft]);
    
    // Exam Timer Logic
    useEffect(() => {
        if (gameState !== 'exam' || timeLeft <= 0) {
            if (gameState === 'exam' && timeLeft <= 0) {
                submitExam();
            }
            return;
        }
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [gameState, timeLeft]);
    
    // Submission Loading Simulation
    useEffect(() => {
        if (gameState === 'submitting') {
            const timer = setTimeout(() => setGameState('results'), 1500);
            return () => clearTimeout(timer);
        }
    }, [gameState]);

    const goToHome = useCallback(() => {
        setSelectedSimulacrum(null);
        setGameState('start');
        localStorage.removeItem('currentExamState');
    }, []);

    const handleStartExam = (simulacrum: Simulacrum) => {
        setSelectedSimulacrum(simulacrum);
        setTimeLeft(examSuite.timeLimitMinutes * 60);
        setCurrentQuestionIndex(0);
        setUserAnswers({});
        setAnalysisResult(null);
        setAnalysisError('');
        setSavedQuestions(new Set());
        setGameState('exam');
    };
    
    const handleCancelExam = useCallback(() => {
        if (window.confirm("¿Estás seguro de que quieres salir? Tu progreso en este intento no se guardará.")) {
            goToHome();
        }
    }, [goToHome]);

    const handleAnswerSelect = useCallback((optionIndex: number) => {
        setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: optionIndex }));
    }, [currentQuestionIndex]);
    
    const handleSaveQuestion = useCallback((index: number) => {
        setSavedQuestions(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    }, []);

    const goToQuestion = useCallback((index: number) => {
        if (selectedSimulacrum && index >= 0 && index < selectedSimulacrum.questions.length) {
            setCurrentQuestionIndex(index);
        }
    }, [selectedSimulacrum]);
    
    const goToAnalysisQuestion = (index: number) => {
        if (analysisResult && index >= 0 && index < analysisResult.feedbackPerQuestion.length) {
            setCurrentAnalysisIndex(index);
        }
    };
    
    const score = useMemo(() => {
        if (!selectedSimulacrum) return 0;
        return selectedSimulacrum.questions.reduce((total, q, index) => 
            userAnswers[index] === q.correctAnswerIndex ? total + 1 : total, 0);
    }, [userAnswers, selectedSimulacrum]);

    const submitExam = useCallback(() => {
        if (!selectedSimulacrum) {
            console.error("submitExam called without a selected simulacrum.");
            return;
        }
    
        try {
            const percentage = (score / selectedSimulacrum.questions.length) * 100;
    
            const chapterTotals: { [key: string]: number } = {};
            const chapterCorrect: { [key: string]: number } = {};
            selectedSimulacrum.questions.forEach((q, index) => {
                if (!chapterTotals[q.chapter]) {
                    chapterTotals[q.chapter] = 0;
                    chapterCorrect[q.chapter] = 0;
                }
                chapterTotals[q.chapter]++;
                if (userAnswers[index] === q.correctAnswerIndex) {
                    chapterCorrect[q.chapter]++;
                }
            });
    
            const chapterStats: ChapterStats[] = Object.keys(chapterTotals).map(chapter => ({
                name: chapter,
                score: chapterCorrect[chapter],
                total: chapterTotals[chapter],
                percentage: (chapterCorrect[chapter] / chapterTotals[chapter]) * 100,
            }));
            
            const timeTakenSeconds = (examSuite.timeLimitMinutes * 60) - timeLeft;
    
            const newResult: ExamResult = {
                id: Date.now(),
                simulacrumId: selectedSimulacrum.id,
                simulacrumTitle: selectedSimulacrum.title,
                score,
                totalQuestions: selectedSimulacrum.questions.length,
                percentage,
                date: new Date().toLocaleString('es-ES'),
                chapterStats,
                userAnswers,
                timeTakenSeconds
            };
    
            const updatedHistory = [newResult, ...examHistory];
            setExamHistory(updatedHistory);
            localStorage.setItem('examHistory_v2', JSON.stringify(updatedHistory));
    
            const newCompleted = new Set(completedExams);
            newCompleted.add(selectedSimulacrum.id);
            setCompletedExams(newCompleted);
            localStorage.setItem('completedExams_v2', JSON.stringify(Array.from(newCompleted)));
            
            localStorage.removeItem('currentExamState');
            setGameState('submitting');
        } catch (error) {
            console.error("An error occurred during exam submission:", error);
        }
    }, [selectedSimulacrum, score, userAnswers, timeLeft, examHistory, completedExams]);

    const handleSubmitAttempt = useCallback(() => {
        if (!selectedSimulacrum) return;
    
        const answeredCount = Object.keys(userAnswers).length;
        const totalQuestions = selectedSimulacrum.questions.length;
        const unansweredCount = totalQuestions - answeredCount;
    
        if (unansweredCount > 0) {
            const confirmationMessage = `Tienes ${unansweredCount} pregunta(s) sin responder. ¿Estás seguro de que deseas finalizar y enviar el examen?`;
            if (window.confirm(confirmationMessage)) {
                submitExam();
            }
        } else {
            submitExam();
        }
    }, [selectedSimulacrum, userAnswers, submitExam]);
    
    // Keyboard shortcuts handler
    useEffect(() => {
        if (gameState !== 'exam') return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (!selectedSimulacrum) return;

            if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
                return;
            }

            if (event.altKey && event.key === 'ArrowRight') {
                event.preventDefault();
                const isLastQuestion = currentQuestionIndex === selectedSimulacrum.questions.length - 1;
                if (!isLastQuestion) {
                    goToQuestion(currentQuestionIndex + 1);
                }
            } else if (event.altKey && event.key === 'ArrowLeft') {
                event.preventDefault();
                goToQuestion(currentQuestionIndex - 1);
            }
            else if (event.altKey && (event.key === 'm' || event.key === 'M')) {
                event.preventDefault();
                handleSaveQuestion(currentQuestionIndex);
            }
            else if (['1', '2', '3', '4', '5'].includes(event.key)) {
                event.preventDefault();
                const optionIndex = parseInt(event.key, 10) - 1;
                if (selectedSimulacrum.questions[currentQuestionIndex] && optionIndex < selectedSimulacrum.questions[currentQuestionIndex].options.length) {
                    handleAnswerSelect(optionIndex);
                }
            }
            else if (event.ctrlKey && event.key === 'Enter') {
                event.preventDefault();
                handleSubmitAttempt();
            }
            else if (event.key === 'Escape') {
                event.preventDefault();
                handleCancelExam();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [gameState, selectedSimulacrum, currentQuestionIndex, goToQuestion, handleSaveQuestion, handleAnswerSelect, handleSubmitAttempt, handleCancelExam]);


    const handleGenerateAnalysis = useCallback(async () => {
        if (!selectedSimulacrum) return;
        setIsGeneratingAnalysis(true);
        setAnalysisResult(null);
        setAnalysisError('');

        const prompt = `
            Analiza el siguiente examen de práctica que un estudiante acaba de completar.
            Tu objetivo es actuar como un tutor experto.

            Debes devolver un objeto JSON con la siguiente estructura:
            1.  Un campo "generalStatus" (string, máximo 200 palabras): Proporciona un resumen del desempeño del estudiante, identificando las áreas conceptuales clave (basadas en los capítulos) donde tuvo más dificultades.
            2.  Un campo "feedbackPerQuestion" (array de objetos): Para CADA una de las ${selectedSimulacrum.questions.length} preguntas, crea un objeto con:
                a. "questionIndex" (number): El índice de la pregunta (basado en 0).
                b. "questionText" (string): El texto completo de la pregunta.
                c. "feedback" (string): Un análisis detallado. Si la respuesta fue correcta, refuerza positivamente el concepto. Si fue incorrecta, explica clara y constructivamente por qué la opción elegida por el usuario es incorrecta y por qué la respuesta correcta es la adecuada.

            Aquí están los datos del examen "${selectedSimulacrum.title}":
            ${selectedSimulacrum.questions.map((q, index) => `
                ---
                Pregunta (índice ${index}):
                Texto: "${q.questionText}"
                Capítulo: "${q.chapter}"
                Opciones: ${JSON.stringify(q.options)}
                Respuesta del usuario: "${q.options[userAnswers[index]] ?? 'No contestada'}"
                Respuesta correcta: "${q.options[q.correctAnswerIndex]}"
                ---
            `).join('\n')}

            Proporciona únicamente el objeto JSON como respuesta.
        `;

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            generalStatus: { type: Type.STRING },
                            feedbackPerQuestion: {
                                type: Type.ARRAY,
                                items: {
                                    type: Type.OBJECT,
                                    properties: {
                                        questionIndex: { type: Type.INTEGER },
                                        questionText: { type: Type.STRING },
                                        feedback: { type: Type.STRING }
                                    },
                                    required: ['questionIndex', 'questionText', 'feedback']
                                }
                            }
                        },
                        required: ['generalStatus', 'feedbackPerQuestion']
                    },
                },
            });
            setAnalysisResult(JSON.parse(response.text));
        } catch (error) {
            console.error("Error generating analysis:", error);
            setAnalysisError("Hubo un error al generar el análisis. Por favor, inténtalo de nuevo más tarde.");
        } finally {
            setIsGeneratingAnalysis(false);
        }
    }, [userAnswers, selectedSimulacrum]);

    const PreparednessChart = ({ data }: { data: { passedPercent: number; failedPercent: number; pendingPercent: number; overallProgress: number; failedChapters: string[]; pendingChapters: string[] } }) => {
        if (examHistory.length === 0) return <div className="chart-placeholder">Completa al menos un examen para ver tu preparación.</div>;
    
        const { passedPercent, failedPercent, pendingPercent, overallProgress, failedChapters, pendingChapters } = data;
        const showLegend = failedChapters.length > 0 || pendingChapters.length > 0;
    
        return (
            <div className="preparedness-chart-container">
                <div className="progress-bar" role="progressbar" aria-valuenow={overallProgress} aria-valuemin={0} aria-valuemax={100} title={`Nivel de maestría: ${overallProgress.toFixed(0)}%`}>
                    <div className="progress-bar__segment progress-bar__segment--passed" style={{ width: `${passedPercent}%` }}></div>
                    <div className="progress-bar__segment progress-bar__segment--failed" style={{ width: `${failedPercent}%` }}></div>
                    <div className="progress-bar__segment progress-bar__segment--pending" style={{ width: `${pendingPercent}%` }}></div>
                    <span className="progress-bar__label">{overallProgress.toFixed(0)}% Dominado</span>
                </div>
                {showLegend ? (
                    <div className="preparedness-chart-legend">
                        {failedChapters.length > 0 && (
                            <div className="legend-column">
                                <h4 className="legend-title">Áreas a Mejorar</h4>
                                {failedChapters.map(name => (
                                    <div key={name} className="legend-item">
                                        <span className="legend-item__color-box" style={{ backgroundColor: 'var(--incorrect-color)' }}></span>
                                        <span className="legend-item__label">{name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                        {pendingChapters.length > 0 && (
                            <div className="legend-column">
                                <h4 className="legend-title">Capítulos Pendientes</h4>
                                {pendingChapters.map(name => (
                                    <div key={name} className="legend-item">
                                        <span className="legend-item__color-box" style={{ backgroundColor: 'var(--gray-color)' }}></span>
                                        <span className="legend-item__label">{name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <p className="congrats-message">¡Felicidades! Has superado la meta en todas las áreas que has practicado.</p>
                )}
            </div>
        );
    };

    const StartScreen = () => {
        const nextExam = useMemo(() => {
            const firstUncompleted = examSuite.simulacra.find(s => !completedExams.has(s.id));
            return firstUncompleted || examSuite.simulacra[0]; // Loop back to the first if all are done
        }, [completedExams]);
        
        const overallChapterStats = useMemo(() => {
            if (examHistory.length === 0) return [];
            const stats: { [chapter: string]: { totalCorrect: number, totalQuestions: number } } = {};
            
            examHistory.forEach(result => {
                result.chapterStats.forEach(stat => {
                    if (!stats[stat.name]) {
                         stats[stat.name] = { totalCorrect: 0, totalQuestions: 0 };
                    }
                    stats[stat.name].totalCorrect += stat.score;
                    stats[stat.name].totalQuestions += stat.total;
                });
            });

            return Object.entries(stats)
                .map(([name, data]) => ({
                    name,
                    percentage: data.totalQuestions > 0 ? (data.totalCorrect / data.totalQuestions) * 100 : 0
                }));
        }, [examHistory]);

        const chartData = useMemo(() => {
            const allChaptersSet = new Set<string>();
            examSuite.simulacra.forEach(sim => sim.questions.forEach(q => allChaptersSet.add(q.chapter)));
            const allChapters = Array.from(allChaptersSet).sort((a, b) => a.localeCompare(b));
    
        const passedChapters: string[] = [];
        const failedChapters: string[] = [];
        const pendingChapters: string[] = [];

        allChapters.forEach(chapterName => {
            const stat = overallChapterStats.find(s => s.name === chapterName);
                if (stat !== undefined) { // Chapter has been attempted
                if (stat.percentage >= examSuite.passingScorePercentage) {
                    passedChapters.push(chapterName);
                } else {
                    failedChapters.push(chapterName);
                }
            } else { // Chapter has not been attempted
                pendingChapters.push(chapterName);
            }
        });

        const totalChapters = allChapters.length;
        if (totalChapters === 0) {
            return { passedPercent: 0, failedPercent: 0, pendingPercent: 100, overallProgress: 0, failedChapters: [], pendingChapters: allChapters };
        }

        const passedPercent = (passedChapters.length / totalChapters) * 100;
        const failedPercent = (failedChapters.length / totalChapters) * 100;
        const pendingPercent = (pendingChapters.length / totalChapters) * 100;

        return {
            passedPercent,
            failedPercent,
            pendingPercent,
            overallProgress: passedPercent, // The "progress" is the percentage of chapters mastered
            failedChapters,
            pendingChapters
        };
        }, [overallChapterStats]);


        return (
            <div className="start-screen">
                <header className="start-header">
                    <h1>{examSuite.suiteTitle}</h1>
                    <p>Prepárate para el éxito con nuestras herramientas de estudio avanzadas.</p>
                </header>

                {examHistory.length > 0 && (
                    <div className="preparedness-section">
                        <h2>Tu Preparación Actual</h2>
                        <p>Un resumen de tu dominio sobre los capítulos del examen. ¡Concéntrate en las áreas a mejorar!</p>
                        <PreparednessChart data={chartData} />
                    </div>
                )}

                <div className="exam-selection">
                    <h2>Comienza tu Práctica</h2>
                    <div className="next-exam-section">
                        <p>Tu siguiente desafío recomendado es:</p>
                        <h3>{nextExam.title}</h3>
                        <button className="btn btn-primary btn-large" onClick={() => handleStartExam(nextExam)}>
                            {completedExams.has(nextExam.id) ? 'Repetir Examen' : 'Comenzar Examen'}
                        </button>
                    </div>
                    
                    <div className="all-exams-list">
                        <h4>O elige un examen específico para practicar:</h4>
                        {examSuite.simulacra.map(sim => (
                            <div key={sim.id} className="exam-card">
                                <div>
                                    <h3>{sim.title}</h3>
                                    <p>{sim.questions.length} preguntas | {examSuite.timeLimitMinutes} minutos {completedExams.has(sim.id) ? ' (Completado)' : ''}</p>
                                </div>
                                <button className="btn" onClick={() => handleStartExam(sim)}>
                                    {completedExams.has(sim.id) ? 'Repetir' : 'Comenzar'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                 {examHistory.length > 0 && (
                    <div className="history-link-container">
                        <button className="btn btn-secondary" onClick={() => setGameState('history')}>Historial de Reintentos</button>
                    </div>
                )}
            </div>
        );
    };
    
    const HistoryScreen = () => {
        const [expandedAttemptId, setExpandedAttemptId] = useState<number | null>(null);

        const toggleAttempt = (attemptId: number) => {
            setExpandedAttemptId(prevId => (prevId === attemptId ? null : attemptId));
        };
        
        const handleDeleteAttempt = (attemptId: number) => {
            if (window.confirm("¿Estás seguro de que quieres eliminar este intento? Esta acción no se puede deshacer y afectará tus estadísticas de preparación.")) {
                const attemptToDelete = examHistory.find(h => h.id === attemptId);
                if (!attemptToDelete) return;
    
                const updatedHistory = examHistory.filter(result => result.id !== attemptId);
                setExamHistory(updatedHistory);
                localStorage.setItem('examHistory_v2', JSON.stringify(updatedHistory));
    
                // Check if this was the last attempt for this particular exam
                const otherAttemptsExist = updatedHistory.some(h => h.simulacrumId === attemptToDelete.simulacrumId);
    
                if (!otherAttemptsExist) {
                    const updatedCompletedExams = new Set(completedExams);
                    updatedCompletedExams.delete(attemptToDelete.simulacrumId);
                    setCompletedExams(updatedCompletedExams);
                    localStorage.setItem('completedExams_v2', JSON.stringify(Array.from(updatedCompletedExams)));
                }
            }
        };

        const clearHistory = () => {
            if (window.confirm("¿Estás seguro de que quieres borrar todo tu historial? Esta acción no se puede deshacer.")) {
                setExamHistory([]);
                setCompletedExams(new Set());
                localStorage.removeItem('examHistory_v2');
                localStorage.removeItem('completedExams_v2');
                goToHome();
            }
        };
        
        const overallChapterStats = useMemo(() => {
            if (examHistory.length === 0) return [];
    
            const stats: { [chapter: string]: { totalCorrect: number; totalQuestions: number } } = {};
            const allChaptersSet = new Set<string>();
            examSuite.simulacra.forEach(sim => sim.questions.forEach(q => allChaptersSet.add(q.chapter)));
    
            // Initialize all chapters
            allChaptersSet.forEach(chapter => {
                stats[chapter] = { totalCorrect: 0, totalQuestions: 0 };
            });
    
            examHistory.forEach(result => {
                result.chapterStats.forEach(stat => {
                    if (stats[stat.name]) {
                        stats[stat.name].totalCorrect += stat.score;
                        stats[stat.name].totalQuestions += stat.total;
                    }
                });
            });
    
            return Object.entries(stats)
                .map(([name, data]) => ({
                    name,
                    percentage: data.totalQuestions > 0 ? (data.totalCorrect / data.totalQuestions) * 100 : 0
                }))
                .sort((a, b) => a.name.localeCompare(b.name));
        }, [examHistory]);

        const ChapterProgressChart = ({ stats }: { stats: { name: string; percentage: number }[] }) => (
            <div className="chapter-progress-chart-container">
                <h3>Progreso General por Capítulo</h3>
                <p>Este gráfico muestra tu puntuación promedio acumulada en cada capítulo a través de todos tus intentos.</p>
                <div className="chart-body">
                    {stats.map(stat => (
                        <div key={stat.name} className="chart-row">
                            <span className="chart-label">{stat.name}</span>
                            <div className="chart-bar-container">
                                <div 
                                    className={`chart-bar-horizontal ${stat.percentage >= examSuite.passingScorePercentage ? 'pass' : 'fail'}`} 
                                    style={{ width: `${stat.percentage}%` }}
                                    role="progressbar"
                                    aria-valuenow={stat.percentage}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    title={`${stat.percentage.toFixed(0)}%`}
                                >
                                </div>
                            </div>
                            <span className="chart-percentage">{stat.percentage.toFixed(0)}%</span>
                        </div>
                    ))}
                </div>
            </div>
        );


        return (
            <div className="history-screen">
                <div className="history-header">
                    <h1>Historial de Reintentos</h1>
                    <button className="btn btn-secondary" onClick={goToHome}>Volver al Inicio</button>
                </div>
                {examHistory.length > 0 ? (
                    <>
                        <ChapterProgressChart stats={overallChapterStats} />

                        <div className="history-list-section">
                            <h2>Historial Detallado de Intentos</h2>
                            <ul className="history-list">
                                {examHistory.map((result) => (
                                    <li key={result.id} className="attempt-item">
                                        <div className="attempt-header" onClick={() => toggleAttempt(result.id)}>
                                            <div className="main-info">
                                                <span className="exam-title">{result.simulacrumTitle}</span>
                                                <span className="exam-date">{result.date}</span>
                                            </div>
                                            <div className="main-scores">
                                                <button 
                                                    className="btn-delete-attempt" 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDeleteAttempt(result.id);
                                                    }}
                                                    title="Eliminar Intento"
                                                    aria-label="Eliminar Intento"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                                    </svg>
                                                </button>
                                                <span className={`score ${result.percentage >= examSuite.passingScorePercentage ? 'pass' : 'fail'}`}>
                                                    {result.percentage.toFixed(0)}%
                                                </span>
                                                <span className="score-details">({result.score}/{result.totalQuestions})</span>
                                                <span className="duration-details">Duración: {formatTime(result.timeTakenSeconds)}</span>
                                            </div>
                                            <span className={`accordion-icon ${expandedAttemptId === result.id ? 'expanded' : ''}`}>▼</span>
                                        </div>
                                        {expandedAttemptId === result.id && (
                                            <div className="attempt-body">
                                                <h4>Desglose por Capítulo:</h4>
                                                <ul>
                                                {result.chapterStats.sort((a,b) => a.name.localeCompare(b.name)).map(stat => (
                                                    <li key={stat.name}>
                                                        <span>{stat.name}</span>
                                                        <span className={`score ${stat.percentage >= examSuite.passingScorePercentage ? 'pass' : 'fail'}`}>
                                                            {stat.percentage.toFixed(0)}% ({stat.score}/{stat.total})
                                                        </span>
                                                    </li>
                                                ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="history-footer">
                           <button className="btn btn-danger" onClick={clearHistory}>Borrar Todo el Historial</button>
                        </div>
                    </>
                ) : (
                    <div className="no-history">
                        <p>Aún no has completado ningún examen.</p>
                        <p>Tu historial aparecerá aquí una vez que completes tu primera práctica.</p>
                    </div>
                )}
            </div>
        );
    };

    const ShortcutsInfo = () => {
        const [show, setShow] = useState(false);
        return (
            <div className="shortcuts-info-container">
                <button className="btn-help" onClick={() => setShow(!show)} onBlur={() => setShow(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>
                    <span>Atajos de Teclado</span>
                </button>
                {show && (
                    <div className="shortcuts-list">
                        <h4>Atajos de Teclado</h4>
                        <ul>
                            <li><span>Navegar Preguntas</span> <strong>Alt + ←/→</strong></li>
                            <li><span>Marcar Pregunta</span> <strong>Alt + M</strong></li>
                            <li><span>Seleccionar Opción</span> <strong>1, 2, 3, 4, 5</strong></li>
                            <li><span>Enviar Examen</span> <strong>Ctrl + Enter</strong></li>
                            <li><span>Cancelar Examen</span> <strong>Esc</strong></li>
                        </ul>
                    </div>
                )}
            </div>
        );
    };
    
    const ExamScreen = () => {
        if (!selectedSimulacrum) return null;
        const currentQuestion = selectedSimulacrum.questions[currentQuestionIndex];
        const answeredCount = Object.keys(userAnswers).length;
        return (
            <div className="exam-layout">
                <main className="exam-main">
                    <header className="exam-header">
                        <div>
                            <h2>{selectedSimulacrum.title}</h2>
                            <p>{currentQuestion.chapter}</p>
                        </div>
                        <div className="timer" aria-live="polite" aria-atomic="true">
                            {formatTime(timeLeft)}
                        </div>
                    </header>
                    <div className="question-container">
                        <div className="question-header">
                           <p className="question-text">{currentQuestionIndex + 1}. {currentQuestion.questionText}</p>
                           <button 
                                className={`save-btn ${savedQuestions.has(currentQuestionIndex) ? 'saved' : ''}`} 
                                onClick={() => handleSaveQuestion(currentQuestionIndex)}
                                title={savedQuestions.has(currentQuestionIndex) ? 'Quitar marca' : 'Marcar para revisar'}
                                aria-label={savedQuestions.has(currentQuestionIndex) ? 'Quitar marca de la pregunta' : 'Marcar pregunta para revisar más tarde'}
                           >
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                                   <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                               </svg>
                           </button>
                        </div>
                        <ul className="options-list">
                            {currentQuestion.options.map((option, index) => (
                                <li key={index} className="option-item">
                                    <input 
                                        type="radio"
                                        id={`q${currentQuestionIndex}-o${index}`}
                                        name={`q${currentQuestionIndex}`}
                                        value={index}
                                        checked={userAnswers[currentQuestionIndex] === index}
                                        onChange={() => handleAnswerSelect(index)}
                                        className="option-input"
                                    />
                                    <label htmlFor={`q${currentQuestionIndex}-o${index}`} className="option-label">
                                        {option}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="navigation-buttons">
                        <button className="btn btn-secondary" onClick={() => goToQuestion(currentQuestionIndex - 1)} disabled={currentQuestionIndex === 0}>
                            Anterior
                        </button>
                        <button className="btn btn-secondary" onClick={() => {
                            if (currentQuestionIndex === selectedSimulacrum.questions.length - 1) {
                                handleSubmitAttempt();
                            } else {
                                goToQuestion(currentQuestionIndex + 1);
                            }
                        }}>
                            Siguiente
                        </button>
                    </div>
                </main>
                <aside className="exam-sidebar">
                    <div className="exam-summary">
                        <h3 className="sidebar-title">Resumen</h3>
                        <div className="summary-item"><span>Respondidas:</span> <span>{answeredCount}</span></div>
                        <div className="summary-item"><span>Pendientes:</span> <span>{selectedSimulacrum.questions.length - answeredCount}</span></div>
                        <div className="summary-item"><span>Marcadas:</span> <span>{savedQuestions.size}</span></div>
                    </div>

                    <h3 className="sidebar-title">Navegador de Preguntas</h3>
                    <div className="question-navigator">
                        {selectedSimulacrum.questions.map((_, index) => (
                            <button
                                key={index}
                                className={`nav-btn 
                                    ${index === currentQuestionIndex ? 'current' : ''} 
                                    ${userAnswers[index] !== undefined ? 'answered' : ''}
                                    ${savedQuestions.has(index) ? 'saved' : ''}`
                                }
                                onClick={() => goToQuestion(index)}
                                aria-label={`Ir a la pregunta ${index + 1}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <div className="sidebar-actions">
                        <button className="btn btn-primary" onClick={handleSubmitAttempt}>Finalizar y Enviar</button>
                        <button className="btn btn-danger" onClick={handleCancelExam}>Cancelar Examen</button>
                         <ShortcutsInfo />
                    </div>
                </aside>
            </div>
        );
    };

    const ResultsScreen = ({ latestResult }: { latestResult: ExamResult }) => {
        const pass = latestResult.percentage >= examSuite.passingScorePercentage;
        return (
            <div className="results-screen">
                <h1>Resultados del Examen</h1>
                <div className="results-summary">
                     <p>Tu puntuación final:</p>
                    <p className={`score ${pass ? 'pass' : 'fail'}`}>{latestResult.percentage.toFixed(1)}%</p>
                    <p>({latestResult.score} de {latestResult.totalQuestions} correctas)</p>
                    <p className={`pass-fail-message ${pass ? 'pass' : 'fail'}`}>
                        {pass ? '¡Felicidades, has aprobado!' : 'Necesitas seguir estudiando. ¡No te rindas!'}
                    </p>
                    <p>Tiempo utilizado: {formatTime(latestResult.timeTakenSeconds)}</p>
                </div>
                
                 <div className="stats-section">
                    <h2>Desglose por Capítulo</h2>
                    {latestResult.chapterStats.sort((a,b) => a.name.localeCompare(b.name)).map(stat => (
                        <div key={stat.name} className="stat-item" title={`${stat.score}/${stat.total} correctas`}>
                            <span className="stat-name">{stat.name}</span>
                            <div className="stat-bar-container">
                                <div className="stat-bar" style={{ width: `${stat.percentage}%` }}></div>
                            </div>
                            <span className="stat-percentage">{stat.percentage.toFixed(0)}%</span>
                        </div>
                    ))}
                </div>

                <div className="ai-analysis-section">
                    <h2>¿Quieres un análisis detallado?</h2>
                    <p>Usa la IA para obtener feedback personalizado sobre tus respuestas y entender tus errores.</p>
                    {isGeneratingAnalysis ? (
                        <div className="loading-container">
                            <div className="loader"></div>
                            <span>Generando análisis... Esto puede tardar un momento.</span>
                        </div>
                    ) : (
                        <>
                            <button className="btn btn-primary" onClick={handleGenerateAnalysis} disabled={isGeneratingAnalysis}>
                                Generar Análisis con IA
                            </button>
                            {analysisError && <p style={{ color: 'red', marginTop: '1rem' }}>{analysisError}</p>}
                        </>
                    )}
                    {analysisResult && (
                         <div className="analysis-result">
                             <h3>¡Análisis Completo!</h3>
                             <p>{analysisResult.generalStatus}</p>
                             <button className="btn" onClick={() => {
                                 setCurrentAnalysisIndex(0); // Reset to first question on entry
                                 setGameState('analysisDetail');
                             }}>
                                 Revisar Preguntas con Feedback de IA
                             </button>
                         </div>
                    )}
                </div>

                <div className="results-actions">
                    <button className="btn btn-secondary" onClick={goToHome}>Volver al Inicio</button>
                    <button className="btn" onClick={() => handleStartExam(selectedSimulacrum!)}>Reintentar Examen</button>
                </div>
            </div>
        );
    };
    
    const AnalysisDetailScreen = ({ latestResult }: { latestResult: ExamResult }) => {
        if (!analysisResult || !selectedSimulacrum) return null;

        const currentFeedback = analysisResult.feedbackPerQuestion.find(fb => fb.questionIndex === currentAnalysisIndex);
        const question = selectedSimulacrum.questions[currentAnalysisIndex];
        const userAnswerIndex = latestResult.userAnswers[currentAnalysisIndex];
        
        return (
            <div className="exam-layout">
                <main className="exam-main">
                     <header className="exam-header">
                        <div>
                            <h1>Revisión Detallada con IA</h1>
                             <p>Analizando la pregunta {currentAnalysisIndex + 1} de {selectedSimulacrum.questions.length}</p>
                        </div>
                    </header>
                    <div className="result-question">
                        <p className="question-text">{currentAnalysisIndex + 1}. {question.questionText}</p>
                        <ul>
                            {question.options.map((option, index) => {
                                const isUserAnswer = index === userAnswerIndex;
                                const isCorrect = index === question.correctAnswerIndex;
                                let className = 'result-option';
                                if (isUserAnswer && !isCorrect) className += ' user-answer incorrect';
                                if (isCorrect) className += ' correct-answer';
                                if (isUserAnswer && isCorrect) className += ' user-answer correct';
                                
                                return <li key={index} className={className}>{option}</li>;
                            })}
                        </ul>

                        {question.rationales && (
                            <div className="official-rationale">
                                <h3>Justificación Oficial</h3>
                                {question.rationales.map((rationale, index) => {
                                    const isCorrectRationale = index === question.correctAnswerIndex;
                                    return (
                                        <div key={index} className="rationale-item">
                                            <p className={`rationale-option ${isCorrectRationale ? 'correct' : 'incorrect'}`}>
                                                Opción {index + 1}
                                            </p>
                                            <p className="rationale-text">{rationale}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {currentFeedback && (
                            <div className="ai-feedback">
                                <h3><span role="img" aria-label="robot">🤖</span> Feedback de la IA</h3>
                                <p>{currentFeedback.feedback}</p>
                            </div>
                        )}
                    </div>
                     <div className="navigation-buttons">
                        <button className="btn btn-secondary" onClick={() => goToAnalysisQuestion(currentAnalysisIndex - 1)} disabled={currentAnalysisIndex === 0}>
                            Anterior
                        </button>
                        <button className="btn btn-secondary" onClick={() => goToAnalysisQuestion(currentAnalysisIndex + 1)} disabled={currentAnalysisIndex === analysisResult.feedbackPerQuestion.length - 1}>
                            Siguiente
                        </button>
                    </div>
                </main>
                <aside className="exam-sidebar">
                    <h3 className="sidebar-title">Navegador de Preguntas</h3>
                     <div className="question-navigator">
                        {selectedSimulacrum.questions.map((q, index) => {
                            const userAnswer = latestResult.userAnswers[index];
                            const isCorrect = userAnswer === q.correctAnswerIndex;
                            const isAnswered = userAnswer !== undefined;
                            let statusClass = '';
                            if (isAnswered) {
                                statusClass = isCorrect ? 'correct' : 'incorrect';
                            }

                            return (
                                <button
                                    key={index}
                                    className={`nav-btn 
                                        ${index === currentAnalysisIndex ? 'current' : ''} 
                                        ${statusClass}`
                                    }
                                    onClick={() => goToAnalysisQuestion(index)}
                                    aria-label={`Ir a la pregunta ${index + 1}`}
                                >
                                    {index + 1}
                                </button>
                            );
                        })}
                    </div>
                    <div className="sidebar-actions">
                        <button className="btn btn-secondary" onClick={() => setGameState('results')}>Volver a Resultados</button>
                    </div>
                </aside>
            </div>
        );
    };

    const latestResult = examHistory.length > 0 ? examHistory[0] : null;

    return (
        <div className="app-container">
            {gameState === 'start' && <StartScreen />}
            {gameState === 'exam' && selectedSimulacrum && <ExamScreen />}
            {gameState === 'submitting' && (
                <div className="loading-screen">
                    <div className="loader"></div>
                    <h2>Enviando tus respuestas...</h2>
                    <p>Calculando tu puntuación. ¡Espera un momento!</p>
                </div>
            )}
            {gameState === 'results' && latestResult && <ResultsScreen latestResult={latestResult} />}
            {gameState === 'analysisDetail' && analysisResult && latestResult && <AnalysisDetailScreen latestResult={latestResult} />}
            {gameState === 'history' && <HistoryScreen />}
        </div>
    );
};

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}
