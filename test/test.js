var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
  describe('#push',function(){
      it('should return when we something something to array', function(){
          let arr = [1,2,3];
          arr.push(2);
          assert.equal(arr.length, 4, 'Error in this line');
      });
  })
});