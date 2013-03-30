var buster = require("buster");
buster.testCase("My Test Case",  {
  "assert.euqals a === B" : function(){
    assert.equals("foo",  "foo");
  }, 
  "should be true" : function(){
    assert(true);
  }, 
  "should be false" : function(){
    refute(false);
  }, 
  "refute.euqals a !== B" : function(){
    refute.equals("foo",  "bar");
  }
});
