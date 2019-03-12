const Test = require('./promise_mod')


// Test.callApi("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzIjoia2ltdXJhIiwiaWF0IjoxNTUyMzY3MTI2LCJleHAiOjE1NTI0MDMxMjZ9.BgtnWxNaYOkZNEQyMFuj6_f_UWgsMCEssSEVJyCeJrw")
//     .then(
//         (obj) => {
//             console.debug(obj);
//         }
//     ).catch(
//     (err) => { console.error(err); }
// )

Test.makeToken()
    .then((obj) => {
        console.log(obj.token)
    })
    .catch((err) => {
        console.error(err)
    })

var newToken = JSON.parse(Test.syncToken())
newToken = newToken.token
console.log('トークンは:' + newToken)