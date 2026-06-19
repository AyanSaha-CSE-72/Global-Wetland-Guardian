import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<string, string>> = {
  // Navigation
  'nav.home': { en: 'Home', bn: 'হোম' },
  'nav.dashboard': { en: 'AI Insights', bn: 'AI ইনসাইটস' },
  'nav.map': { en: 'Explore Map', bn: 'মানচিত্র অন্বেষণ' },
  'nav.alerts': { en: 'Safety Alerts', bn: 'সতর্কবার্তা' },
  'nav.chat': { en: 'AI Assistant', bn: 'AI সহায়ক' },
  'nav.about': { en: 'About', bn: 'সম্পর্কে' },
  'nav.builtBy': { en: 'Built for global wetland communities', bn: 'বিশ্বব্যাপী জলাভূমি সম্প্রদায়ের জন্য তৈরি' },

  // Home
  'home.title': { en: 'Global Wetland Guardian', bn: 'গ্লোবাল ওয়েটল্যান্ড গার্ডিয়ান' },
  'home.subtitle': { en: 'Safety & Intelligence for Everyone', bn: 'সবার জন্য নিরাপত্তা ও বুদ্ধিমত্তা' },
  'home.desc': { 
    en: 'AI-powered weather prediction, wildlife & fishing insights, and safety alerts for tourists, travelers, fishermen, wetland workers, and local communities worldwide.', 
    bn: 'বিশ্বব্যাপী পর্যটক, ভ্রমণকারী, জেলে, জলাভূমি কর্মী এবং স্থানীয় সম্প্রদায়ের জন্য AI-চালিত আবহাওয়া পূর্বাভাস, বন্যপ্রাণী ও মাছ ধরার তথ্য এবং নিরাপত্তা সতর্কতা।' 
  },
  'home.btn.predict': { en: 'Explore Insights', bn: 'ইনসাইটস অন্বেষণ করুন' },
  'home.btn.ask': { en: 'Ask AI Anything', bn: 'AI কে প্রশ্ন করুন' },
  'home.card.water': { en: 'Weather Prediction', bn: 'আবহাওয়ার পূর্বাভাস' },
  'home.card.water.desc': { en: 'AI estimates rain, visibility, and travel safety for all activities.', bn: 'সব কার্যক্রমের জন্য বৃষ্টি, দৃশ্যমানতা এবং ভ্রমণ নিরাপত্তা AI দিয়ে অনুমান করে।' },
  'home.card.storm': { en: 'Storm Alert AI', bn: 'ঝড় সতর্কতা AI' },
  'home.card.storm.desc': { en: 'Early warning for storms, wind risk, and emergency action for everyone.', bn: 'সবার জন্য ঝড়, বাতাসের ঝুঁকি ও জরুরি করণীয়ের আগাম সতর্কতা।' },
  'home.card.fish': { en: 'Fish & Wildlife', bn: 'মাছ ও বন্যপ্রাণী' },
  'home.card.fish.desc': { en: 'Fishing zones, wildlife viewing, best timing for fishermen and tourists.', bn: 'জেলে ও পর্যটকদের জন্য মাছ ধরার জোন, বন্যপ্রাণী দেখা এবং সেরা সময়।' },
  'home.card.chat': { en: 'Ask AI', bn: 'AI চ্যাট' },
  'home.card.chat.desc': { en: 'Chat in your language for instant safety, fishing, and tourism answers.', bn: 'আপনার ভাষায় প্রশ্ন করে দ্রুত নিরাপত্তা, মাছ ধরা এবং পর্যটন উত্তর পান।' },

  // Dashboard
  'dash.title': { en: 'Global Wetland Intelligence', bn: 'বিশ্বব্যাপী জলাভূমি বুদ্ধিমত্তা' },
  'dash.subtitle': { en: 'Weather, fishing, wildlife, and safety insights for everyone worldwide.', bn: 'বিশ্বব্যাপী সবার জন্য আবহাওয়া, মাছ ধরা, বন্যপ্রাণী এবং নিরাপত্তা তথ্য।' },
  'dash.location.label': { en: 'Wetland location or destination', bn: 'জলাভূমি অবস্থান বা গন্তব্য' },
  'dash.location.placeholder': { en: 'e.g. Sundarbans, Bangladesh or Everglades, USA', bn: 'যেমন: সুন্দরবন, বাংলাদেশ বা এভারগ্লেডস, USA' },
  'dash.location.help': { en: 'For tourists, fishermen, workers, and local communities worldwide.', bn: 'বিশ্বব্যাপী পর্যটক, জেলে, কর্মী এবং স্থানীয় সম্প্রদায়ের জন্য।' },
  'dash.btn.analyze': { en: 'Analyze', bn: 'বিশ্লেষণ করুন' },
  'dash.btn.analyzing': { en: 'Analyzing...', bn: 'বিশ্লেষণ চলছে...' },
  'dash.error.title': { en: 'Analysis Failed', bn: 'বিশ্লেষণ ব্যর্থ হয়েছে' },
  'dash.error.retry': { en: 'Try Again', bn: 'আবার চেষ্টা করুন' },
  'dash.noData.title': { en: 'No prediction data', bn: 'কোনো তথ্য নেই' },
  'dash.noData.desc': { en: 'Enter a wetland location and click Analyze to see AI insights.', bn: 'একটি জলাভূমির অবস্থান লিখুন এবং AI ইনসাইটস দেখতে বিশ্লেষণ করুন-এ ক্লিক করুন।' },
  'dash.result.for': { en: 'Insights for', bn: 'এর জন্য ইনসাইটস' },
  'dash.weather.title': { en: 'Weather Prediction', bn: 'আবহাওয়ার পূর্বাভাস' },
  'dash.weather.risk': { en: 'Risk level', bn: 'ঝুঁকির মাত্রা' },
  'dash.weather.summary': { en: 'Summary', bn: 'সারাংশ' },
  'dash.weather.rain': { en: 'Rain outlook', bn: 'বৃষ্টির সম্ভাবনা' },
  'dash.weather.window': { en: 'Best time window', bn: 'সেরা সময়' },
  'dash.weather.advice': { en: 'Safety advice', bn: 'নিরাপত্তা পরামর্শ' },
  'dash.fish.title': { en: 'Fish & Wildlife', bn: 'মাছ ও বন্যপ্রাণী' },
  'dash.fish.activity': { en: 'Activity level', bn: 'কার্যকলাপের মাত্রা' },
  'dash.fish.species': { en: 'Species', bn: 'প্রজাতি' },
  'dash.fish.zones': { en: 'Best zones', bn: 'সেরা এলাকা' },
  'dash.fish.time': { en: 'Best time', bn: 'সেরা সময়' },
  'dash.fish.strategy': { en: 'Tips & Strategy', bn: 'টিপস ও কৌশল' },
  'dash.storm.title': { en: 'Storm Alert', bn: 'ঝড় সতর্কতা' },
  'dash.storm.alert': { en: 'Alert level', bn: 'সতর্কতার মাত্রা' },
  'dash.storm.wind': { en: 'Wind risk', bn: 'বাতাসের ঝুঁকি' },
  'dash.storm.window': { en: 'Danger window', bn: 'ঝুঁকির সময়' },
  'dash.storm.action': { en: 'Action steps', bn: 'করণীয়' },
  'dash.storm.evacuation': { en: 'Safety advice', bn: 'নিরাপত্তা পরামর্শ' },
  
  // Dashboard Cards
  'card.water.title': { en: 'Water Level Prediction', bn: 'পানির স্তরের পূর্বাভাস' },
  'card.water.risk': { en: 'Risk Level', bn: 'ঝুঁকির মাত্রা' },
  'card.water.prob': { en: 'Rise Probability (24h)', bn: 'পানি বাড়ার সম্ভাবনা (২৪ ঘণ্টা)' },
  'card.storm.title': { en: 'Storm & Wind Risk', bn: 'ঝড় ও বাতাসের ঝুঁকি' },
  'card.storm.likelihood': { en: 'Likelihood', bn: 'সম্ভাবনা' },
  'card.storm.wind': { en: 'Wind Dir', bn: 'বাতাসের দিক' },
  'card.storm.advice': { en: 'Advice:', bn: 'পরামর্শ:' },
  'card.fish.title': { en: 'Wildlife Activity', bn: 'বন্যপ্রাণী কার্যকলাপ' },
  'card.fish.activity': { en: 'Activity Level', bn: 'বিচরণ মাত্রা' },
  'card.fish.zone': { en: 'Best Zone:', bn: 'সেরা এলাকা:' },
  'card.fish.time': { en: 'Prime Time:', bn: 'উপযুক্ত সময়:' },
  'card.route.title': { en: 'Route Safety Analyzer', bn: 'নিরাপদ রুট বিশ্লেষক' },
  'card.route.score': { en: 'Safety Score', bn: 'নিরাপত্তা স্কোর' },
  'card.route.sub': { en: 'Based on wind & waves', bn: 'বাতাস ও ঢেউয়ের ওপর ভিত্তি করে' },
  'card.route.path': { en: 'Safe Path:', bn: 'নিরাপদ পথ:' },

  // Map
  'map.title': { en: 'Interactive Wetland Map', bn: 'ইন্টারঅ্যাক্টিভ জলাভূমি মানচিত্র' },
  'map.subtitle': { en: 'Explore wetland locations with AI geography, fishing, tourism, and local insights.', bn: 'AI ভূগোল, মাছ ধরা, পর্যটন এবং স্থানীয় তথ্য সহ জলাভূমি অবস্থান অন্বেষণ করুন।' },
  'map.insights': { en: 'Location Insights (Google Maps)', bn: 'অবস্থানের তথ্য (গুগল ম্যাপ)' },
  'map.select': { en: 'Enter a destination to view details.', bn: 'বিস্তারিত দেখতে একটি গন্তব্য লিখুন।' },
  'map.loading': { en: 'Loading Google Maps data...', bn: 'গুগল ম্যাপের তথ্য লোড হচ্ছে...' },
  'map.sources': { en: 'Google Maps Sources', bn: 'গুগল ম্যাপের সূত্র' },

  // Alerts
  'alert.title': { en: 'Personalized Safety Advisory', bn: 'ব্যক্তিগত নিরাপত্তা পরামর্শ' },
  'alert.subtitle': { en: 'Get custom AI safety advice for tourists, fishermen, workers, and travelers worldwide.', bn: 'বিশ্বব্যাপী পর্যটক, জেলে, কর্মী এবং ভ্রমণকারীদের জন্য কাস্টম AI নিরাপত্তা পরামর্শ নিন।' },
  'alert.form.name': { en: 'Your Name', bn: 'আপনার নাম' },
  'alert.form.phone': { en: 'Phone Number', bn: 'মোবাইল নম্বর' },
  'alert.form.location': { en: 'Destination / Location', bn: 'গন্তব্য / অবস্থান' },
  'alert.form.transport': { en: 'Transport Type', bn: 'যানবাহনের ধরন' },
  'alert.btn.gen': { en: 'Generate Safety Advisory', bn: 'নিরাপত্তা পরামর্শ তৈরি করুন' },
  'alert.btn.generating': { en: 'Generating...', bn: 'তৈরি হচ্ছে...' },
  'alert.result.title': { en: 'Your Safety Advisory', bn: 'আপনার নিরাপত্তা পরামর্শ' },
  'alert.share': { en: 'Share', bn: 'শেয়ার করুন' },
  'alert.copied': { en: 'Copied!', bn: 'কপি হয়েছে!' },
  'alert.save': { en: 'Save as PDF', bn: 'PDF সংরক্ষণ করুন' },

  // About
  'about.title': { en: 'About Global Wetland Guardian', bn: 'গ্লোবাল ওয়েটল্যান্ড গার্ডিয়ান সম্পর্কে' },
  'about.subtitle': { en: 'Empowering wetland tourists, explorers, and nature enthusiasts worldwide with AI safety tools.', bn: 'AI নিরাপত্তা টুল দিয়ে বিশ্বব্যাপী জলাভূমি পর্যটক, অন্বেষক ও প্রকৃতি প্রেমীদের শক্তিশালী করা।' },
  'about.sec1.title': { en: 'Wetland Regions Worldwide', bn: 'বিশ্বব্যাপী জলাভূমি অঞ্চল' },
  'about.sec1.desc': { 
    en: 'Wetlands, deltas, mangroves, and floodplains are unique ecosystems around the world. They offer incredible biodiversity and tourism opportunities but can be unpredictable and require safety awareness.', 
    bn: 'জলাভূমি, ডেল্টা, ম্যানগ্রোভ ও বন্যাপ্রবণ সমভূমি বিশ্বের নানা দেশে অনন্য ইকোসিস্টেম। এগুলো অসাধারণ জীববৈচিত্র্য ও পর্যটন সুযোগ দেয় তবে অনির্দেশ্য হতে পারে এবং নিরাপত্তা সচেতনতা প্রয়োজন।' 
  },
  'about.sec2.title': { en: 'Why Tourists Need Safety Tools', bn: 'পর্যটকদের নিরাপত্তা টুল কেন প্রয়োজন?' },
  'about.sec2.desc': { 
    en: 'Sudden weather changes, wildlife encounters, and changing water conditions can create risks for tourists and explorers in wetland areas every year.', 
    bn: 'হঠাৎ আবহাওয়া পরিবর্তন, বন্যপ্রাণীর মুখোমুখি হওয়া, এবং পানির পরিবর্তনশীল অবস্থা প্রতি বছর জলাভূমি এলাকার পর্যটক ও অন্বেষকদের জন্য ঝুঁকি সৃষ্টি করে।' 
  },
  'about.sec3.title': { en: 'How AI Helps Worldwide', bn: 'বিশ্বব্যাপী AI কীভাবে সাহায্য করে?' },
  'about.sec3.desc': { 
    en: 'We analyze data to answer simple questions anywhere: Is it safe now? What wildlife can I see? Which route is best for exploration?', 
    bn: 'আমরা যেকোনো জায়গার জন্য সহজ প্রশ্নের উত্তর দিতে ডেটা বিশ্লেষণ করি: এখন কি নিরাপদ? কোন বন্যপ্রাণী দেখতে পাবো? অন্বেষণের জন্য কোন পথটি সবচেয়ে ভালো?' 
  },

  // Chat
  'chat.title': { en: 'AI Assistant', bn: 'AI সহায়ক' },
  'chat.subtitle': { en: 'Ask tourism, safety, and wildlife questions in your language', bn: 'আপনার ভাষায় পর্যটন, নিরাপত্তা এবং বন্যপ্রাণী সম্পর্কিত প্রশ্ন করুন' },
  'chat.placeholder': { en: 'Example: What wildlife can I see here?', bn: 'উদাহরণ: এখানে কী ধরনের বন্যপ্রাণী দেখতে পাবো?' },
  'chat.welcome': { 
    en: 'Hello! I am the Global Wetland Assistant. How can I help you? You can ask about weather, wildlife, tourism activities, or safety.', 
    bn: 'হ্যালো! আমি গ্লোবাল ওয়েটল্যান্ড অ্যাসিস্ট্যান্ট। কীভাবে সাহায্য করতে পারি? আপনি আবহাওয়া, বন্যপ্রাণী, পর্যটন কার্যক্রম বা নিরাপত্তা নিয়ে প্রশ্ন করতে পারেন।' 
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    // when 'auto' is selected we keep UI strings in English fallback
    const langToUse = language === 'auto' ? 'en' : language;
    return translations[key]?.[langToUse] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
