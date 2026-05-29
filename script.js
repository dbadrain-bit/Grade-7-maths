// Grade 7 Ontario Math Practice App - Main Script
class MathPracticeApp {
    constructor() {
        this.currentTopic = null;
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.selectedAnswer = null;
        this.score = 0;
        this.questionsAnswered = [];
        
        this.initializeApp();
    }

    initializeApp() {
        this.renderTopics();
        this.attachEventListeners();
    }

    attachEventListeners() {
        document.getElementById('backBtn').addEventListener('click', () => this.backToTopics());
        document.getElementById('submitBtn').addEventListener('click', () => this.submitAnswer());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('retakeBtn').addEventListener('click', () => this.retakQuiz());
        document.getElementById('selectTopicBtn').addEventListener('click', () => this.backToTopics());
    }

    renderTopics() {
        const container = document.getElementById('topicsContainer');
        container.innerHTML = '';
        
        Object.keys(questionsDatabase).forEach(topic => {
            const btn = document.createElement('button');
            btn.className = 'topic-btn';
            btn.textContent = topic;
            btn.addEventListener('click', () => this.startQuiz(topic));
            container.appendChild(btn);
        });
    }

    startQuiz(topic) {
        this.currentTopic = topic;
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.questionsAnswered = [];
        this.selectedAnswer = null;
        
        // Get all questions for this topic and shuffle them
        const allQuestions = questionsDatabase[topic];
        this.currentQuestions = this.getRandomQuestions(allQuestions, 20);
        
        // Switch to quiz screen
        this.switchScreen('quizScreen');
        this.displayQuestion();
    }

    getRandomQuestions(questions, count) {
        // Shuffle questions and take first 'count' questions
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionNum = this.currentQuestionIndex + 1;
        
        document.getElementById('topicTitle').textContent = this.currentTopic;
        document.getElementById('questionNumber').textContent = `Question ${questionNum} of ${this.currentQuestions.length}`;
        document.getElementById('progressBar').textContent = `Progress: ${questionNum}/${this.currentQuestions.length}`;
        document.getElementById('questionText').textContent = question.question;
        
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            optionDiv.addEventListener('click', () => this.selectOption(index, optionDiv));
            optionsContainer.appendChild(optionDiv);
        });
        
        // Hide solution
        document.getElementById('solutionContainer').classList.add('hidden');
        document.getElementById('submitBtn').style.display = 'block';
        document.getElementById('nextBtn').style.display = 'none';
        this.selectedAnswer = null;
    }

    selectOption(index, element) {
        // Remove previous selection
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        
        // Add selection to clicked option
        element.classList.add('selected');
        this.selectedAnswer = index;
    }

    submitAnswer() {
        if (this.selectedAnswer === null) {
            alert('Please select an answer');
            return;
        }
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        const isCorrect = this.selectedAnswer === question.correct;
        
        // Show correct/incorrect feedback
        if (isCorrect) {
            this.score++;
            options[this.selectedAnswer].classList.add('correct');
        } else {
            options[this.selectedAnswer].classList.add('incorrect');
            options[question.correct].classList.add('correct');
        }
        
        // Store answer info
        this.questionsAnswered.push({
            question: question.question,
            selected: this.selectedAnswer,
            correct: question.correct,
            isCorrect: isCorrect,
            solution: question.solution
        });
        
        // Disable all options
        options.forEach(opt => opt.style.pointerEvents = 'none');
        
        // Show solution
        document.getElementById('solutionText').textContent = question.solution;
        document.getElementById('solutionContainer').classList.remove('hidden');
        document.getElementById('submitBtn').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'block';
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.currentQuestions.length) {
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        const percentage = Math.round((this.score / this.currentQuestions.length) * 100);
        
        document.getElementById('finalScore').textContent = `${this.score}/${this.currentQuestions.length}`;
        document.getElementById('finalPercentage').textContent = `${percentage}%`;
        
        let message = '';
        if (percentage === 100) {
            message = '🎉 Perfect Score! Outstanding work!';
        } else if (percentage >= 90) {
            message = '⭐ Excellent! You\'re on your way to an A+!';
        } else if (percentage >= 80) {
            message = '👍 Great job! Keep practicing to improve further.';
        } else if (percentage >= 70) {
            message = '📚 Good effort! Review the topics and try again.';
        } else if (percentage >= 60) {
            message = '💪 You\'re making progress! More practice needed.';
        } else {
            message = '📖 Don\'t give up! Review the concepts and try again.';
        }
        
        document.getElementById('performanceMessage').textContent = message;
        
        this.switchScreen('resultsScreen');
    }

    retakQuiz() {
        this.startQuiz(this.currentTopic);
    }

    backToTopics() {
        this.currentTopic = null;
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.selectedAnswer = null;
        this.score = 0;
        this.questionsAnswered = [];
        
        this.switchScreen('topicSelection');
    }

    switchScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show target screen
        document.getElementById(screenId).classList.add('active');
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new MathPracticeApp();
});
