// Mapping of country ISO codes (CCA2) to notable wetland tourism destinations
// country code -> list of famous wetlands, deltas, marshes, mangroves, and coastal areas
export const regionsMap: Record<string, string[]> = {
  US: ['Everglades National Park', 'Chesapeake Bay', 'Okefenokee Swamp', 'Mississippi Delta', 'San Francisco Bay'],
  IN: ['Sundarbans', 'Chilika Lake', 'Keoladeo National Park', 'Kolleru Lake', 'Loktak Lake'],
  BD: ['Sundarbans', 'Hakaluki Haor', 'Tanguar Haor', 'Nijhum Dwip', 'Ratargul Swamp Forest'],
  GB: ['The Broads (Norfolk)', 'Severn Estuary', 'Somerset Levels', 'Wicken Fen', 'Skomer Island'],
  CA: ['Point Pelee', 'Fraser River Delta', 'Wye Marsh', 'Oak Hammock Marsh', 'Long Point'],
  BR: ['Pantanal', 'Amazon Wetlands', 'Ilha do Bananal', 'Jalapão Wetlands', 'Lagoa dos Patos'],
  AU: ['Kakadu Wetlands', 'Coorong', 'Macquarie Marshes', 'Gippsland Lakes', 'Ord River Floodplain'],
  FR: ['Camargue', 'Brière Regional Park', 'Baie de Somme', 'Dombes Wetlands', 'Loire Valley Wetlands'],
  RO: ['Danube Delta', 'Cefa Pond', 'Comana Natural Park', 'Lunca Mureșului', 'Iron Gates Natural Park'],
  VN: ['Mekong Delta', 'Tram Chim National Park', 'U Minh Ha Forest', 'Phu My Wetlands', 'Xuan Thuy National Park'],
  BW: ['Okavango Delta', 'Makgadikgadi Pans', 'Chobe Swamps', 'Linyanti Swamp', 'Nxai Pan'],
  CN: ['Poyang Lake', 'Dongting Lake', 'Zhalong Nature Reserve', 'Qinghai Lake', 'Honghe Wetlands'],
  KE: ['Lake Nakuru', 'Lake Naivasha', 'Tana River Delta', 'Lake Bogoria', 'Yala Swamp'],
  MX: ['Sian Ka\'an', 'Centla Wetlands', 'Cuatro Ciénegas', 'Laguna de Términos', 'Ría Lagartos'],
  TH: ['Khao Sam Roi Yot', 'Beung Boraphet', 'Thale Noi', 'Kuan Kreng Marsh', 'Don Hoi Lot'],
  ES: ['Doñana National Park', 'Tablas de Daimiel', 'Albufera de Valencia', 'Delta del Ebro', 'Santoña Marshes'],
  IT: ['Po Delta', 'Orbetello Lagoon', 'Comacchio Lagoons', 'Massaciuccoli Lake', 'Maremma Wetlands'],
};

export default regionsMap;
