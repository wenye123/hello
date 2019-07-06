import { hello } from "../src/index";
import assert from "assert";

describe("test", function() {
  it("index", function () {
    const ret = hello();
    assert.equal(ret, "hello world!");
  })
});
