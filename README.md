# 🌿 PrakritiFit – Ayurvedic Dosha Assessment Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-Open--Source-green?style=for-the-badge)

---

## 📘 Project Title
**PrakritiFit – Ayurvedic Dosha Assessment Website**

---

## 🪷 Description

A comprehensive **web application** that helps users discover their **Ayurvedic constitution (dosha type)** through a detailed interactive questionnaire.  
Based on their responses, users receive **personalized recommendations** for daily routines, diet, and lifestyle—aligned with Ayurvedic wellness principles.

---

## ⚙️ Installation Steps

1. **Download or Clone this Repository**
   ```bash
   git clone https://github.com/RP45-hub/ayurvedic-dosha-assessment
   ```
2. **Open the Project Folder**
   ```bash
   cd PrakritiFit
   ```
3. **Run the Project**
   - Simply open `index.html` in your preferred web browser.
   - *(Optional)* Use VS Code’s **Live Server** extension for a smoother local preview.

---

## ▶️ How to Run the Project

1. **Open** `index.html` in any modern browser.
2. **Sign Up** by entering your name, email, and password.
3. **Login** to your account.
4. **Start Assessment** → Answer 10 lifestyle questions.
5. **View Your Results** → Get dosha breakdown and recommendations.
6. **Save or Retake** → Download results or retake the test anytime.

---

## 🌟 Features

### 🔐 User Authentication
- **Sign Up / Login** using localStorage  
- **Profile Page** with stored personal info and history  
- **Session Persistence** for returning users  

### 🏠 Home Page
- Beautiful **hero section** introducing Ayurveda  
- **Dosha icons** for Vata 🌪️, Pitta 🔥, and Kapha 💧  
- Overview of what users can explore  

### 📋 Assessment System
- **10 Comprehensive Questions** covering:
  - Body type, digestion, emotions, habits, etc.  
- **Progress bar** and **question counter**
- Fully **responsive layout** for all devices  

### 📊 Results & Recommendations
- **Dynamic Dosha Breakdown** using percentage bars  
- **Primary Dosha Highlighted** (Vata / Pitta / Kapha)  
- Personalized:
  - 🕉️ **Daily Routine**
  - 🥗 **Diet Recommendations**
  - 🌸 **Lifestyle Tips**

### 📚 Educational Content
- **About Ayurveda Section** explaining the three doshas  
- Detailed info on **elements**, **qualities**, and **balance**  

### 💾 Data Management
- All user data & results saved in **localStorage**  
- **Download results** as `.txt` file  
- **View past assessments** in profile  

---

## 🧬 Dosha Types Overview

### 🌪️ Vata (Air + Ether)
- **Qualities:** Light, dry, cold, mobile  
- **Balanced Traits:** Creative, quick-thinking, adaptable  
- **Color:** Sky Blue `#87CEEB`

### 🔥 Pitta (Fire + Water)
- **Qualities:** Hot, sharp, light, oily  
- **Balanced Traits:** Focused, intelligent, leader  
- **Color:** Red `#FF6B6B`

### 💧 Kapha (Earth + Water)
- **Qualities:** Heavy, slow, cool, oily  
- **Balanced Traits:** Loyal, patient, grounded  
- **Color:** Teal `#4ECDC4`

---

## 🧠 How to Use

1. **Be Honest:** Answer according to your natural tendencies, not recent moods.  
2. **Don’t Overthink:** Go with your first instinct for best results.  
3. **Complete All Questions:** Each question contributes to dosha accuracy.  
4. **Read Results Carefully:** Review both your dominant and secondary doshas.  

---

## 🛠️ Technical Details

### 📁 File Structure
```
├── index.html       # Main HTML with multi-page structure
├── styles.css       # Ayurvedic green-gold theme & animations
├── script.js        # Quiz logic, user data, and recommendations
└── README.md        # Project documentation
```

### 💻 Technologies Used
- **HTML5** – Semantic structure  
- **CSS3** – Responsive styling with gradients & animations  
- **JavaScript (ES6)** – Core functionality  
- **Local Storage** – Data persistence  
- **Font Awesome** – Icons  
- **Google Fonts (Poppins)** – Elegant typography  

### 🌐 Browser Compatibility
- ✅ Chrome  
- ✅ Firefox  
- ✅ Edge  
- ✅ Safari  
- ✅ Mobile browsers  

---

## 🧩 Customization

### ➕ Add More Questions
Edit the `questions` array in `script.js`:
```javascript
{
  question: "Your new question here?",
  options: [
    { text: "Option 1", vata: 3, pitta: 1, kapha: 0 },
    { text: "Option 2", vata: 1, pitta: 3, kapha: 0 },
    { text: "Option 3", vata: 0, pitta: 0, kapha: 3 },
    { text: "Option 4", vata: 2, pitta: 1, kapha: 2 }
  ]
}
```

### 🌿 Update Recommendations
Modify the `doshaRecommendations` object in `script.js` to tailor new routines, diets, and tips.

### 🎨 Change Colors or Fonts
Open `styles.css` and edit theme colors, font sizes, or gradients.

---

## 🔒 Privacy & Security

- Data stored **locally** (no external servers)  
- Users can delete data anytime by logging out  
- No analytics or third-party tracking  

---

## 🚀 Future Enhancements

- 🌤️ Seasonal dosha tips  
- 🍛 Recipe database by dosha  
- 🧘‍♂️ Meditation and yoga modules  
- 💬 Community discussion area  
- ☁️ Backend integration for cloud sync  

---

## 🧰 Support

If you face issues:
1. Ensure JavaScript is enabled  
2. Use a modern browser  
3. Check that all files are in the same folder  
4. Clear cache and reload  

---

## 👨‍💻 Author

**Ritesh Patel**  
GitHub: [RP45-hub](https://github.com/RP45-hub)  

---

## 📜 License

This project is open-source and free for **personal and educational use**.

---

> ⚠️ **Disclaimer:**  
> This application is for educational and wellness purposes only.  
> It should not replace professional medical consultation.

---

