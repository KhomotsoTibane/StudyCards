// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const { describe, it } = require('mocha');
// const app = require('../server');


// const should = chai.should();
// const agent = chai.request.agent(app);
// chai.use(chaiHttp);

// describe('site', function () {
//   // Describe what you are testing
//   it('Should have home page', function (done) {
//     // Describe what should happen
//     // In this case we test that the home page loads
//     agent
//       .get('/')
//       .end(function (err, res) {
//         if (err) {
//           return done(err);
//         }
//         res.should.have.status(200);
//         return done(); // Call done if the test completed successfully.
//       });
//   });
// });