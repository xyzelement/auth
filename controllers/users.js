const async = require("async");

module.exports = {
  //email and pass
  signup: async (req, resp, next) => {
    console.log("signUp called");
    console.log(req.value.body);
    console.log(req.body);
  },

  //passport will do it
  signin: async (req, resp, next) => {
    console.log("signUp called");
  },

  secret: async (req, resp, next) => {
    console.log("signUp called");
  }
};
