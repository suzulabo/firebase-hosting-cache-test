import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const httpsRequest = functions.https.onRequest((req, res) => {
  console.log(req.path);

  if (req.path.startsWith("/functions404Cache")) {
    res.setHeader("Cache-Control", "public, max-age=60, s-maxage=30");
    res.sendStatus(404);
    return;
  }

  if (req.path.startsWith("/functions404")) {
    res.sendStatus(404);
    return;
  }

  if (req.path.startsWith("/functionsCache")) {
    res.setHeader("Cache-Control", "public, max-age=60, s-maxage=30");
  }
  res.send("hello");
});
