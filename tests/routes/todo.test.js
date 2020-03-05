const assert = require('assert')
const chai = require('chai')
const sinon = require('sinon')
const should = chai.should()
const { expect } = require('chai')

const app = require('../../app')
const db = require('../../models')
const request = require('supertest')
const helpers = require('../../config/helpers')


describe('# todo 登入認證', function () {

  before(async function () {
    // 在所有測試開始前會執行的程式碼區塊
    await db.User.destroy({ where: {}, truncate: true })
    const rootUser = await db.User.create({ name: 'root' }) //會執行
    this.authenticate = sinon.stub(helpers, "isAuthenticated").returns(true)
    //this為 describe('# todo 登入認證' 那層


  });

  after(async function () {
    // 在所有測試結束後會執行的程式碼區塊
    await db.User.destroy({ where: {}, truncate: true })
    this.authenticate.restore();
  });

  it("[O] 登入狀態 GET /todos/new", (done) => {
    request(app)
      .get('/todos/new')
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(200)
        done()
      });
  });
})

describe('# todo', function () {

  it("[X] 未登入狀態 GET /todos/new", (done) => {
    request(app)
      .get('/todos/new')
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(302)
        expect(res.text).to.be.equal('Found. Redirecting to /users/login')
        done()
      });
  });
})