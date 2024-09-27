import { expect, it } from "vitest";
import { handler } from "./hello-world";

it("should return the greeting", async () => {
  var resp = await handler({});
  expect(resp.body).toEqual("Hello World");
});
