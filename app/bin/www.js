"use strict";
// 서버를 띄어주는 코드
const app = require("../app");

const PORT = process.env.PORT || 3000;

// 서버를 실행시키위해 여기를 실행시켜야한다.
// Ex -> noce ./bin/www.js
app.listen(PORT, () => {
  console.log("서버가동");
});
