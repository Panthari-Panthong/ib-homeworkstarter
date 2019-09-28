function groupAdultsByAgeRange(people) {
  const grouping = people
    .filter(person => person.age >= 18)
    .reduce((categories, currentPerson) => {
      if (currentPerson.age <= 20) {
        if (categories['20 and younger'] === undefined) {
          categories['20 and younger'] = [currentPerson]
        } else {
          categories['20 and younger'].push(currentPerson)
        }
      }

      if (currentPerson.age > 20 && currentPerson.age <= 30) {
        if (categories['21-30'] === undefined) {
          categories['21-30'] = [currentPerson]
        } else {
          categories['21-30'].push(currentPerson)
        }
      }

      if (currentPerson.age > 30 && currentPerson.age <= 40) {
        if (categories['31-40'] === undefined) {
          categories['31-40'] = [currentPerson]
        } else {
          categories['31-40'].push(currentPerson)
        }
      }

      if (currentPerson.age > 40 && currentPerson.age <= 50) {
        if (categories['41-50'] === undefined) {
          categories['41-50'] = [currentPerson]
        } else {
          categories['41-50'].push(currentPerson)
        }
      }


      if (currentPerson.age > 50) {
        if (categories['51 and older'] === undefined) {
          categories['51 and older'] = [currentPerson]
        } else {
          categories['51 and older'].push(currentPerson)
        }
      }
      return categories


    }, {})

  return grouping

}



module.exports = { groupAdultsByAgeRange }