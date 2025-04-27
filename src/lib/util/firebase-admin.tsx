import admin from "firebase-admin";
import serviceAccount  from "../../../finance-ai-app-key.json";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any),
  });
}

export default admin;
