const admin = require('firebase-admin');

admin.initializeApp({
    // The SDK will automatically find the credentials via the environment variable.
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = { db, auth };
