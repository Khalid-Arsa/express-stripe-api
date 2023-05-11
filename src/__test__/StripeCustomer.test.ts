import supertest from "supertest";
import { server } from "../server";
import { endPoints, headers } from "./lib/test.lib";
import { createStripeCustomerInput } from "./lib/StripeCustomer.test.lib";

describe("POST api/stripe/create-customer", () => {
  test("CREATE CUSTOMER: It should satify the correct payload", async () => {
    const response = await supertest(server)
      .post(endPoints.STRIPE_CREATE_CUSTOMER_API)
      .send(createStripeCustomerInput)
      .set("Accept", headers.APPLICATION_JSON);

    const { success, message, customerId } = response.body;

    expect(response.statusCode).toBe(200);
    expect(typeof message === "string").toBe(true);
    expect(typeof customerId === "string").toBe(true);
    expect(success).toBe(true);
  });

  test("RETRIEVE CUSTOMER: It should return correct data", async () => {
    const response = await supertest(server).get(
      endPoints.STRIPE_GET_CUSTOMER_API
    );
    
    const { success, message, customer } = response.body;

    expect(response.statusCode).toBe(200);
    expect(typeof message === "string").toBe(true);
    expect(typeof customer === "object").toBe(true);
    expect(success).toBe(true);
  });
});
