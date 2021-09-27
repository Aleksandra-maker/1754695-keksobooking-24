
function generatedRandomIntInRange (from, to) {
    if (isNaN(from)||isNaN(to)) {
        return undefined; 
    }
   //получаем случайное число от 0 до 1
    let result = Math.random();
    //вычисляем длину интервала
    let range = to - from;
    //масштабируем интервал на длину интервала
    result = result * range;
    //смещаем интервал к начальному значению
    result = result + from;
    //округляем
    result = Math.round(result);
  
    return result;
}

function generatedRandomFloatInRange (from, to, decimalPlaces) {
    if (decimalPlaces < 0) {
        return undefined;
    }
    if (isNaN(from)||isNaN(to)) {
        return undefined; 
    }
    let result = Math.random();
    let range = to - from;
    result = result * range;
    result = result + from;
    result = result.toFixed(decimalPlaces);

    return result;
   
     
}

console.log(generatedRandomFloatInRange(0,50,3));