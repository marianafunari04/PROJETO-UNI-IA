
export enum AppScreen {
  SPLASH,
  LOGIN,
  SIGNUP,
  EDUCATIONAL,
  MAIN,
  SETTINGS,
  HELP_AND_SUPPORT,
  CHATBOT,
}

export interface User {
  username: string;
  email: string;
  profilePicture?: string;
  country?: string;
  birthDate?: string;
  gender?: string;
  knownLanguages?: string[];
  notificationLanguage: string;
}

export interface Language {
  code: string;
  name: string;
}

export interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}
