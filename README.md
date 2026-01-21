<div align="center">

# 🎁 Gift Recommender AI ChatBot

**AI-powered gift recommendation system with smart typo correction, budget awareness, and modern interactive interface**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Shivang-Chaurasia/gift-recommender-ai/pulls)
[![Open in Visual Studio Code](https://img.shields.io/badge/Open%20in-VSCode-blue?logo=visualstudiocode)](https://github.dev/Shivang-Chaurasia/gift-recommender-ai)

</div>

---

## 📋 Table of Contents
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🎮 How to Use](#-how-to-use)
- [🔧 API Reference](#-api-reference)
- [🔮 Future Roadmap](#-future-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## ✨ Features

### 🎯 **Core Functionality**
- **AI-Driven Recommendations** – Generate personalized gift ideas from natural language descriptions
- **Smart Typo Detection** – Automatically corrects common typing mistakes (e.g., "booing" → "books")
- **Budget-Aware Filtering** – Understands and respects budget constraints mentioned in queries
- **Real-Time Processing** – Instant suggestions with animated typing indicators

### 🎨 **User Experience**
- **Modern Gradient UI** – Eye-catching color schemes with smooth animations
- **Interactive Particle Background** – Dynamic visual effects using Particles.js
- **Responsive Design** – Seamless experience across desktop, tablet, and mobile
- **Example Prompts** – One-click template inputs for quick testing

### ⚡ **Technical Excellence**
- **Client-Side Processing** – Fast response times without server latency
- **Modular Codebase** – Clean, maintainable JavaScript architecture
- **Cross-Browser Compatibility** – Works on all modern browsers

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation
```bash
# Clone the repository
git clone https://github.com/Shivang-Chaurasia/gift-recommender-ai.git

# Navigate to project directory
cd gift-recommender-ai

# Install dependencies
npm install

# Start the development server
npm start
Access the Application
Open your browser and navigate to:

text
http://localhost:3000

🛠️ Tech Stack
Frontend Layer
Technology	Purpose	Version
HTML5	Markup structure	Latest
CSS3	Styling & animations	Latest
JavaScript	Core logic & interactivity	ES6+
Bootstrap	Responsive framework	4.5.2
Font Awesome	Icon library	6.4.0
Particles.js	Background animations	2.0.0
Backend Layer
Technology	Purpose	Version
Node.js	Runtime environment	14+
Express.js	Web server framework	4.x
Development Tools
Git – Version control

npm – Package management

VS Code – Recommended editor
```
## 📁 Project Structure
```
text
gift-recommender-ai/
│
├── Asset/
│   └── icon.png              # Application icon
│
├── index.html                # Main HTML file
├── server.js                 # Node.js server
├── package.json              # Dependencies
├── package-lock.json         # Lock file
├── .env                      # Environment variables
├── .gitignore               # Git ignore rules
└── README.md                # Documentation (this file)
```
## 🎮 How to Use
1. Describe the Recipient
Enter details in the text area:
Example: "My friend loves hiking, photography, and coffee. Looking for a birthday gift under $80."


2. Get Recommendations
Click the "Get Smart Recommendations" button or press Enter.

3. Review Suggestions
View categorized gift ideas with:
📝 Specific gift items
💰 Budget ranges
🎯 Personalized recommendations

4. Try Examples
Click on example chips for instant testing:
🚴‍♀️ "Sister who loves cycling"
👩‍🍳 "Mom who loves cooking"
🎮 "Tech enthusiast boyfriend"


---
## 🔧 API Reference
Local Endpoint
text
POST /api/recommend
Request Body:

json
{
  "description": "Person description text",
  "budget": 100,
  "occasion": "birthday"
}
Response:

json
{
  "success": true,
  "suggestions": [
    {
      "category": "Cycling & Fitness",
      "items": ["Premium cycling jersey", "Smart bike computer"],
      "budget_range": "$45-$200"
    }
  ]
}

---
## 🔮 Future Roadmap
# 🚀 Planned Features
Advanced AI Integration – Connect to GPT/LLM APIs
User Accounts – Save preferences and history
Multi-language Support – Internationalization
Gift Comparison – Price and feature comparisons
Wishlist Integration – Connect with Amazon/other retailers
Mobile App – React Native/iOS/Android versions
---
## 🔧 Technical Improvements
Database Integration – MongoDB/PostgreSQL for user data
Authentication – OAuth/JWT implementation
Testing Suite – Unit and integration tests
CI/CD Pipeline – Automated deployment
Performance Optimization – Caching and load balancing


---
## 🤝 Contributing
We welcome contributions! Here's how you can help:
Ways to Contribute
Report Bugs – Open an issue with detailed reproduction steps
Suggest Features – Share your ideas for improvement
Submit Pull Requests – Fix bugs or add features
Improve Documentation – Help others understand the project

---
## Development Process
```bash
# 1. Fork the repository
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/gift-recommender-ai.git

# 3. Create a feature branch
git checkout -b feature/amazing-feature

# 4. Make your changes
# 5. Commit with descriptive message
git commit -m "Add amazing feature"

# 6. Push to your fork
git push origin feature/amazing-feature

# 7. Open a Pull Request
```
---
## Code Guidelines
Follow existing code style
Add Comments for complex logic
Update documentation as needed
Test your changes thoroughly

---
## 📄 License
This project is licensed under the MIT License - see the LICENSE file for full details.
MIT License
Copyright (c) 2025 Shivang Chaurasia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

---

🙏 Acknowledgments
Technologies & Libraries
Bootstrap – CSS framework
Font Awesome – Icon library
Particles.js – Background effects
Node.js – Runtime environment
Express.js – Web framework
---
## Inspiration
Inspired by the challenge of finding perfect gifts
Designed to solve real-world gift-giving problems
Built with user experience as the top priority
---
<div align="center">

## 👨‍💻 Created by Shivang Chaurasia

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ShivangChaurasia)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/shivang-chaurasia-754232297)


## ⭐ Star this repo if you find it useful!

</div>
