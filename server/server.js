const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("../client/dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));


// request.onsuccess = (event) => {
//   // Do something with request.result!
// };
// let db;
// const request = indexedDB.open("MyTestDatabase");
// request.onerror = (event) => {
//   console.error("Why didn't you allow my web app to use IndexedDB?!");
// };
// request.onsuccess = (event) => {
//   db = event.target.result;
// };
// db.onerror = (event) => {
//   // Generic error handler for all errors targeted at this database's
//   // requests!
//   console.error(`Database error: ${event.target.errorCode}`);
// };

// // This event is only implemented in recent browsers
// request.onupgradeneeded = (event) => {
//   // Save the IDBDatabase interface
//   const db = event.target.result;

//   // Create an objectStore for this database
//   const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
// };
