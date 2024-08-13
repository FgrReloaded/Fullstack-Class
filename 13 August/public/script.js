console.log("Start")

const arr = [9, 2, 5, 3, 8, 6, 4, 10, 1, 7]

const sortedArray = arr.sort((a, b)=> a-b)

// console.log(sortedArray)

const nameArray = ["John", "Bob", "Alice", "Zack", "Mike", "Tom", "Jerry", "Tim", "Sue", "Liz"]

const sortedNameArray = nameArray.sort()

// console.log(sortedNameArray)

for (const name of nameArray) {
    // console.log(name);
}

const names = nameArray.map((name) => {
    return name
})
// console.log(names)

const nameWithO = nameArray.filter((name)=>{
    return name.includes("o");
})
// console.log(nameWithO)

const reducedName = nameArray.reduce((acc, name)=>{
    return acc + ' ' + name
});
// console.log(reducedName)




// if-else statement
const age = 19;

if(age<18){
    // console.log("Not eligible")
}


const checkDriver = (age, drivingLicense) =>{
    if(age>=18 && drivingLicense){
        return true;
    }
    return false;
}

const canDrive = checkDriver(19, true);

// console.log(canDrive ? "Can Drive": "Can't Drive")


// Type casting
let num = 5;
const typeCasted = "This is number: " + num;

// console.log(typeof typeCasted);

const strNum = '50';
// console.log('BEFORE TYPECASTED: ', typeof strNum, strNum);
const numStr = parseInt(strNum);
// console.log('AFTER TYPECASTED: ', typeof numStr, numStr);

let bool = true;
// console.log("BEFORE TYPECASTED: ", typeof bool, bool);
// let numBool = String(bool);
numBool = bool.toString();
// console.log("AFTER TYPECASTED: ", typeof numBool, numBool);

const arrayToTypeCast = [1,2,3,4,5];
// console.log(arrayToTypeCast.join(" "))



// Objects

const userDetails ={
    name: "John",
    age: 25
}

const newUserDetails = new Object();
newUserDetails.name = "Bob";
newUserDetails.age = 30;

// console.log(userDetails.name);
// console.log(newUserDetails['age']);

delete userDetails.age;

for (const key in newUserDetails) {
    // console.log(key +":", newUserDetails[key]);
}