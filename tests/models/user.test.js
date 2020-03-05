// const assert = require('assert')
// const chai = require('chai')
// const should = chai.should()
// const { expect } = require('chai')

// const app = require('../../app')
// const db = require('../../models')



// describe('#User Model test', function () {
//   describe('CRUD', function () {

//     let data = null

//     it('create', (done) => {
//       db.User.create({}).then(user => {
//         data = user
//         done()
//       })
//     })
//     it('read', done => {
//       db.User.findByPk(data.id).then(user => {
//         expect(data.id).to.be.equal(user.id)
//         done()
//       })
//     })
//     it('update', done => {
//       db.User.findByPk(data.id).then(user => {
//         user.update({})
//           .then(user => {
//             expect(data.id).to.be.equal(user.id)
//             done()
//           })
//       })
//     })
//     it('delete', done => {
//       db.User.destroy({ where: { id: data.id } })
//         .then(() => {
//           db.User.findByPk(data.id).then(user => {
//             expect(user).to.be.equal(null)
//             done()
//           })
//         })
//     })

//   });
// });