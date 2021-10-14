
//return random integer
export function generatedRandomIntInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    return undefined;
  }

  if (max < min) {

    [max, min] = [min, max];

  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}
//return random float
export function generatedRandomFloatInRange(min, max, decimalPlaces) {
  if (decimalPlaces < 0) {
    return undefined;
  }
  if (isNaN(min) || isNaN(max)) {
    return undefined;
  }

  return (Math.random() * (max - min + 1) + min).toFixed(decimalPlaces);
}


//Возвращает случайный элемент массива
export function getRandomArrayElement(array) {
  const rnd = generatedRandomIntInRange(0, array.length - 1);

  return array[rnd];
}

//Функция удаляет несколько случайное количество случайных элементов массива
export function randomTrimArray (array) {
  const numberOfElementsToDelete = generatedRandomIntInRange(0, array.length - 1);
  const result = array.slice();
  for (let i = 0; i < numberOfElementsToDelete; i++) {
    const elementNumberToSplice =  generatedRandomIntInRange(0, result.length - 1);
    result.splice(elementNumberToSplice,1);
  }

  //console.log(result)
  return result;
}
