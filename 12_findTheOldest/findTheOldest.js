const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    let oldestPerson = people.reduce((personA, personB) => {
        if (!('yearOfDeath' in personA)) {
            personA.yearOfDeath = currentYear
        }
        if (!('yearOfDeath' in personB)) {
            personB.yearOfDeath = currentYear
        }
        let personA_age = personA.yearOfDeath - personA.yearOfBirth;
        let personB_age = personB.yearOfDeath - personB.yearOfBirth;
        if (personA_age >= personB_age) {
            return personA;
        } else { 
            return personB;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
