const findTheOldest = function(people) {
    let ageList = [];
    let age;
    people.forEach(person => {
        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            let currentYear = new Date().getFullYear();
            age = currentYear - person.yearOfBirth;
        }
        ageList.push(age);
    });

    return people[ageList.indexOf(Math.max(...ageList))];
};

// Do not edit below this line
module.exports = findTheOldest;
