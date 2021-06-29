'use strict';
var axios = require('axios');
module.exports = async (username,token) => {
if(!(username && typeof username ==='string'&&username.length>0)) throw new Error('Please enter a vaild username')
else if(token&&typeof token ==='string'&&token.length>0) axios.defaults.headers.common.Authorization = `Bearer ${token}`
var {created_at} = (await axios.get(`https://api.github.com/users/${username}`)).data,
pdate = new Date(created_at),
dt = new Date(),
ded = new Date(dt.getFullYear(),pdate.getMonth(),pdate.getDate(), pdate.getHours(),pdate.getMinutes());

return {
created_at,
on:ded.toString(),
date:pdate.toString(),
pdate: pdate.toISOString().split('T')[0],
isAnniversary:dayOfyear(dt)===dayOfyear(pdate)
}
}
function dayOfyear(date) {
return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
}