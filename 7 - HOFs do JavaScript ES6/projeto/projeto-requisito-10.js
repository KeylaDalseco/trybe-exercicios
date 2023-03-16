const animais = require('./data')

//================== requisito 10 =================

// const getOldestFromFirstSpecies = (id) => {
//   const primeiroAnimalDoColaborador = animais.employees.find((employer) => employer.id === id).responsibleFor[0];
//   const animal = animais.species.find((specie) => specie.id === primeiroAnimalDoColaborador).residents;
//   const aaa = animal.sort((a, b) => a.age - b.age)[3];
//   return Object.values(aaa)
//   console.log(Object.values(aaa));
// }

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

//================== requisito 10 =================

// const getOldestFromFirstSpecies = (id) => {
//     const primeiroAnimalDoColaborador = animais.employees.find((employer) => employer.id === id).responsibleFor[0];
//     const animal = animais.species.find((specie) => specie.id === primeiroAnimalDoColaborador).residents;
//     const animalOrdenado = animal.sort((a, b) => a.age - b.age);
//     return animalOrdenado[animalOrdenado.length - 1]
//   }
  
//   console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));


//================== requisito 1 =================

// const getSpeciesByIds = (...species) => {
//   return animais.species.filter((specie) => specie.id == species) 
// }

// console.log(getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae', ));

// const getSpeciesByIds = (...animals) => {
//   const array = [];
//   animais.species.forEach((specie) => {
//     if(specie.id == animals) {
//       array.push(specie)
//     }
//   });
//   return array
// }
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '0938aa23-f153-4937-9f88-4858b24d6bce'));

// questão 9

function checkForDays(time) {
  if (!weekDays.includes(time)) {
    return;
  }
  const oH = data.hours[time].open;
  const filter = data.species.filter((animal) => animal.availability.includes(time));
  const exhibition = filter.map((animals) => animals.name);
  return {
    [time]: {
      officeHour: oH ? `Open from ${oH}am until ${data.hours[time].close}pm` : 'CLOSED',
      exhibition: oH ? exhibition : 'The zoo will be closed!',
    },
  };
}

function resultUndefined() {
  const myObj = {};
  weekDays.forEach((day) => {
    const filter = data.species.filter((animal) => animal.availability.includes(day));
    const mapOfAllAnimalsOfThisDay = filter.map((animal) => animal.name);
    if (data.hours[day].open === 0) {
      myObj[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      myObj[day] = {
        officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
        exhibition: mapOfAllAnimalsOfThisDay,
      };
    }
  });
  return myObj;
}

const getSchedule = (scheduleTarget) => {
  if (typeof scheduleTarget === 'string' || scheduleTarget === undefined) {
    const result = checkIfSpecieNameExists(scheduleTarget) || checkForDays(scheduleTarget);
    if (result !== undefined) {
      return result;
    }
  }
  return resultUndefined();
};