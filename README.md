# 🌊 Global Wetland Guardian AI
### *Satellite-Assisted Wetland Intelligence & AI Early Warning Dashboard*
**Category:** AI • Climate Resilience • Wetland Monitoring • Early Warning Systems

<p align="center">
  <img src="https://img.shields.io/badge/AI%20Model-Gemini%20%7C%20LLM-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Wetland%20Insight-Weather%20%7C%20Fish%20%7C%20Storm-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/Interactive%20Map-Google%20Maps-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Frontend-React%20%7C%20TypeScript%20%7C%20Vite-cyan?style=for-the-badge">
  <img src="https://img.shields.io/badge/Styling-Tailwind%20CSS-purple?style=for-the-badge">
</p>

---

## 📝 Abstract
This project presents **global-wetland-guardian**, a comprehensive wetland intelligence dashboard built to serve **tourists, travelers, fishermen, wetland workers, and local communities** worldwide. The system provides AI-powered insights for haor, river basin, delta, coastal, and wetland regions globally, combining a **country-and-location selector**, **Gemini-powered wetland analysis**, **AI chat assistance**, and **interactive map previews** to generate location-specific guidance for:

- **Safety Information** - Weather, storm alerts, and water conditions
- **Weather Predictions** - Rain, visibility, and safe travel/work windows
- **Navigation Guidance** - Safe routes and warning points
- **Fishing & Wildlife Insights** - Fish activity for fishermen, wildlife viewing for tourists
- **Tourism Recommendations** - Best viewing zones, optimal timing
- **Local Insights** - Community areas, ecosystem information
- **Emergency Assistance** - Safety advisories and evacuation guidance

Rather than serving a single user group, the application adapts its guidance based on user needs - whether you're a tourist exploring, a fisherman working, or a local community member living in wetland areas.

---

## 🔍 Introduction
Wetland regions worldwide support diverse communities - from fishermen catching fish, to tourists exploring nature, to local workers maintaining ecosystems, and communities living in these areas. Each group faces unique challenges from rapidly changing environmental conditions.

**Global Wetland Guardian** is built to serve everyone with:

- **For Tourists**: Wildlife viewing zones, safe travel windows, tourism safety
- **For Fishermen**: Fish activity, productive fishing zones, best fishing times
- **For Workers**: Safe working conditions, route safety, weather advisories
- **For Local Communities**: Emergency alerts, evacuation guidance, local insights
- **For Travelers**: Navigation guidance, transport safety, destination information

The app helps all users by:
- Selecting any wetland location worldwide
- Viewing the place on an embedded map with ecosystem info
- Getting AI-powered weather, fishing, wildlife, and safety insights
- Generating personalized safety advisories
- Chatting with an AI assistant about any wetland-related questions

The project is designed for global use, supporting multiple languages and serving wetland areas from the Sundarbans to the Everglades, Pantanal to Okavango Delta.

---

## 🎯 Problem Statement
Wetland areas worldwide face common challenges that affect diverse user groups:

- **For All Users**: Forecasts are too broad and not location-specific
- **For Fishermen**: Fishing safety and fish activity guidance is often delayed or unavailable
- **For Tourists**: Wildlife viewing information and tourism safety is limited
- **For Workers**: Work safety conditions and route guidance needs improvement
- **For Communities**: Quick access to emergency guidance and local insights is difficult
- **Global Issue**: Limited support for multilingual, mobile-friendly advisory tools serving all user types

**Goal:** Build an AI-powered dashboard that converts any selected wetland location into actionable, location-aware guidance for tourists, fishermen, workers, and local communities worldwide.

---

## 🧪 Research Methodology

### **1. Location Selection Layer**
- Country auto-detection and manual country typing
- Region/location selection from mapped wetland areas when available
- Fallback free-text location input for custom places

### **2. AI Inference Layer**
- Gemini-based comprehensive wetland analysis
- Multi-purpose prompts serving all user types
- Location-aware weather, fishing, wildlife, tourism, and safety outputs
- Conversational AI support for personalized follow-up questions

