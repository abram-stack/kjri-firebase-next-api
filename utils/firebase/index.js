const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
     projectId: serviceAccount.project_id,
    storageBucket: "kjri-generator-letter.appspot.com"
  });
} catch (error) {
  admin.app();
}

const db = admin.firestore();
const auth = admin.auth();
const storage = admin.storage();

export { db, auth, storage };
