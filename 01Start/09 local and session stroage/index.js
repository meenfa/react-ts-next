localStorage.setItem("token","jchacvahcahschashhhsh")
console.log(localStorage.getItem("token"));
localStorage.clear();

sessionStorage.setItem("token","dshfcahfcahchc")
console.log(sessionStorage.getItem("token"));


// 1. Local Storage

// Stores data in the browser permanently (until manually cleared).

// Data persists even after closing the browser.

// Stores data as key-value strings.

// 2. Session Storage

// Stores data temporarily for one browser tab/session.

// Data is cleared when the tab or browser is closed.

// Also stores data as key-value strings.

// | Feature       | Local Storage | Session Storage  |
// | ------------- | ------------- | ---------------- |
// | Lifetime      | Permanent     | Tab/session only |
// | Scope         | All tabs      | Current tab only |
// | Storage limit | ~5–10 MB      | ~5 MB            |

// Quick Tip for React

// Local storage is often used to persist login info, themes, or settings.

// Session storage is used for temporary session data, like a one-time token.