import supertest from "supertest";
import { server } from "../server";
import { endPoints } from "./lib/test.lib";

describe("GET CUSTOMERS DATA", () => {
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

  test("RETRIEVE ALL CUSTOMER: It should return correct data", async () => {
    const response = await supertest(server).get(
      endPoints.STRIPE_GET_ALL_CUSTOMER_API
    );
    
    const { success, message, customerList } = response.body;

    expect(response.statusCode).toBe(200);
    expect(typeof message === "string").toBe(true);
    expect(typeof customerList === "object").toBe(true);
    expect(success).toBe(true);
  });
});
