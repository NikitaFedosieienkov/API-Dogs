export const localStorageHelper = {
    setItem: (itemKey, itemValue) => localStorage.setItem(itemKey, JSON.stringify(itemValue)),
    getItem: (itemKey) => JSON.parse(localStorage.getItem(itemKey)),
};
