import { getLocalStorage, setLocalStorage } from './storage';

export function getLoggedAccounts(): Auth.LoggedAccount[] {
  return getLocalStorage('loggedAccounts');
}

export function setLoggedAccounts(accounts: Auth.LoggedAccount[]): void {
  return setLocalStorage('loggedAccounts', accounts);
}