### **3. User Advisory Layer**
- Personalized safety alert generation for all user types
- Fishing conditions for fishermen
- Wildlife viewing info for tourists
- Work safety for wetland workers
- Community safety for locals
- PDF export of advisory content
- Copy/share support for quick distribution

### **4. Visualization Layer**
- Embedded Google Maps preview of the selected location
- Clean dashboard cards and structured insight panels
- Dark/light theme presentation

---

## 🏗 System Architecture

```
                 ┌──────────────────────────────┐
                 │ Country / Location Selector  │
                 └──────────────┬───────────────┘
                                │
                     ┌──────────▼──────────┐
                     │   Google Maps View   │
                     └──────────┬──────────┘
                                │
              ┌─────────────────▼─────────────────┐
              │        Gemini AI Services         │
              └──────────┬────────────┬───────────┘
                         │            │
          ┌──────────────▼───┐  ┌────▼────────────┐
          │ Wetland Insights  │  │ AI Chat Support │
          │ Weather / Fish /  │  │                │
          │ Storm Analysis    │  └────────────────┘
          └──────────────┬────┘
                         │
               ┌─────────▼─────────┐
               │ Alert & PDF Output │
               └─────────┬─────────┘
                         │
               ┌─────────▼─────────┐
               │ Interactive Dashboard│
               └─────────────────────┘
```

---

## 📊 Key Results
The app generates structured AI outputs serving multiple user groups:

| Output Type | Serves | Purpose |
|------------|--------|---------|
| Weather Prediction | Everyone | Local conditions, risk level, safe time windows |
| Fish & Wildlife | Fishermen & Tourists | Fish activity for fishing, wildlife viewing zones |
| Storm Alert AI | Everyone | Storm safety, wind risk, evacuation guidance |
| Safety Advisory | All Users | Personalized alerts for tourists, fishermen, workers, locals |
| Navigation Guide | Travelers & Workers | Safe routes, warning points, transport safety |

The system adapts content based on user needs - whether for fishing, tourism, work, or community safety.

---

## ⭐ Features
- ✔ **Global Coverage**: Works with wetlands worldwide (Sundarbans, Everglades, Pantanal, Okavango, etc.)
- ✔ **Multi-User Support**: Serves tourists, fishermen, workers, and local communities
- ✔ **Country + Wetland Location Selector**
- ✔ **Comprehensive AI Insights**:
  - Weather predictions for all activities
  - Fish activity for fishermen
  - Wildlife viewing for tourists
  - Safety guidance for workers
  - Community alerts for locals
- ✔ **Interactive Map Preview with Ecosystem Info**
- ✔ **AI Chat Assistant** for personalized wetland questions
- ✔ **Personalized Safety Advisories** for all user types
- ✔ **PDF Export and Share Support**
- ✔ **Multilingual UI Support** (English, Bengali, expandable)
- ✔ **Dark Mode Friendly Design**
- ✔ **Modern React + TypeScript Interface**

---

## 🖼️ Project Gallery

<img width="1536" height="1024" alt="WhatsApp Image 2026-07-15 at 2 14 10 PM" src="https://github.com/user-attachments/assets/c0b7b385-576c-416d-b655-b8ac961babe3" />


<p align="center">
  
</p>

<p align="center">
 
</p>

---

## 🧰 Tech Stack
- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **AI Integration:** Gemini API via `@google/genai`
- **Routing:** React Router
- **Utilities:** `lucide-react`, `jspdf`

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Google Gemini API Key

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/Global-Wetland-Guardian.git
cd Global-Wetland-Guardian
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React 19.2.0
- TypeScript 5.8.2
- Vite 6.2.0
- @google/genai 1.30.0
- Tailwind CSS 3.4.19
- React Router DOM 7.9.6
- jsPDF 2.5.2
- Lucide React 0.555.0

### Step 3: Configure Environment Variables
Create a `.env.local` file in the project root using the provided template:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your Gemini API key:

