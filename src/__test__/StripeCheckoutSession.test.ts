import request from "supertest";
import { endPoints, headers } from "./lib/test.lib";
import { createStripeCheckoutSessionInput } from "./lib/StripeCheckoutSession.test.lib";
import { server } from "../server"

describe("POST api/stripe/create-checkout-session", () => {
  afterEach(async () => {
    server.close()
    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 500);
    }); // avoid jest open handle error when testing on db
  })

  test("CREATE CHECKOUT SESSION: It should satify the correct payload", async () => {
    const response = await request(server)
      .post(endPoints.STRIPE_CHECKOUT_SESSION_API)
      .send(createStripeCheckoutSessionInput)
      .set("Accept", headers.APPLICATION_JSON);

    const { success, message, checkoutId } = response.body;

    expect(response.statusCode).toBe(200);
    expect(typeof message === "string").toBe(true);
    expect(typeof checkoutId === "string").toBe(true);
    expect(success).toBe(true);
  });
});
