# React with Mock Service Worker

## Setup

1. yarn add msw --dev
2. npx msw init public/ --save
3. mkdir src/mocks
4. touch src/mocks/handlers.js

```js
import { rest } from "msw";
export const handlers = [
  rest.get("/feed", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(["Angular", "ReactJS", "VueJS", "Flutter"])
    );
  }),
];
```

5. touch src/mocks/browser.js

```js
touch src/mocks/browser.js
import { setupWorker } from "msw";
import { handlers } from "./handlers";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
```

6. edit index.js file

```js
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}
```

7. yarn start and verify in console
   [MSW] Mocking enabled
