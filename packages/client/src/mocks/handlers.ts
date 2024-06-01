// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

const domain1 = {
  domain: "nicholasjohnson.com",
  subdomains: ["www", "blog"],
  tags: ["personal", "blog", "portfolio"],
};

const domain2 = {
  domain: "perfectgraphpaper.com",
  subdomains: ["www", "blog"],
  tags: ["personal", "blog"],
};

const user = {
  firstName: "John",
  lastName: "Maverick",
  email: "jm@google.com",
};

export const handlers = [
  http.get("/login", () => {
    return HttpResponse.json({
      userId: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
    });
  }),

  http.get("/user/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.json({ id, ...user1 }));
  }),

  http.get("/user/:id/properties", (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json({
        id,
        properties: [domain1, domain2],
      })
    );
  }),

  http.get("/property/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.json({ id, ...domain1 }));
  }),

  http.get("/property/:id/paths", (req, res, ctx) => {
    const { id } = req.params;
    return res(ctx.json({ id, ...domain1 }));
  }),
];
