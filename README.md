# 🌊 global-wetland-guardian
### *Satellite-Assisted Wetland Intelligence & AI Early Warning Dashboard*
**Category:** AI • Climate Resilience • Wetland Monitoring • Early Warning Systems

<p align="center">
  <img src="https://img.shields.io/badge/AI%20Model-Gemini%20%7C%20LLM-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Wetland%20Insight-Weather%20%7C%20Fish%20%7C%20Storm-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/Interactive%20Map-Google%20Maps-green?style=for-the-badge">
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

## 🚀 Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Create an environment file
Create a `.env.local` file in the project root and add one of these keys:

```bash
GEMINI_API_KEY=your_api_key_here
```

or

```bash
VITE_GEMINI_API_KEY=your_api_key_here
```

### 3. Run the project
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

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
 
