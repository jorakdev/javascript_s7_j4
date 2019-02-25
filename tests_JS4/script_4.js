let weeksOfTHPArray = ["@emaIne5", "@CemaiBe2723672", "@Xemai_ne3", "@Demau_deine", "@Aude23", "@aude", "@epenser"];

//answer 1
console.log(`le nombre de journalistes dansl\'array : ${weeksOfTHPArray.length}`);


//answer 2
var newArray = [];
for(let index in weeksOfTHPArray) {
  // console.log(index); // index va aller de 0 à 3
  // console.log(weeksOfTHPArray[index]);
  let str = String(`${weeksOfTHPArray[index]}`);
  for (let i = 0; i < str.length; i++){
      if(!isNaN(str.charAt(i))){//si on trouve un nombre alors on met on console ce nombre
        // console.log(str.charAt(i));
        newArray.push(weeksOfTHPArray[index]);
        break;
      }
  }
}
console.log(`le nombre de handle que contiennent un numéros est : ${newArray.length}`);

//answer 3
var new_Array_aude = [];
for(var index in weeksOfTHPArray) {

  var str = (`${weeksOfTHPArray[index]}`);
  //transforme les elmts de l'array en toLowerCase pour faciliter la recherche
  var lowcase_str = str.toLowerCase();
  if (lowcase_str.indexOf('aude') > -1){//find?=> true
    new_Array_aude.push(weeksOfTHPArray[index]);
  }
}
console.log(`le nombre de handle que contiennent le mot aude est : ${new_Array_aude.length}`);

//answer 4
var newArray_uppercase = [];
for(let index in weeksOfTHPArray) {
  // console.log(index); // index va aller de 0 à 3
  // console.log(weeksOfTHPArray[index]);
  let str = String(`${weeksOfTHPArray[index]}`);
  // console.log(str.charAt(1));
      if(str.charAt(1) == str.charAt(1).toUpperCase()){//
        // console.log(str.charAt(i));
        newArray_uppercase.push(weeksOfTHPArray[index]);
      }

}
console.log(`le nombre de handle qui commence par un MAJ après @ : ${newArray_uppercase.length}`);

//answer 5
var newArray_thathcontain_uppercase = [];
for(let index in weeksOfTHPArray) {
  // console.log(index); // index va aller de 0 à 3
  // console.log(weeksOfTHPArray[index]);
  let str = String(`${weeksOfTHPArray[index]}`);
  for (let i = 0; i < str.length; i++){
      if(str.charAt(i) == str.charAt(i).toLowerCase()){//
        // console.log(str.charAt(i));
        // newArray_thathcontain_uppercase.push(weeksOfTHPArray[index]);
        // break;
        // console.log(`${str.charAt(i)}`);
      }else{
        // console.log(weeksOfTHPArray[index]);
        newArray_thathcontain_uppercase.push(weeksOfTHPArray[index]);
        break;
      }
  }
}
console.log(`le nombre de l'element de l'array que contiennent un MAJ est : ${newArray_thathcontain_uppercase.length}`);

//answer 6
var new_Array_underscore = [];
for(var index in weeksOfTHPArray) {

  var str = (`${weeksOfTHPArray[index]}`);
  //transforme les elmts de l'array en toLowerCase pour faciliter la recherche
  var lowcase_str = str.toLowerCase();
  if (lowcase_str.indexOf('_') > -1){//find?=> true
    new_Array_underscore.push(weeksOfTHPArray[index]);
  }
}
console.log(`le nombre  que contiennent le un "_" est : ${new_Array_underscore.length}`);

//answer 7
weeksOfTHPArray.sort();
console.log(weeksOfTHPArray);

//answer 8


//answer 9

for(var index in weeksOfTHPArray) {

  var str = (`${weeksOfTHPArray[index]}`);
  //transforme les elmts de l'array en toLowerCase pour faciliter la recherche

  if (str.indexOf('@epenser') > -1){//find?=> true
    console.log(`@epenser se trouve en ${index}em position`);
  }
}
