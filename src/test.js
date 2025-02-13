function checkEqualObject(a, b) {
  if (a === b) return true; // Same reference or primitive value

  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  ) {
    return false; // One is not an object or is null
  }

  const keys1 = Object.keys(a);
  const keys2 = Object.keys(b);

  if (keys1.length !== keys2.length) return false; // Different number of keys

  for (let key of keys1) {
    if (!keys2.includes(key) || !checkEqualObject(a[key], b[key])) {
      return false; // Key doesn't exist in b or values are not equal
    }
  }

  return true; // All keys and values are equal
}
const obj1 = {
  name: "Prince",
  address: {
    name: "police line",
    work: {
      job: "software developer",
    },
  },
};

const obj2 = {
  name: "Prince pandey",
  address: {
    name: "police line",
    work: {
      job: "software developer",
      e: "",
    },
  },
};

const abc = {
  name: "prince ",
  age: "22",
};

const cde = {
  name: "prince ",
  age: "22",
  plave: "",
};
console.log(checkEqualObject(obj1, obj2));
function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

const otp = generateOTP();
console.log("Generated OTP:", otp);
