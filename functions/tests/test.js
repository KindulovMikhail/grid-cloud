import chaiHttp from "chai-http";
import chai from  "chai";

const app = require("../index");
chai.use(chaiHttp);
chai.should();

describe("Server", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should get all notes", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
        it("should get all published notes", (done) => {
            chai.request(app)
                .get('/api/tutorials/published')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
        it("should get non-existent note", (done) => {
            const id = 1;
            chai.request(app)
                .get(`/api/tutorials/${id}`)
                .end((err, res) => {
                    res.should.have.status(500);
                    done();
                });
        });
        it("should response create note", (done) => {
            const id = 1;
            chai.request(app)
                .post('/api/tutorials/${id}')
                .send({"title":"test",
                    "description": "test"
                })
                .end((err, res) => {
                    done();
                });
        });
        it("should response delete nonexistent note", (done) => {
            chai.request(app)
                .delete('/api/tutorials/1')
                .end((err, res) => {
                    res.should.have.status(500);
                    done();
                });
        });

    });
});
