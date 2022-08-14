const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, it, after } = require("mocha");
const app = require("../server")

//Assertion style
const should = chai.should();
chai.use(chaiHttp)

//Agent that will keep track of our cookies
const agent = chai.request.agent(app);

const User = require("../models/user.model");

describe("User", ()=> {
    
    it('should not be able to login if they have not registered', function (done) {
        agent.post('/login', { username: 'wrong@example.com', password: 'nope' }).end(function (err, res) {
          res.should.have.status(400);
          console.log(res.error.text);
          done();
        });
      });

    // signup/register
    it('should be able to signup/register ', (done)=> {
        User.findOneAndRemove({ username: 'testEmail@testEmail.com'}, ()=> {
        agent
            .post('/register')
            .send({ username: 'testEmail@testEmail.com', password: 'TestPassword123!' })
            .end((err, res)=> {
            console.log(res.body);
            res.should.have.status(200);
            
            done();
            });
        });
    });

    //login
    it('should be able to login', function (done) {
        agent
          .post('/login')
          .send({ username: 'testEmail@testEmail.com', password: 'TestPassword123!' })
          .end(function (err, res) {
            res.should.have.status(200);
            // agent.should.have.cookie('token');
            done();
          });
      });

    // logout
    it('should be able to logout', function (done) {
        agent.post('/logout').end(function (err, res) {
        res.should.have.status(200);
        // agent.should.not.have.cookie('token');
        done();
        });
    });

    after(()=> {
        agent.close();
      });

})

