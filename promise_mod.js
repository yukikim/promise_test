const request = require('superagent')

exports.callApi = function(apiName) {
    return new Promise(
        (resolve, reject) => {
            request
                .get("http://localhost:3001/token/verify?token=" + apiName)
                .end(
                    (err, res) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(res.body);
                        }
                    }
                );
        })
}

exports.makeToken = function () {
    return new Promise((resolve, reject) => {
        request
            .post('http://localhost:3001/token/create')
            .send({password:'kimura'})
            .end((err, res) => {
                if(err) {
                    reject(err)
                }else {
                    resolve(res.body)
                }
            })
    })

}
