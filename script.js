// Global variables
let currentUser = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let assessmentResults = null;

// Assessment questions with dosha weights
const questions = [
    {
        question: "How would you describe your body frame?",
        options: [
            { text: "Thin, lean, and find it difficult to gain weight", vata: 3, pitta: 1, kapha: 0 },
            { text: "Medium build, well-proportioned", vata: 1, pitta: 3, kapha: 1 },
            { text: "Large, heavy, and gain weight easily", vata: 0, pitta: 1, kapha: 3 },
            { text: "Variable - sometimes thin, sometimes heavy", vata: 2, pitta: 1, kapha: 2 }
        ]
    },
    {
        question: "How is your skin typically?",
        options: [
            { text: "Dry, rough, and tends to crack", vata: 3, pitta: 0, kapha: 0 },
            { text: "Warm, reddish, and prone to irritation", vata: 0, pitta: 3, kapha: 0 },
            { text: "Thick, oily, and smooth", vata: 0, pitta: 0, kapha: 3 },
            { text: "Combination - some areas dry, some oily", vata: 2, pitta: 2, kapha: 1 }
        ]
    },
    {
        question: "How do you typically sleep?",
        options: [
            { text: "Light sleeper, easily disturbed, irregular sleep patterns", vata: 3, pitta: 1, kapha: 0 },
            { text: "Moderate sleep, wake up refreshed, sometimes hot", vata: 1, pitta: 3, kapha: 0 },
            { text: "Deep sleeper, difficult to wake up, sleep long hours", vata: 0, pitta: 0, kapha: 3 },
            { text: "Variable sleep patterns depending on circumstances", vata: 2, pitta: 1, kapha: 2 }
        ]
    },
    {
        question: "How do you handle stress?",
        options: [
            { text: "Anxious, worried, and overthink situations", vata: 3, pitta: 1, kapha: 0 },
            { text: "Intense, competitive, and get angry easily", vata: 1, pitta: 3, kapha: 0 },
            { text: "Calm, patient, and take time to process", vata: 0, pitta: 0, kapha: 3 },
            { text: "Variable - depends on the situation", vata: 2, pitta: 2, kapha: 1 }
        ]
    },
    {
        question: "How is your appetite and digestion?",
        options: [
            { text: "Variable appetite, irregular digestion, prone to gas", vata: 3, pitta: 0, kapha: 0 },
            { text: "Strong appetite, good digestion, but can get heartburn", vata: 0, pitta: 3, kapha: 0 },
            { text: "Steady appetite, slow digestion, rarely hungry", vata: 0, pitta: 0, kapha: 3 },
            { text: "Moderate appetite, generally good digestion", vata: 1, pitta: 2, kapha: 2 }
        ]
    },
    {
        question: "How do you typically move and speak?",
        options: [
            { text: "Quick movements, fast speech, restless", vata: 3, pitta: 1, kapha: 0 },
            { text: "Purposeful movements, sharp speech, intense", vata: 1, pitta: 3, kapha: 0 },
            { text: "Slow, steady movements, calm speech", vata: 0, pitta: 0, kapha: 3 },
            { text: "Variable pace depending on mood", vata: 2, pitta: 1, kapha: 2 }
        ]
    },
    {
        question: "How do you handle cold and hot weather?",
        options: [
            { text: "Dislike cold weather, prefer warmth", vata: 3, pitta: 0, kapha: 0 },
            { text: "Dislike hot weather, prefer cool temperatures", vata: 0, pitta: 3, kapha: 0 },
            { text: "Tolerate cold well, dislike hot and humid weather", vata: 0, pitta: 0, kapha: 3 },
            { text: "Adapt to both but have preferences", vata: 1, pitta: 2, kapha: 2 }
        ]
    },
    {
        question: "How is your memory and learning style?",
        options: [
            { text: "Quick to learn, quick to forget, creative thinking", vata: 3, pitta: 1, kapha: 0 },
            { text: "Sharp memory, focused learning, analytical", vata: 1, pitta: 3, kapha: 0 },
            { text: "Slow to learn, excellent long-term memory", vata: 0, pitta: 0, kapha: 3 },
            { text: "Variable memory, depends on interest level", vata: 2, pitta: 1, kapha: 2 }
        ]
    },
    {
        question: "How do you typically spend money?",
        options: [
            { text: "Impulsive spender, buy things on a whim", vata: 3, pitta: 1, kapha: 0 },
            { text: "Strategic spender, buy quality items", vata: 1, pitta: 3, kapha: 0 },
            { text: "Conservative spender, save money carefully", vata: 0, pitta: 0, kapha: 3 },
            { text: "Balanced approach to spending", vata: 1, pitta: 2, kapha: 2 }
        ]
    },
    {
        question: "How do you approach new situations?",
        options: [
            { text: "Excited but anxious, adapt quickly but inconsistently", vata: 3, pitta: 1, kapha: 0 },
            { text: "Confident and determined, take charge", vata: 1, pitta: 3, kapha: 0 },
            { text: "Cautious and steady, take time to adjust", vata: 0, pitta: 0, kapha: 3 },
            { text: "Variable approach depending on the situation", vata: 2, pitta: 1, kapha: 2 }
        ]
    }
];

