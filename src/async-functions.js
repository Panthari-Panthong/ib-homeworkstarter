function getTatooineResidents() {

  const superagent = require('superagent')


  return superagent
    .get("https://swapi.co/api/planets/1/")
    .then(response => {
      return response.body
    })
    .then(data => {
      return data.residents
    })
    .catch(err => {
      console.log(err)
    });

}

module.exports = { getTatooineResidents }