```bash
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

**Get your API key from:** https://aistudio.google.com/app/apikey

### Step 4: Run the Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Step 5: Build for Production
```bash
npm run build
```

The optimized production files will be in the `dist/` directory.

### Step 6: Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Development Workflow

### Project Structure
```
Global-Wetland-Guardian/
├── components/          # React components
│   ├── CountryLocationSelector.tsx
│   └── Layout.tsx
├── contexts/            # React contexts
│   └── LanguageContext.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Dashboard.tsx
│   ├── Chat.tsx
│   ├── Map.tsx
│   ├── Alerts.tsx
│   └── About.tsx
├── services/           # API services
│   ├── gemini.ts       # Gemini AI integration
│   └── countryRegions.ts
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── tailwind.config.js  # Tailwind configuration
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Environment Variables
- `VITE_GEMINI_API_KEY` - Required for Gemini AI API access

---

## 🧠 AI Integration Details

### Gemini API Usage
The project uses Google's Gemini AI model (gemini-2.5-flash) for:

1. **Wetland Prediction Analysis**
   - Water level risk assessment
   - Storm and wind risk prediction
   - Fish and wildlife activity analysis
   - Route safety scoring

2. **Safety Alert Generation**
   - Personalized advisories based on user type
   - Transport-specific recommendations
   - Emergency guidance

3. **Interactive Chat Assistant**
   - Context-aware wetland Q&A
   - Multi-language support (English, Bengali)
   - Real-time safety information

4. **Map Integration**
   - Google Maps location analysis
   - Ecosystem information extraction
   - Tourism and fishing zone identification

### API Rate Limiting & Error Handling
- Exponential backoff retry mechanism (max 3 retries)
- Comprehensive error classification
- User-friendly error messages
- Network error recovery

---

## 🌍 Supported Languages
The application supports 50+ languages including:
- English, Bengali, Hindi, Spanish, French
- Chinese, Japanese, Korean, Arabic
- Portuguese, Russian, German, Italian
- And many more regional languages

---

## 🔒 Security Considerations
- API keys are stored in environment variables (never committed to git)
- .env.local files are gitignored
- No sensitive data is stored in browser localStorage
- All API calls are made client-side with proper error handling

---

## 🐛 Troubleshooting

For common issues and solutions, please refer to [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

Common issues:
- **Network Error in Chat**: Check API key configuration and restart dev server
- **API Key Missing**: Ensure .env.local file exists with valid API key
- **Build Errors**: Clear node_modules and reinstall dependencies

---

## 📄 License
This project is open source and available under the MIT License.

---

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📞 Support
For issues and questions, please open an issue on GitHub.

---

## 📌 How It Works
1. Open the dashboard or map page
2. Select a country and wetland/location from anywhere in the world
3. The app builds a comprehensive location-aware prompt for Gemini AI
4. AI analyzes conditions for multiple user needs:
   - Fishing conditions for fishermen
   - Wildlife viewing for tourists
   - Safety conditions for workers
   - Community alerts for locals
5. Users receive tailored insights based on their activities
6. Generate personalized safety advisory with transport type
7. Review, copy, share, or export the advisory as PDF

---

## 📈 Future Work
- District-level micro-risk mapping
- Direct SMS or WhatsApp alert integration
- Offline advisory mode for low-connectivity regions
- More satellite and weather data sources
- Community reporting and verification layer

---

## 🏁 Conclusion
Global Wetland Guardian demonstrates how AI can serve diverse user groups in wetland and coastal regions worldwide. By combining global location selection, comprehensive insights for tourists, fishermen, workers, and communities, and Gemini-powered advisory generation, the project provides an accessible way to understand weather, fish activity, wildlife, and storm risk for any wetland area.

The system serves:
- **Tourists** exploring wetland ecosystems
- **Fishermen** working in wetland waters
- **Workers** maintaining wetland areas
- **Local Communities** living in wetland regions
- **Travelers** passing through wetland areas

Perfect for research demos, climate-resilience prototypes, tourism safety platforms, and community-facing wetland intelligence dashboards worldwide.

---

## 🖊️ Citation
**global-wetland-guardian (2026). Comprehensive AI-Powered Wetland Intelligence Dashboard Serving Tourists, Fishermen, Workers, and Communities Worldwide.**

---
 