// Dosha recommendations
const doshaRecommendations = {
    vata: {
        dailyRoutine: [
            "Wake up early (6-7 AM) and maintain a regular schedule",
            "Start your day with warm oil massage (abhyanga) using sesame oil",
            "Practice gentle yoga and meditation for 20-30 minutes",
            "Eat warm, cooked meals at regular times",
            "Take short walks in nature",
            "Go to bed early (10 PM) and maintain consistent sleep schedule",
            "Avoid cold, dry, and windy environments",
            "Practice deep breathing exercises throughout the day"
        ],
        diet: [
            "Favor warm, cooked, and moist foods",
            "Include sweet, sour, and salty tastes",
            "Eat plenty of cooked vegetables, especially root vegetables",
            "Include healthy fats like ghee, sesame oil, and nuts",
            "Drink warm herbal teas (ginger, cinnamon, cardamom)",
            "Avoid cold, raw foods and carbonated drinks",
            "Eat at regular times and in a calm environment",
            "Include dairy products, especially warm milk with spices"
        ],
        lifestyle: [
            "Maintain regular daily routines",
            "Practice grounding activities like gardening or pottery",
            "Avoid excessive travel and irregular schedules",
            "Surround yourself with warm colors and soft textures",
            "Practice self-massage with warm oil regularly",
            "Engage in creative activities to channel energy",
            "Avoid overexertion and excessive exercise",
            "Practice mindfulness and stress-reduction techniques"
        ]
    },
    pitta: {
        dailyRoutine: [
            "Wake up early (6 AM) and avoid sleeping in",
            "Start your day with cooling practices like moon salutations",
            "Practice moderate exercise, avoiding excessive heat",
            "Take cool showers and avoid hot baths",
            "Eat meals at regular times, avoiding spicy foods",
            "Take breaks during work to avoid overheating",
            "Practice cooling meditation and breathing exercises",
            "Go to bed by 10 PM and avoid late-night activities"
        ],
        diet: [
            "Favor cool, sweet, bitter, and astringent tastes",
            "Eat plenty of fresh vegetables and fruits",
            "Include cooling herbs like mint, coriander, and fennel",
            "Avoid spicy, hot, and fermented foods",
            "Drink plenty of cool water and coconut water",
            "Include dairy products, especially milk and ghee",
            "Avoid excessive salt, alcohol, and caffeine",
            "Eat in a calm, cool environment"
        ],
        lifestyle: [
            "Avoid excessive heat and direct sunlight",
            "Practice cooling activities like swimming or moon gazing",
            "Maintain a balanced work schedule with regular breaks",
            "Surround yourself with cool colors (blue, green, white)",
            "Practice patience and avoid competitive situations",
            "Engage in creative and artistic activities",
            "Avoid excessive exercise during hot weather",
            "Practice forgiveness and letting go of anger"
        ]
    },
    kapha: {
        dailyRoutine: [
            "Wake up early (5-6 AM) to avoid lethargy",
            "Start your day with vigorous exercise or brisk walking",
            "Practice stimulating yoga and breathing exercises",
            "Take warm showers with stimulating essential oils",
            "Eat light, warm meals and avoid heavy foods",
            "Stay active throughout the day",
            "Practice energizing meditation techniques",
            "Go to bed early but avoid oversleeping"
        ],
        diet: [
            "Favor light, dry, warm, and spicy foods",
            "Include pungent, bitter, and astringent tastes",
            "Eat plenty of vegetables, especially leafy greens",
            "Include warming spices like ginger, black pepper, and turmeric",
            "Avoid heavy, oily, and sweet foods",
            "Drink warm water with lemon and honey",
            "Eat smaller, more frequent meals",
            "Avoid dairy products and cold foods"
        ],
        lifestyle: [
            "Engage in regular, vigorous exercise",
            "Stay active and avoid sedentary activities",
            "Practice stimulating activities and new challenges",
            "Surround yourself with bright, warm colors",
            "Maintain a stimulating environment",
            "Practice energizing breathing exercises",
            "Avoid excessive sleep and daytime napping",
            "Engage in competitive sports and activities"
        ]
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set up event listeners
    setupEventListeners();
    
    // Check if user is logged in
    checkAuthStatus();
    
    // Initialize assessment
    initializeAssessment();
}

function setupEventListeners() {
    // Sign up form
    document.getElementById('signup-form').addEventListener('submit', handleSignup);
    
    // Login form
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    
    // Mobile menu toggle
    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
}

function checkAuthStatus() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateNavigation();
        showPage('home');
    }
}

