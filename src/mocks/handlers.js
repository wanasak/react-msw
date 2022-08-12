import { rest } from "msw";

export const handlers = [
  rest.get("/feed", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(["Angular", "ReactJS", "VueJS"]));
  }),
];
