export interface PredictionData {
  waterLevel: {
    riskLevel: 'Low' | 'Medium' | 'High';
    description: string;
    riseProbability: string;
  };
  storm: {
    likelihood: string;
    windDirection: string;
    advice: string;
  };
  fish: {
    movement: 'High' | 'Medium' | 'Low';
    bestTime: string;
    zone: string;
  };
  route: {
    safetyScore: number;
    warningPoints: string[];
    safePath: string;
  };
}

export interface WetlandInsightData {
  location: string;
  weatherPrediction: {
    riskLevel: 'Low' | 'Medium' | 'High';
    summary: string;
    rainfallChance: string;
    bestWindow: string;
    safetyAdvice: string;
  };
  fishInsight: {
    activityLevel: 'High' | 'Medium' | 'Low';
    species: string;
    bestTime: string;
    bestZones: string;
    lureAdvice: string;
  };
  stormAlert: {
    alertLevel: 'Low' | 'Medium' | 'High';
    windRisk: string;
    likelyWindow: string;
    action: string;
    evacuationAdvice: string;
  };
}

export interface UserProfile {
  name: string;
  phone: string;
  location: string;
  transportType: string;
  userType?: 'tourist' | 'fisherman' | 'worker' | 'local' | 'traveler';
}

export interface GroundingSource {
  title: string;
  uri: string;
  type: 'map' | 'web';
}

export interface MapData {
  summary: string;
  sources: GroundingSource[];
}

export const WETLAND_LIST = [
  'Sundarbans (Bangladesh/India)',
  'Everglades (USA)',
  'Pantanal (Brazil)',
  'Okavango Delta (Botswana)',
  'Camargue (France)',
  'Kakadu Wetlands (Australia)',
  'Danube Delta (Romania)',
  'Mekong Delta (Vietnam)',
  'Amazon Wetlands (Brazil)',
  'Chilika Lake (India)'
];

export type Language = string;