# Grade 7 Ontario Math Practice App

A comprehensive web-based practice application for Grade 7 Ontario mathematics curriculum with AI-powered hints, user authentication, and progress tracking.

## Features

✨ **Complete Curriculum Coverage**: 160 questions across 8 math topics
- Number Sense & Numeracy
- Algebra
- Geometry
- Measurement
- Data & Probability
- Ratio & Proportion
- Percent & Decimals
- Transformations

🎯 **Quiz Features**:
- Randomized 20-question quizzes per topic
- Multiple-choice questions with immediate feedback
- Step-by-step solutions and explanations
- Progress tracking and performance analytics

🤖 **AI-Powered Hints**:
- Context-aware chatbot using Hugging Face Mistral model
- Topic-specific tutoring assistance
- Message history for each quiz session

👥 **User Management**:
- Secure authentication with JWT tokens
- Admin dashboard for user management
- User registration and login
- Role-based access control

📊 **Progress Tracking**:
- Save and retrieve quiz results
- Track performance across topics
- View score history

## Technology Stack

### Backend
- **Runtime**: Node.js 18.x
- **Framework**: Express.js
- **Database**: SQLite3
- **Authentication**: JWT + bcryptjs
- **AI Integration**: Hugging Face Inference API

### Frontend
- **Languages**: HTML5, CSS3, JavaScript (Vanilla)
- **Responsive Design**: Mobile-first approach
- **No Framework Dependencies**: Pure JavaScript for simplicity

## Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm (Node Package Manager)
- Hugging Face API key (free tier available)

### Local Development

1. **Clone or Extract the Project**
   ```bash
   cd "Grade 7 maths"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create Environment Variables**
   Create a `.env` file in the project root:
   ```
   NODE_ENV=development
   PORT=5000
   JWT_SECRET=your-secret-key-change-in-production
   HUGGINGFACE_API_KEY=hf_xxxxx
   ```

   **Get Your Hugging Face API Key:**
   1. Go to https://huggingface.co/
   2. Sign up or log in
   3. Navigate to Settings → Access Tokens
   4. Create a new token (read access is sufficient)
   5. Copy and paste it into the `.env` file

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   Server runs on `http://localhost:5000`

5. **Access the Application**
   - Open browser to `http://localhost:5000`
   - Default admin credentials:
     - **Username**: `admin`
     - **Password**: `admin123`

### Database

The application uses SQLite3 with automatic initialization on first run.

**Database File**: `database.db` (auto-created)

**Tables**:
- `users`: User accounts with authentication
  - id, username, password_hash, is_admin, created_at
- `progress`: Quiz results and history
  - id, user_id, topic, score, total_questions, percentage, created_at

**First Run**:
- Database and tables are created automatically
- Default admin user is created (admin/admin123)

⚠️ **Security Warning**: Change default admin password immediately after first login!

## Deployment to Render

### Setup Steps

1. **Prepare GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Grade 7 Math Practice App"
   git branch -M main
   git remote add origin https://github.com/yourusername/grade7-math.git
   git push -u origin main
   ```

2. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub account

3. **Deploy New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repo containing this project

4. **Configure Service**
   - **Name**: `grade7-math-practice`
   - **Environment**: Node
   - **Region**: Choose closest to you
   - **Plan**: Free (for evaluation)
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

5. **Set Environment Variables**
   In Render Dashboard → Environment:
   ```
   NODE_ENV=production
   JWT_SECRET=<generate-secure-random-string>
   HUGGINGFACE_API_KEY=<your-huggingface-api-key>
   ```

6. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete (~2 minutes)
   - Access your app at `https://grade7-math-practice.onrender.com`

⚠️ **Free Tier Notes**:
- App will spin down after 15 minutes of inactivity
- First request after inactivity may take 30 seconds
- Suitable for learning and evaluation

## Application Structure

