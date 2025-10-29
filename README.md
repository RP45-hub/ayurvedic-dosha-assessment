# Ayurvedic Dosha Assessment Website

A comprehensive web application that helps users discover their Ayurvedic constitution (dosha type) through a detailed questionnaire and provides personalized recommendations for daily routine, diet, and lifestyle.

## Features

### 🔐 User Authentication
- **Sign Up**: Create a new account with name, email, and password
- **Login**: Secure authentication for returning users
- **Profile Management**: View personal information and assessment history
- **Session Management**: Automatic login persistence

### 🏠 Home Page
- **Welcome Section**: Introduction to Ayurvedic dosha assessment
- **Feature Overview**: What users can expect from the assessment
- **Visual Dosha Icons**: Interactive display of the three dosha types (Vata, Pitta, Kapha)

### 📋 Assessment System
- **10 Comprehensive Questions**: Carefully crafted questions covering:
  - Body frame and physical characteristics
  - Skin type and texture
  - Sleep patterns
  - Stress handling
  - Appetite and digestion
  - Movement and speech patterns
  - Weather preferences
  - Memory and learning style
  - Spending habits
  - Approach to new situations

- **Progress Tracking**: Visual progress bar and question counter
- **Navigation**: Previous/Next buttons with answer validation
- **Responsive Design**: Works seamlessly on all devices

### 📊 Results & Recommendations
- **Dosha Breakdown**: Visual representation of Vata, Pitta, and Kapha percentages
- **Primary Dosha Identification**: Clear indication of dominant dosha
- **Personalized Recommendations**:
  - **Daily Routine**: 8 specific practices for your dosha type
  - **Diet Guidelines**: 8 dietary recommendations
  - **Lifestyle Tips**: 8 lifestyle practices for balance

### 📚 Educational Content
- **About Page**: Comprehensive information about Ayurveda and doshas
- **Dosha Explanations**: Detailed descriptions of each dosha type
- **Element Information**: Understanding of the five elements

### 💾 Data Management
- **Local Storage**: User data and assessment history stored locally
- **Results Export**: Download assessment results as text file
- **Assessment History**: View previous assessments and track changes

## Dosha Types

### 🌪️ Vata (Air + Ether)
- **Characteristics**: Light, dry, cold, mobile
- **Functions**: Movement, breathing, circulation
- **When Balanced**: Creative, quick-thinking, adaptable
- **Color**: Sky blue (#87CEEB)

### 🔥 Pitta (Fire + Water)
- **Characteristics**: Hot, sharp, light, oily
- **Functions**: Digestion, metabolism, intelligence
- **When Balanced**: Intelligent, focused, natural leaders
- **Color**: Red (#FF6B6B)

### 💧 Kapha (Earth + Water)
- **Characteristics**: Heavy, slow, cool, oily
- **Functions**: Structure, stability, growth
- **When Balanced**: Strong, loyal, patient
- **Color**: Teal (#4ECDC4)

## How to Use

### Getting Started
1. **Open the Website**: Open `index.html` in your web browser
2. **Create Account**: Click "Sign Up" and fill in your details
3. **Start Assessment**: Navigate to the assessment page
4. **Answer Questions**: Answer all 10 questions honestly
5. **View Results**: Get your personalized dosha analysis
6. **Follow Recommendations**: Implement the suggested daily routine, diet, and lifestyle tips

### Taking the Assessment
- **Be Honest**: Answer questions based on your natural tendencies, not what you wish you were
- **Consider Patterns**: Think about your typical behavior over time, not just recent events
- **Don't Overthink**: Go with your first instinct for the most accurate results
- **Complete All Questions**: All questions are required for accurate dosha calculation

### Understanding Results
- **Primary Dosha**: Your dominant constitution type
- **Percentage Breakdown**: Shows the balance of all three doshas
- **Recommendations**: Tailored advice for your specific dosha type
- **Regular Assessment**: Consider retaking the assessment periodically to track changes

## Technical Details

### File Structure
```
├── index.html          # Main HTML file with all pages
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality and data management
- **Local Storage**: Client-side data persistence
- **Font Awesome**: Icons for visual elements
- **Google Fonts**: Poppins font family

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Features in Detail

### Authentication System
- User registration and login
- Password validation
- Session management
- Profile data storage

### Assessment Algorithm
- Weighted scoring system for each dosha
- 10 questions with 4 options each
- Each option contributes to Vata, Pitta, and Kapha scores
- Primary dosha determined by highest score

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interface
- Adaptive navigation

### Data Persistence
- User accounts stored in localStorage
- Assessment history tracking
- Results export functionality
- Cross-session data retention

## Customization

### Adding Questions
To add more questions, edit the `questions` array in `script.js`:
```javascript
{
    question: "Your question here?",
    options: [
        { text: "Option 1", vata: 3, pitta: 1, kapha: 0 },
        { text: "Option 2", vata: 1, pitta: 3, kapha: 0 },
        { text: "Option 3", vata: 0, pitta: 0, kapha: 3 },
        { text: "Option 4", vata: 2, pitta: 1, kapha: 2 }
    ]
}
```

### Modifying Recommendations
Edit the `doshaRecommendations` object in `script.js` to customize advice for each dosha type.

### Styling Changes
Modify `styles.css` to change colors, fonts, layouts, and animations.

## Privacy & Security

- **Local Storage**: All data is stored locally on your device
- **No Server**: No data is sent to external servers
- **User Control**: Users can clear their data by logging out
- **No Tracking**: No analytics or tracking scripts

## Future Enhancements

Potential improvements for future versions:
- **Backend Integration**: Server-side data storage
- **Advanced Analytics**: Detailed dosha tracking over time
- **Seasonal Recommendations**: Dosha-specific seasonal advice
- **Recipe Database**: Dosha-specific meal suggestions
- **Meditation Guides**: Dosha-specific meditation practices
- **Community Features**: User forums and sharing
- **Professional Consultation**: Integration with Ayurvedic practitioners

## Support

For questions or issues:
1. Check that JavaScript is enabled in your browser
2. Clear browser cache and try again
3. Ensure you're using a modern web browser
4. Check that all files are in the same directory

## License

This project is open source and available for personal and educational use.

---

**Note**: This assessment is for educational purposes and should not replace professional medical advice. For serious health concerns, consult with qualified healthcare practitioners. 