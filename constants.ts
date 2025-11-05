
import { Language } from './types';

export const LANGUAGES: Language[] = [
  { code: 'pt-BR', name: 'Português do Brasil' },
  { code: 'en-US', name: 'Inglês Americano' },
  { code: 'en-GB', name: 'Inglês Britânico' },
  { code: 'es', name: 'Espanhol' },
  { code: 'fr', name: 'Francês' },
  { code: 'pl', name: 'Polonês' },
  { code: 'it', name: 'Italiano' },
  { code: 'LIBRAS', name: 'Libras' },
];

export const PASSWORD_CRITERIA = {
  minLength: 6,
  uppercase: true,
  lowercase: true,
  number: true,
  symbol: true,
};
