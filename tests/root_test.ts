import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.197.0/assert/mod.ts";
import {
  afterEach,
  beforeEach,
  describe,
  it,
} from "https://deno.land/std@0.197.0/testing/bdd.ts";
import { gql } from "https://deno.land/x/graphql_tag@0.1.2/mod.ts";
import { serverTest } from "./utils/server-test.ts";

describe("Root test", () => {
  beforeEach(() => {
    serverTest.start();
  });

  afterEach(() => {
    serverTest.stop();
  });

  it("Get root message", async () => {
    const response = await serverTest.executeOperation<{ root: string }>({
      query: gql`
        query {
          root
        }
      `,
    });

    assert(response.body.kind === "single");
    assertEquals(response.body.singleResult.data?.root, "It works 🚀");
  });
});
