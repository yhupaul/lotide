const assert = require('chai').assert;
const flatten   = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 4, 5, 2, 6, 7, 3] for [1, [4, 5], 2, [6, 7], 3]", () => {
    assert.deepEqual(flatten([1, [4, 5], 2, [6, 7], 3]), [1, 4, 5, 2, 6, 7, 3]);
  });

});