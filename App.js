'use strict'
const axios = require('axios')
module.exports = async (username, token) => {
  if (!(username && typeof username === 'string' && username.length > 0)) throw new Error('Please enter a vaild username')
  else if (token && typeof token === 'string' && token.length > 0) axios.defaults.headers.common.Authorization = `Bearer ${token}`
  else throw new Error('Enter a valid token')
  const createdAt = (await axios.get(`https://api.github.com/users/${username}`)).data.created_at
  const pdate = new Date(createdAt)
  const dt = new Date()
  const ded = new Date(dt.getFullYear(), pdate.getMonth(), pdate.getDate(), pdate.getHours(), pdate.getMinutes())

  return {
    createdAt,
    on: ded.toString(),
    date: pdate.toString(),
    pdate: pdate.toISOString().split('T')[0],
    isAnniversary: dayOfyear(dt) === dayOfyear(pdate),
    diffDate: dayOfyear(pdate) - dayOfyear(dt) 

  }
}
function dayOfyear (date) {
  return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
}
