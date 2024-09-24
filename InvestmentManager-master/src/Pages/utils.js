// src/utils.js
export const handleError = (message) => {
    console.error(message);
    alert(`Error: ${message}`); // Or use any toast notification system
};

export const handleSuccess = (message) => {
    console.log(message);
    alert(`Success: ${message}`);
};
