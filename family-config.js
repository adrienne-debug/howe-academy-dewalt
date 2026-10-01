// ── PER-FAMILY DEPLOYMENT CONFIG — DEWALT FAMILY ────────────────────────────
// This is the ONLY file that differs from the main howe-academy codebase.
// Brand stays "Howe Academy"; this file tells the app WHICH family it serves:
// their own Firebase project and the starting kid roster.
//
// The roster below is only the FIRST-BOOT default — once the family saves names
// in Admin → Settings → Family, the app reads settings/family from their
// database and this list is ignored. Colors are editable there too.
//
// notebook.template / notebook.gradeLabel are INERT: nothing reads them yet.
// notebooks.js still hardcodes its generator registry to the Howe kid ids, so
// the Notebook tab is not usable for this family until the grade-template
// mapping layer is built. They're recorded here so that work has its input.
window.HA_FAMILY = {
  familyId: "dewalt",
  familyName: "Dewalt Family",
  // no sitterName → the sitter tab is hidden for this family
  windowText: "School day",   // first-boot schedule-window banner; real hours are set in-app

  firebase: {
    apiKey:"AIzaSyDCQSbxOmwTK36cWB8fwXlNxks-lzseW00",
    authDomain:"howe-academy-dewalt.firebaseapp.com",
    databaseURL:"https://howe-academy-dewalt-default-rtdb.firebaseio.com",
    projectId:"howe-academy-dewalt",
    storageBucket:"howe-academy-dewalt.firebasestorage.app",
    messagingSenderId:"658752846441",
    appId:"1:658752846441:web:78d5ca6abbbdf6c82b80f8"
  },

  // All four are school-age (180-day attendance, standard drills track).
  roster: [
    {id:"taylor",   name:"Taylor",   color:"#1e3a5f", badge:"#dbeafe", schoolAge:true,
     notebook:{template:null,    gradeLabel:"7th"}},   // no 7th-grade template exists yet
    {id:"makenzie", name:"Makenzie", color:"#2d5a3d", badge:"#dcfce7", schoolAge:true,
     notebook:{template:"fourth", gradeLabel:"4th"}},
    {id:"andrew",   name:"Andrew",   color:"#5b3a8c", badge:"#ede9fe", schoolAge:true,
     notebook:{template:null,    gradeLabel:"2nd"}},   // no 2nd-grade template exists yet
    {id:"caleb",    name:"Caleb",    color:"#c45e1a", badge:"#ffedd5", schoolAge:true,
     notebook:{template:"first",  gradeLabel:"1st"}}
  ]
};
