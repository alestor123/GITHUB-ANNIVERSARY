const tap = require('tap')
const ghn = require('./App')
tap.test('Error test', async t => {
  await t.rejects(ghn(6464646, 98498), { message: 'Please enter a vaild username' })
  await t.rejects(ghn(undefined, 98498), { message: 'Please enter a vaild username' })
  await t.rejects(ghn('', 98498), { message: 'Please enter a vaild username' })
  await t.rejects(ghn('sindresorhus', ''), { message: 'Enter a valid token' })
  await t.rejects(ghn('sindresorhus', 98498), { message: 'Enter a valid token' })
  await t.rejects(ghn('sindresorhus'), { message: 'Enter a valid token' })
})
tap.test('Output test', async t => {
  const main = (await ghn('sindresorhus', process.env.GHTOKEN)) // dont know why i used sindresorhus
  t.equal(typeof main.isAnniversary, 'boolean')
  t.equal(typeof main.on, 'string')
  t.not(new Date(main.on), 'Invalid Date')
  t.equal(typeof main.date, 'string')
  t.not(new Date(main.date), 'Invalid Date')
  t.equal(typeof main.diffDate, 'number')
})