```
Grade 7 maths/
├── server.js                 # Express backend server
├── package.json              # Node.js dependencies
├── database.db               # SQLite database (auto-created)
├── .env                      # Environment variables
├── render.yaml               # Render deployment config
├── README.md                 # This file
├── public/
│   ├── index.html           # Redirect to login/app
│   ├── login.html           # Authentication page
│   ├── admin.html           # Admin panel
│   ├── app.html             # Main quiz application
│   ├── app.js               # Quiz logic & chat
│   ├── app.css              # Styling
│   └── data/
│       └── questions.js     # Question database (160 questions)
```

## API Endpoints

### Authentication
- `POST /api/register` - Create new user account
- `POST /api/login` - User login, returns JWT token

### Admin (Requires Admin Role)
- `GET /api/admin/users` - List all users
- `POST /api/admin/users` - Create new user
- `DELETE /api/admin/users/:id` - Delete user
- `PUT /api/admin/users/:id/toggle-admin` - Toggle admin status

### User Data
- `POST /api/progress` - Save quiz result
- `GET /api/progress` - Get user's quiz history

### AI Chat
- `POST /api/chat` - Send message to AI chatbot
  - Request: `{ message: string, topic: string }`
  - Response: `{ response: string }`

## Usage Guide

### For Students
1. **Register**: Create an account with username and password
2. **Login**: Use your credentials to access the app
3. **Select Topic**: Choose a math topic to practice
4. **Take Quiz**: Answer 20 randomized questions
5. **View Results**: See your score and performance
6. **Ask for Hints**: Use the AI chatbot for guidance

### For Administrators
1. **Login**: Use admin credentials
2. **Create Users**: Add new student accounts
3. **Manage Accounts**: Edit user roles and delete accounts
4. **Grant Admin**: Promote users to admin if needed

## Features in Detail

### Quiz System
- **Random Questions**: Ensures unique quizzes each session
- **Immediate Feedback**: See if answer is correct right away
- **Detailed Solutions**: Learn why answers are correct
- **Score Display**: Percentage and performance message

### AI Chatbot
- **Context-Aware**: Understands current topic
- **Tutoring-Focused**: Provides hints without direct answers
- **Message History**: Track conversation during quiz
- **Natural Language**: Uses advanced Mistral AI model

### Progress Analytics
- **Score History**: Track performance over time
- **Topic Breakdown**: See strengths and weaknesses
- **Performance Metrics**: Identify areas for improvement

## Troubleshooting

### Issues with npm install
```bash
# Clear npm cache
npm cache clean --force

# Reinstall
rm -rf node_modules package-lock.json
npm install
```

### Database Issues
- Delete `database.db` to reset (will recreate on next run)
- Default admin will be recreated

### Environment Variables Not Loading
- Ensure `.env` is in project root (not in public folder)
- Restart server after creating/modifying `.env`
- Check file is named exactly `.env`

### Hugging Face API Errors
- Verify API key is valid and has read permissions
- Check API rate limits (free tier has limits)
- Ensure HUGGINGFACE_API_KEY is set in environment

### Chat Not Responding
- Verify Hugging Face API key in `.env`
- Check Hugging Face service status
- Inspect browser console for error details

## Performance Optimization Tips

### For Local Development
- Use `npm run dev` for auto-reload on changes
- Open DevTools (F12) to check console for errors

### For Production (Render)
- Database is persistent across deployments
- Static files are served from `public/` folder
- JWT tokens expire after 7 days

## Security Best Practices

1. **Never commit `.env` file**
   - Add to `.gitignore`
   - Store secrets in environment variables only

2. **Change Default Admin Password**
   - Login as admin immediately
   - Update password in admin panel

3. **Use HTTPS**
   - Render provides free SSL certificates
   - Always use HTTPS for token transmission

4. **Rotate JWT Secret**
   - Generate strong random string for production
   - Use different secrets for dev/prod

5. **Protect API Keys**
   - Never log API keys
   - Rotate Hugging Face keys periodically

## Development Notes

### Adding New Topics
1. Add questions to `public/data/questions.js`
2. Follow existing format: question, options, correct index, solution
3. Include 20 questions per topic for consistency

