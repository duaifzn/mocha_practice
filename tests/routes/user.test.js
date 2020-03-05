// const assert = require('assert')
// const chai = require('chai')
// const should = chai.should()
// const { expect } = require('chai')

// const app = require('../../app')
// const db = require('../../models')
// const request = require('supertest')



// describe('# signup page', function () {
//   it('GET /users/register', done => {
//     request(app)
//       .get('/users/register')
//       .end((err, res) => {
//         expect(res.statusCode).to.be.equal(200)
//         expect(res.text).to.contain('Register')
//         done()
//       })
//   })
// })

// describe('# signup ', function () {

//   before(async function () {
//     // 在所有測試開始前會執行的程式碼區塊
//     await db.User.destroy({ where: {}, truncate: true })
//   });

//   after(async function () {
//     // 在所有測試結束後會執行的程式碼區塊
//     await db.User.destroy({ where: {}, truncate: true })
//   });

//   it("[O] 註冊帳號成功", done => {
//     request(app)
//       .post('/users/register')
//       .send('name=name&email=email&password=password&password2=password')
//       .end((err, res) => {
//         db.User.findOne({ where: { email: 'email' } })
//           .then(user => {
//             expect(user.email).to.be.equal('email')
//             done()
//           })
//       })
//   })
//   it("[X] 所有欄位必填", done => {
//     request(app)
//       .post('/users/register')
//       .send()
//       .end((err, res) => {
//         expect(res.text).to.contain('所有欄位都是必填')
//         done()
//       })
//   })
//   it("[X] 密碼輸入錯誤", done => {
//     request(app)
//       .post('/users/register')
//       .send('name=name&email=email&password=password&password2=password2')
//       .end((err, res) => {
//         expect(res.text).to.contain('密碼輸入錯誤')
//         done()
//       })
//   })
// })

// describe('# login', () => {

//   before(async function () {
//     // 在所有測試開始前會執行的程式碼區塊
//     await request(app)
//       .post('/users/register')
//       .send('name=name&email=email&password=password&password2=password')

//   })


//   after(async function () {
//     // 在所有測試結束後會執行的程式碼區塊
//     await db.User.destroy({ where: {}, truncate: true })
//   });


//   it("(O) 登入成功", (done) => {

//     request(app)
//       .post('/users/login')
//       .send('email=email&password=password')
//       .expect(200)
//       .end(function (err, res) {

//         // 條件二：登入成功
//         expect(res.statusCode).to.be.equal(302)
//         expect(res.text).to.be.equal('Found. Redirecting to /')
//         done()
//       });
//   })


// });



