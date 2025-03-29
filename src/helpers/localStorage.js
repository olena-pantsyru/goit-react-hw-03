export const addToLocalStorage = (key, value) => {
  try {
    const normalizeState = JSON.stringify(value);
    window.localStorage.setItem(key, normalizeState);
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return null;
  }
};