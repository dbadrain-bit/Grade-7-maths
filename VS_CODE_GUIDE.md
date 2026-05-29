# Grade 7 Math Practice - VS Code Development Guide

## 🚀 Quick Start

### 1. **Open Project in VS Code**
```bash
# Option A: From terminal
code .

# Option B: File > Open Folder > Select this directory
```

### 2. **Start Development Server**

#### Option A: With Auto-reload (Recommended)
- Press `Ctrl+Shift+B` (Tasks: Run Build Task)
- Select **"Start with Nodemon (Auto-reload)"**
- Server restarts automatically when you save files

#### Option B: Standard Start
- Press `F5` to start debugging
- Select **"Launch Server (Debug)"**
- Breakpoints and debugging enabled

#### Option C: From Terminal
```bash
npm start      # Standard start (port 5000)
npm run dev    # With nodemon auto-reload
```

### 3. **Access the App**
- Student App: http://localhost:5000/app
- Admin Panel: http://localhost:5000/admin
- Login: admin / admin123

---

## 🎯 Development Workflow

### Editing Server Code
1. Edit `server.js` or files in the project
2. **Auto-reload**: Changes apply automatically (with nodemon)
3. Check integrated terminal for errors
4. Refresh browser to test changes

### Editing Frontend Code
- Edit HTML files in `public/` folder
- Edit CSS in `public/app.css`
- Edit JavaScript in `public/app.js`
- Refresh browser (F5) to see changes

### Debugging
- Set breakpoints by clicking line numbers
- When server hits breakpoint, execution pauses
- Use Debug Console to inspect variables
- Press `F10` to step through code

---

## 📂 Project Structure
```
Grade 7 maths/
├── server.js              # Express server (backend)
├── public/
│   ├── app.html          # Student app
│   ├── app.js            # Student app logic
│   ├── app.css           # Student app styling
│   ├── login.html        # Login page
│   ├── admin.html        # Admin panel
│   └── data/
│       └── questions.js  # Math questions database
├── data/
│   └── questions.js      # Questions (backup)
├── package.json          # Dependencies
├── database.db           # SQLite database (auto-created)
└── .vscode/
    ├── launch.json       # Debug configurations
    ├── settings.json     # Editor settings
    ├── tasks.json        # Automation tasks
    └── extensions.json   # Recommended extensions
```

---

## 🔧 Useful VS Code Features

### Recommended Extensions
Auto-install recommended extensions:
- `Ctrl+Shift+X` → Search "Workspace Recommended" → Install all

Key Extensions:
- **Prettier** - Auto-format code
- **ESLint** - Code quality
- **Node Essentials** - Node.js tools
- **GitLens** - Git history
- **REST Client** - Test API endpoints

### Tasks (Ctrl+Shift+B)
- **Start Dev Server** - Run with nodemon
- **Install Dependencies** - npm install
- **Reset Database & Start** - Clean slate

### Debugging Shortcuts
- `F5` - Start debugging
- `F10` - Step over line
- `F11` - Step into function
- `Shift+F11` - Step out of function
- `Ctrl+Shift+F5` - Restart
- `Shift+Ctrl+D` - Open Debug sidebar

### File Navigation
- `Ctrl+P` - Quick file open
- `Ctrl+F` - Find in file
- `Ctrl+H` - Find & replace
- `Ctrl+Shift+F` - Search all files

---

## 📝 Common Tasks

### Edit Questions
1. Open `public/data/questions.js`
2. Edit any question in the database
3. Save file
4. Refresh browser to see changes

### Add New User
1. Go to Admin Panel: http://localhost:5000/admin
2. Click "Create User"
3. Enter details
4. New user can login immediately

### Check API Responses
1. Open `.vscode/tasks.json` for examples
2. Use REST Client extension (Ctrl+Alt+R)
3. Or check browser Network tab (F12 → Network)

### Reset Everything
1. Task: `Ctrl+Shift+B` → "Reset Database & Start"
2. Database clears, admin user recreated
3. Fresh start for testing

---

## 🐛 Troubleshooting

### Server won't start
```bash
# Check port 5000 is free
netstat -ano | findstr :5000

# Kill process if needed
taskkill /PID <PID> /F
```

### Database errors
```bash
# Reset database
Remove-Item -Force database.db
npm start
```

### Changes not showing
- Clear browser cache: `Ctrl+Shift+Delete`
- Hard refresh: `Ctrl+Shift+R`
- Restart server: `Ctrl+Shift+F5`

### Debug not working
- Check `.vscode/launch.json` syntax
- Ensure server is running
- Check breakpoint is on executable line

---

## 🌐 API Endpoints (for reference)

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/register` | Register new user |
| POST | `/api/login` | User login |
| GET | `/api/progress` | Get user progress |
| POST | `/api/progress` | Save quiz score |
| POST | `/api/chat` | Get AI hint |
| GET | `/api/admin/users` | List all users (admin) |
| POST | `/api/admin/users` | Create user (admin) |

---

## 💡 Tips

1. **Use Integrated Terminal**: `Ctrl+` ` - keeps everything in VS Code
2. **Watch Errors**: Debug Console shows real-time errors
3. **Test APIs**: Use REST Client or Postman
4. **Format Code**: `Alt+Shift+F` - auto-format file
5. **Duplicate Line**: `Ctrl+D` - select and edit quickly

---

## ✅ You're Ready!

Your development environment is fully configured. Start editing and building amazing math practice features! 🎓
