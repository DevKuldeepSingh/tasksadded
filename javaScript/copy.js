const data1 = {
  name: "kuldeep",
  lastName: "singh",

  address: {
    hno: "1107",
    street: "rajnagar ",
  },
  cacluateDAge: function () {
    return 22;
  },

  joiningDate: new Date(),
};

/* let data2 = data1;
 */

// method 1  -> this is called shallow copy
/* let data2 =Object.assign( {} , data1 );
 */

// method 2 -> using spread operator  , but this is not fully sucessfull because it fails when we have a object inside an object

/* let data2 = {...data1} */ // this is called shallow copy

/* method 3 */
let data2 = JSON.parse(JSON.stringify(data1)); // DEEP copy
// but it removes functions inside an object  and also change the data type we can remove this by using lodash library and use _.cloneDeep method

console.log(data1 == data2);

console.log(data1);
console.log(data2);

data2.name = "reeturaj";
data2.address.street = "sector22";

console.log(typeof data1.joiningDate);
console.log(typeof data2.joiningDate);

console.log(data1);
console.log(data2);
