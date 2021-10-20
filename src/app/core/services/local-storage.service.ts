export class LocalStorageService {
  constructor() {}

  setItemToLocalStorage(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  getItemFromLocalStorage(key: string): string | null {
    return window.localStorage.getItem(key);
  }
}
