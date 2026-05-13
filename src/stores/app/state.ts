import { DEFAULT_LANGUAGE } from 'config/constants';
import type { State } from './types';

const initialState: State = {
  locale: DEFAULT_LANGUAGE,
  successTypeDialog: null,
};

export default initialState;
