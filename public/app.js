// Grade 7 Ontario Math Practice App - Main Script
const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user') || '{}');

// Redirect if not logged in
if (!token) {
    window.location.href = '/login';
}

// Display user
document.getElementById('userDisplay').textContent = `${user.username}`;

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
});

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
        
        // Chat events
        document.getElementById('sendChatBtn').addEventListener('click', () => this.sendChatMessage());
        document.getElementById('chatInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendChatMessage();
        });
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
        
        // Clear chat
        document.getElementById('chatMessages').innerHTML = `
            <div class="message bot">
                <p>Hi! I'm here to help you understand this topic. Ask me a question about ${topic}!</p>
            </div>
        `;
        document.getElementById('chatInput').value = '';
        
        // Switch to quiz screen
        this.switchScreen('quizScreen');
        this.displayQuestion();
    }

    getRandomQuestions(questions, count) {
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
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
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
        
        if (isCorrect) {
            this.score++;
            options[this.selectedAnswer].classList.add('correct');
        } else {
            options[this.selectedAnswer].classList.add('incorrect');
            options[question.correct].classList.add('correct');
        }
        
        this.questionsAnswered.push({
            question: question.question,
            selected: this.selectedAnswer,
            correct: question.correct,
            isCorrect: isCorrect,
            solution: question.solution
        });
        
        options.forEach(opt => opt.style.pointerEvents = 'none');
        
        document.getElementById('solutionText').textContent = question.solution;
        document.getElementById('solutionContainer').classList.remove('hidden');
        document.getElementById('submitBtn').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'block';
        
        // Save progress
        this.saveProgress();
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
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        document.getElementById(screenId).classList.add('active');
    }

    // Chatbot functionality
    async sendChatMessage() {
        const chatInput = document.getElementById('chatInput');
        const message = chatInput.value.trim();
        
        if (!message) return;
        
        // Add user message to chat
        const chatMessages = document.getElementById('chatMessages');
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'message user';
        userMessageDiv.innerHTML = `<p>${this.escapeHtml(message)}</p>`;
        chatMessages.appendChild(userMessageDiv);
        chatInput.value = '';
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        try {
            // Get AI hint from server
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    message: message,
                    topic: this.currentTopic
                })
            });
            
            const data = await response.json();
            
            // Add bot response
            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'message bot';
            botMessageDiv.innerHTML = `<p>${this.escapeHtml(data.hint || 'I\'m not sure about that. Try asking about the current topic!')}</p>`;
            chatMessages.appendChild(botMessageDiv);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } catch (error) {
            console.error('Chat error:', error);
            const errorDiv = document.createElement('div');
            errorDiv.className = 'message bot';
            errorDiv.innerHTML = `<p>Sorry, I couldn't get a response right now. Try again!</p>`;
            chatMessages.appendChild(errorDiv);
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    saveProgress() {
        fetch('/api/progress', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                topic: this.currentTopic,
                score: this.score,
                totalQuestions: this.currentQuestionIndex + 1
            })
        }).catch(err => console.error('Failed to save progress:', err));
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new MathPracticeApp();
});
