//  Récup de mon firstinput + value + Récup Button  step1
let recupInput = document.getElementById('firstInput')
console.log(recupInput)

let recupFirstBtn = document.querySelector('button')
console.log(recupFirstBtn)


let parentUl = document.querySelector("ul");
console.log(parentUl)

let firstLI = document.querySelector("li")
console.log(firstLI)

let CreatP = (text) => {
  let ChildP = document.createElement("p","mr-auto");
  ChildP.textContent = text;
  return ChildP;
}

let CreatRow = () => {
  let ChildRow = document.createElement("div")
  ChildRow.classList.add("row")
  return ChildRow;
}


let CreatSpan = () => {
  let childSpa = document.createElement("span")
  childSpa.classList.add("span","text-right", "ml-auto",)

  return childSpa

}
let CreatIcons = (arg) => {
  let childIcon = document.createElement("i")
  childIcon.classList.add("fas","fa-1x","pr-4", arg)
  return childIcon
}

let CreatLI = (text) => {
  let Childli = document.createElement("li");
  let childSpa2 = CreatSpan();
  let ChildRow2 = CreatRow();



  childSpa2.appendChild(CreatIcons("fa-check"))
  childSpa2.appendChild(CreatIcons("fa-edit"))
  childSpa2.appendChild(CreatIcons("fa-trash-alt"))

  ChildRow2.appendChild(CreatP(text))
  ChildRow2.appendChild(childSpa2)

  Childli.appendChild(ChildRow2)

  return Childli;
  //parentUl.appendChild(Childli)
}




// let CreatIcons = ()=

//let monli = CreatLI();

recupFirstBtn.addEventListener('click', () => {
  let rIvalue = recupInput.value
  parentUl.appendChild(CreatLI(rIvalue))



})

// part1
// //   let ChildP = document.createElement("p","mr-auto");
//   ChildP.textContent = text;
//   return ChildP;

// part2
// let ChildRow = document.createElement("div")
// ChildRow.classList.add("row")
// return ChildRow;

// part3
// let childSpa = document.createElement("span")
// childSpa.classList.add("span","text-right", "ml-auto",)
// return childSpa

// part4
// let childIcon = document.createElement("i")
// childIcon.classList.add("fas","fa-1x","pr-4", arg)
// return childIcon

// part5
// let Childli = document.createElement("li");
// let childSpa2 = CreatSpan();
// let ChildRow2 = CreatRow();



// childSpa2.appendChild(CreatIcons("fa-check"))
// childSpa2.appendChild(CreatIcons("fa-edit"))
// childSpa2.appendChild(CreatIcons("fa-trash-alt"))

// ChildRow2.appendChild(CreatP(text))
// ChildRow2.appendChild(childSpa2)

// Childli.appendChild(ChildRow2)

// return Childli;
// //parentUl.appendChild(Childli)