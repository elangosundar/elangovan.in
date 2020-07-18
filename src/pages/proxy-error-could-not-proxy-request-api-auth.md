---
title: Proxy error - Could not proxy request /api/auth from localhost:3000 to localhost:5000
date: '2020-06-15'
spoiler: ReactJs Proxy Error
categories: ["development", "api"]
---

Proxy error: Could not proxy request /api/auth from localhost:3000 to localhost:5000 in reactjs application.

I have searched many options to resolve this proxy issue and finally found a solutions.

### Solution for proxy error api request

* Make sure your backend node server is running properly or not.
* To check concurrently configure your client and server.
* Another reason is, when you save something in your client, the backend server also reloads. During that time, it cannot process any requests. So that will add the `--ignore client` in server/backend package.json,

### Sample code snippet

```
"scripts": {
    "start": "node server",
    "server": "nodemon server --ignore client",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
},
```