function updateNavigation() {
    const profileLink = document.getElementById('profile-link');
    const logoutLink = document.getElementById('logout-link');
    
    if (currentUser) {
        profileLink.style.display = 'block';
        logoutLink.style.display = 'block';
    } else {
        profileLink.style.display = 'none';
        logoutLink.style.display = 'none';
    }
}

// Page navigation
function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(pageName + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Load page-specific content
        if (pageName === 'profile' && currentUser) {
            loadProfileData();
        }
    }
}

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Authentication functions
function handleSignup(e) {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    // Simple validation
    if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Create user object
    const user = {
        name: name,
        email: email,
        password: password, // In a real app, this would be hashed
        joinDate: new Date().toISOString(),
        assessments: []
    };
    
    // Save user (in a real app, this would go to a database)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find(u => u.email === email);
    
    if (existingUser) {
        alert('User already exists with this email');
        return;
    }
    
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Log in the user
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    updateNavigation();
    showPage('home');
    
    alert('Account created successfully!');
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateNavigation();
        showPage('home');
    } else {
        alert('Invalid email or password');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateNavigation();
    showPage('signup');
}

// Assessment functions
function initializeAssessment() {
    currentQuestionIndex = 0;
    userAnswers = [];
    updateQuestion();
    updateProgress();
}

