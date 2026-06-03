import{r as g,l,o as m,q as p,s as w,f as b}from"./index.esm-e4Qj8S3B.js";var v="firebase",A="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */g(v,A,"app");const E={apiKey:"AIzaSyC9E200_OabRASroocxLHt7kjawi6zi0-U",authDomain:"hofladen-28da1.firebaseapp.com",projectId:"hofladen-28da1",storageBucket:"hofladen-28da1.firebasestorage.app",messagingSenderId:"611524304119",appId:"1:611524304119:web:6a12d100042034fe2647f2"},S=l(E);let i=null,n=null;try{i=b(S)}catch(t){n=t}function a(){if(n)throw n;if(!i)throw new Error("Firebase Auth ist nicht verfügbar");return i}function k(){return n}function B(t,r){return w(a(),t,r)}function y(){return p(a())}function D(t){return m(a(),t)}const h={"auth/invalid-credential":"E-Mail oder Passwort ist falsch.","auth/user-not-found":"Kein Konto mit dieser E-Mail-Adresse gefunden.","auth/wrong-password":"Falsches Passwort.","auth/too-many-requests":"Zu viele Anmeldeversuche. Bitte warte einige Minuten und versuche es erneut.","auth/network-request-failed":"Netzwerkfehler. Bitte überprüfe deine Internetverbindung.","auth/invalid-email":"Ungültiges E-Mail-Format.","auth/user-disabled":"Dieses Konto wurde deaktiviert.","auth/invalid-api-key":"Firebase Auth ist nicht konfiguriert (API-Key fehlt)."},f={"permission-denied":"Zugriff verweigert. Bitte melde dich erneut an.","not-found":"Die angefragten Daten wurden nicht gefunden.",unavailable:"Der Dienst ist momentan nicht erreichbar. Bitte versuche es später erneut.",aborted:"Die Operation wurde abgebrochen. Bitte versuche es erneut."};function F(t,r="Ein unerwarteter Fehler ist aufgetreten."){var s,u,o,d,c;if(!t)return r;if(t instanceof Error){const e=t;return e.code&&h[e.code]?h[e.code]:e.code&&f[e.code]?f[e.code]:(s=e.message)!=null&&s.includes("permission-denied")?"Zugriff verweigert. Bitte melde dich erneut an.":(u=e.message)!=null&&u.includes("Failed to fetch dynamically imported module")||(o=e.message)!=null&&o.includes("Loading chunk")?"Seite konnte nicht geladen werden. Bitte lade die Seite neu.":(d=e.message)!=null&&d.toLowerCase().includes("network")||(c=e.message)!=null&&c.toLowerCase().includes("fetch")?"Netzwerkfehler. Bitte überprüfe deine Internetverbindung.":e.message||r}return r}export{S as a,F as b,y as c,k as g,D as o,B as s};
