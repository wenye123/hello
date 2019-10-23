import * as hello from "../src/index";
import assert from "assert";

describe("test", function() {
  it("hello", function() {
    const ret = hello.hello();
    assert.equal(ret, "hello world!");
  });
  it("WenZhenKun", function() {
    const ret = hello.WenZhenKun;
    assert.ok(ret.info);
  });
});
