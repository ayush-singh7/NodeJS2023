// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};



import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDXfdap21vUkgmHFwmDHXFmPg587dI8c48",
  authDomain: "hrms-d948a.firebaseapp.com",
  projectId: "hrms-d948a",
  storageBucket: "hrms-d948a.appspot.com",
  messagingSenderId: "83492840102",
  appId: "1:83492840102:web:3bc9e479fab275410bca67",
  measurementId: "G-GJNCBV53RY"
};

// Initialize Firebase
// const analytics = getAnalytics(app);



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
