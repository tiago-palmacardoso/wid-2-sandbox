export default function App() {
  const Myvariable = "Hallo Welt"; // test with 25 , true , null..
  //Ubung 2 
  const userRole = "Admin"
  const IsTheTruth = true   // test with false
  // Ubung 1
  if (typeof Myvariable === "string") { console.log("Is a string") }
  else if (typeof Myvariable === "number") { console.log("Is a number") }
  else if (typeof Myvariable === "boolean") { console.log("Is a boolean") }
  else if (typeof Myvariable === "object") { console.log("Is a null (typeof return a type 'object'") }
  else { console.log("Unkwown type") }

  //Ubung 3
  const DefaultWert = 2
  function multiply(parameter1, parameter2 = DefaultWert) {
    if (typeof parameter1 !== "number" || typeof parameter2 !== "number") {
      console.log("One or more parameters are not numbers.")
    }
    else {
      console.log(parameter1 * parameter2)
    }
  }
  multiply(4)
  multiply(3, 5)

  //Ubung 4
  const multiply1 = (parameter1, parameter2 = DefaultWert) => {
    return parameter1 * parameter2
  }
  console.log(multiply1(4))
  console.log(multiply1(3, 5))
  //Ubung 4.1
  const wordOne = "Hallo"
  const wordTwo = "Welt"

  const wordly = (wordOne, wordTwo) => {
    return `${wordOne} ${wordTwo}`
  }
  console.log(wordly(wordOne, wordTwo))

  //Ubung 4.2

  const Zero = (a_number) => {
    if (a_number < 0) { return "smaller to zero" }
    else if (a_number === 0) { return "is Zero" }
    else { return "bigger than zero" }
  }

  console.log(Zero(5))
  console.log(Zero(-51))
  console.log(Zero(0))

  //Ubung 4.3

  const Biggest = (number1, number2) =>
    number1 > number2 ? `Bigger is number1 = ${number1}` : `Bigger is number2 = ${number2}`

  console.log(Biggest(3, 7))
  console.log(Biggest(10, 4))

  // Ubung 5
  const myArray = [1, 6, 3]

  // Ubung 5.1
  const myArray2 = myArray.map((element) => element * 3)

  console.log(myArray2)
  // with index
  const myArray2b = myArray.map((element, index) => element * index)
  console.log(myArray2b)

  //Ubung 5.2
  const myArray3 = ["Kam", "Jack", "Carlo", "Emma", "Laura"]

  const myArray4 = myArray3.filter((username) => username.includes("a"))
  console.log(myArray4)

  // console.log({ message }) cltr + shift I --> console   |REMINDER

  //Ubung 6
  const theVariable = 12

  switch (typeof theVariable) {
    case "number":
      console.log(`the variable is a ${typeof theVariable}`)
      break
    case "string":
      console.log(`the variable is a ${typeof theVariable}`)
      break
    case "boolean":
      console.log(`the variable is a boolean ${typeof theVariable}`)
      break
    case "object":
      console.log(`the variable is an object ${typeof theVariable}`)
      break
    default:    // if nothing from above
      console.log(`the variable is ${typeof theVariable}`)
  }




  return (
    <div>
      {/*ubung 1*/}
      <div>Schau die Konsole</div>
      {/*ubung 2*/}
      <div> The user is {userRole}.</div>
      <p style={{ color: IsTheTruth ? "green" : "red" }}> Is it a lie?</p>
    </div>
  );
}