function updateQuestion() {
    if (currentQuestionIndex >= questions.length) {
        calculateResults();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
    
    updateQuestionCounter();
    updateNavigationButtons();
}

function selectOption(optionIndex) {
    // Remove previous selection
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    // Select new option
    buttons[optionIndex].classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('Please select an option before proceeding');
        return;
    }
    
    currentQuestionIndex++;
    updateQuestion();
    updateProgress();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestion();
        updateProgress();
        
        // Restore previous selection
        const buttons = document.querySelectorAll('.option-btn');
        if (userAnswers[currentQuestionIndex] !== undefined) {
            buttons[userAnswers[currentQuestionIndex]].classList.add('selected');
        }
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

function updateQuestionCounter() {
    document.getElementById('question-counter').textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = userAnswers[currentQuestionIndex] === undefined;
}

function calculateResults() {
    let vataScore = 0;
    let pittaScore = 0;
    let kaphaScore = 0;
    
    userAnswers.forEach((answer, index) => {
        const option = questions[index].options[answer];
        vataScore += option.vata;
        pittaScore += option.pitta;
        kaphaScore += option.kapha;
    });
    
    // Determine primary dosha
    let primaryDosha = 'vata';
    if (pittaScore > vataScore && pittaScore > kaphaScore) {
        primaryDosha = 'pitta';
    } else if (kaphaScore > vataScore && kaphaScore > pittaScore) {
        primaryDosha = 'kapha';
    }
    
    assessmentResults = {
        vata: vataScore,
        pitta: pittaScore,
        kapha: kaphaScore,
        primaryDosha: primaryDosha
    };
    
    // Save results to user profile
    if (currentUser) {
        if (!currentUser.assessments) {
            currentUser.assessments = [];
        }
        currentUser.assessments.push({
            date: new Date().toISOString(),
            results: assessmentResults
        });
        
        // Update localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
    }
    
    displayResults();
}

function displayResults() {
    showPage('results');
    
    const doshaResult = document.getElementById('dosha-result');
    const doshaBreakdown = document.getElementById('dosha-breakdown');
    const routineContent = document.getElementById('routine-content');
    const dietContent = document.getElementById('diet-content');
    const lifestyleContent = document.getElementById('lifestyle-content');
    
    // Set primary dosha result
    doshaResult.className = `dosha-result ${assessmentResults.primaryDosha}`;
    doshaResult.innerHTML = `
        <h3>Your Primary Dosha: ${assessmentResults.primaryDosha.toUpperCase()}</h3>
        <p>Based on your responses, you have a ${assessmentResults.primaryDosha} constitution.</p>
    `;
    
    // Create dosha breakdown
    const total = assessmentResults.vata + assessmentResults.pitta + assessmentResults.kapha;
    const vataPercent = Math.round((assessmentResults.vata / total) * 100);
    const pittaPercent = Math.round((assessmentResults.pitta / total) * 100);
    const kaphaPercent = Math.round((assessmentResults.kapha / total) * 100);
    
    doshaBreakdown.innerHTML = `
        <div class="dosha-bar vata">
            <h4>Vata: ${vataPercent}%</h4>
            <div class="bar-container">
                <div class="bar-fill vata" style="width: ${vataPercent}%"></div>
            </div>
        </div>
        <div class="dosha-bar pitta">
            <h4>Pitta: ${pittaPercent}%</h4>
            <div class="bar-container">
                <div class="bar-fill pitta" style="width: ${pittaPercent}%"></div>
            </div>
        </div>
        <div class="dosha-bar kapha">
            <h4>Kapha: ${kaphaPercent}%</h4>
            <div class="bar-container">
                <div class="bar-fill kapha" style="width: ${kaphaPercent}%"></div>
            </div>
        </div>
    `;
    
    // Load recommendations
    const recommendations = doshaRecommendations[assessmentResults.primaryDosha];
    
    routineContent.innerHTML = `
        <ul>
            ${recommendations.dailyRoutine.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
    
    dietContent.innerHTML = `
        <ul>
            ${recommendations.diet.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
    
    lifestyleContent.innerHTML = `
        <ul>
            ${recommendations.lifestyle.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
}

function retakeAssessment() {
    initializeAssessment();
    showPage('assessment');
}

function saveResults() {
    if (!assessmentResults) {
        alert('No results to save');
        return;
    }
    
    const resultsText = `
Ayurvedic Dosha Assessment Results

Primary Dosha: ${assessmentResults.primaryDosha.toUpperCase()}

Dosha Breakdown:
- Vata: ${Math.round((assessmentResults.vata / (assessmentResults.vata + assessmentResults.pitta + assessmentResults.kapha)) * 100)}%
- Pitta: ${Math.round((assessmentResults.pitta / (assessmentResults.vata + assessmentResults.pitta + assessmentResults.kapha)) * 100)}%
- Kapha: ${Math.round((assessmentResults.kapha / (assessmentResults.vata + assessmentResults.pitta + assessmentResults.kapha)) * 100)}%

Assessment Date: ${new Date().toLocaleDateString()}
    `;
    
    const blob = new Blob([resultsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dosha-assessment-results.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('Results saved successfully!');
}

// Profile functions
function loadProfileData() {
    if (!currentUser) return;
    
    document.getElementById('profile-name').textContent = currentUser.name;
    document.getElementById('profile-email').textContent = currentUser.email;
    document.getElementById('profile-date').textContent = new Date(currentUser.joinDate).toLocaleDateString();
}

function viewHistory() {
    if (!currentUser || !currentUser.assessments || currentUser.assessments.length === 0) {
        alert('No assessment history found');
        return;
    }
    
    let historyText = 'Assessment History:\n\n';
    currentUser.assessments.forEach((assessment, index) => {
        const date = new Date(assessment.date).toLocaleDateString();
        const results = assessment.results;
        const total = results.vata + results.pitta + results.kapha;
        
        historyText += `Assessment ${index + 1} - ${date}\n`;
        historyText += `Primary Dosha: ${results.primaryDosha.toUpperCase()}\n`;
        historyText += `Vata: ${Math.round((results.vata / total) * 100)}%\n`;
        historyText += `Pitta: ${Math.round((results.pitta / total) * 100)}%\n`;
        historyText += `Kapha: ${Math.round((results.kapha / total) * 100)}%\n\n`;
    });
    
    alert(historyText);
} 