### Customizing Styling
- Edit `public/app.css` for design changes
- Mobile breakpoints: 1024px and 768px
- Color scheme: Purple gradient `#667eea` to `#764ba2`

### Extending Chat Functionality
- Modify chat prompt in `server.js` `/api/chat` endpoint
- Adjust Hugging Face model if needed
- Add system prompts for different contexts

## Support & Troubleshooting

For detailed error information:
1. Check browser console (F12)
2. Check server logs in terminal
3. Verify environment variables are set
4. Ensure Hugging Face API key is valid

## License

This project is for educational purposes.

## Contributing

For improvements or bug fixes:
1. Test locally before deploying
2. Follow existing code style
3. Update documentation
4. Commit with clear messages

---

**Created for Grade 7 Ontario Mathematics Curriculum**
Ready for deployment and offline use with cloud capabilities.
6. View your final score and performance message
7. Choose to retake the quiz or select a different topic

## Project Structure
```
Grade 7 maths/
├── index.html          # Main HTML file
├── styles.css          # Styling and responsive design
├── script.js           # Application logic and interactivity
├── README.md           # This file
├── .github/
│   └── copilot-instructions.md  # Project documentation
├── data/
│   └── questions.js    # Question database (160+ questions)
└── assets/             # For future media additions
```

## Question Coverage

### 1. Number Sense & Numeracy (20 questions)
- Powers and exponents
- Integers and operations
- Fractions and decimals
- Prime factorization
- GCF and LCM

### 2. Algebra (20 questions)
- Solving equations
- Evaluating expressions
- Simplifying expressions
- Expanding and factoring
- Polynomials

### 3. Geometry (20 questions)
- Angle properties
- Area and perimeter
- 3D shapes and volume
- Circles and circumference
- Transformations basics

### 4. Measurement (20 questions)
- Unit conversions
- Metric system
- Time and distance
- Mass and capacity
- Composite units

### 5. Data & Probability (20 questions)
- Mean, median, mode
- Range and statistics
- Probability calculations
- Independent events
- Data interpretation

### 6. Ratio & Proportion (20 questions)
- Simplifying ratios
- Proportional relationships
- Scale factors
- Direct and inverse proportion
- Rate problems

### 7. Percent & Decimals (20 questions)
- Percent calculations
- Decimal conversions
- Percent increase/decrease
- Applications of percentages
- Fraction to percent conversions

### 8. Transformations (20 questions)
- Translation, rotation, reflection
- Dilation and scale factors
- Lines of symmetry
- Coordinate transformations
- Rigid vs. non-rigid transformations

## Performance Grades
- **100%**: Perfect Score! 🎉
- **90-99%**: Excellent! ⭐
- **80-89%**: Great Job! 👍
- **70-79%**: Good Effort! 📚
- **60-69%**: Making Progress! 💪
- **Below 60%**: Don't Give Up! 📖

## Tips for Success
1. **Focus on weak areas**: Retake topics where you score below 80%
2. **Review solutions**: Read each solution carefully to understand the method
3. **Practice regularly**: Daily practice improves retention and speed
4. **Track progress**: Monitor your scores across different topics
5. **Master one topic at a time**: Build confidence before moving to harder topics

## Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Technologies Used
- **HTML5** - Structure and semantic markup
- **CSS3** - Styling, flexbox, and animations
- **Vanilla JavaScript** - No dependencies or frameworks
- **Responsive Design** - Mobile-friendly interface

## Future Enhancements
- User accounts and progress saving
- Difficulty levels (beginner, intermediate, advanced)
- Explanatory videos for key concepts
- Timed quizzes and speed challenges
- Topic mastery certificates
- Parent/teacher dashboard
- Export progress reports

## Accessibility
- Keyboard navigation support
- Color-coded feedback (correct/incorrect)
- Readable fonts and contrast
- Reduced motion support for animations

## License
This educational resource is designed for Grade 7 Ontario curriculum learning.

## Support
For questions or suggestions, please review the solution explanations and retry the topic.

---

**Target**: Help students achieve A grades (90%+) through focused, consistent practice!

Created for Ontario Grade 7 Mathematics Curriculum
