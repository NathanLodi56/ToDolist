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
  let ChildP = document.createElement("p", "mr-auto");
  ChildP.textContent = text;
  return ChildP;
}

let CreatRow = () => {
  let ChildRow = document.createElement("div")
  ChildRow.classList.add("row" , "mx-0")
  return ChildRow;
}


let CreatSpan = () => {
  let childSpa = document.createElement("span")
  childSpa.classList.add("span", "text-right", "ml-auto", )

  return childSpa

}
let CreatIcons = (arg) => {
  let childIcon = document.createElement("i")
  childIcon.classList.add("fas", "fa-1x", "pr-4", arg)
  return childIcon
}

let CreatLI = () => {
  let Childli = document.createElement("li");
  return Childli;
}




// let CreatIcons = ()=

//let monli = CreatLI();

recupFirstBtn.addEventListener('click', () => {
  //creé des Icone
  let iconCheck = CreatIcons("fa-check-circle");
  let iconEdit = CreatIcons("fa-edit");
  let iconDelet = CreatIcons("fa-trash-alt");
  let iconSave = CreatIcons("fa-save")
  iconSave.classList.add("d-none","mr-5")

  //creation du li
  let myLi = CreatLI();
  //creation row
  let myRow = CreatRow();
  //ajout du p dans la row
  let rIvalue = recupInput.value
  let paragrapheLi = CreatP(rIvalue)
  let SecondInput = document.createElement("input")
  SecondInput.classList.add("d-none")
  // myRow.appendChild(CreatP(rIvalue)) doit le supprimer 
  //creation du span
  let mySpan = CreatSpan();
  // let compteClick = 0;
  // ajout des icon dans span
  mySpan.appendChild(iconCheck);
  mySpan.appendChild(iconEdit);
  mySpan.appendChild(iconDelet);
  mySpan.appendChild(iconSave);
  //ajout du span dans le row
  myRow.appendChild(SecondInput)
  myRow.appendChild(paragrapheLi)
  myRow.appendChild(mySpan);
  //ajout tow dans le li
  myLi.appendChild(myRow);

  //ajout du li dans le ul
  parentUl.appendChild(myLi)


  const functDelet = () =>{
    myLi.remove();
  }

  iconDelet.addEventListener("click" , functDelet);

  const functGreen = () => {
    // let recupRaw= document.querySelector(".row")
    // recupRaw.classList.toggle("libg-green")

    myLi.classList.toggle("libg-green")
    // if (compteClick === 0) {
    //  myRow.style.backgroundColor="green" 
    // } else if(compteClick === 1 ) {
    //   myRow.style.backgroundColor="white"
    // }
    
  }

  iconCheck.addEventListener("click" , functGreen);

  const functEdit = () => {
    iconSave.classList.remove("d-none")
    iconCheck.classList.add("d-none")
    iconEdit.classList.add("d-none")
    iconDelet.classList.add("d-none")
    paragrapheLi.classList.add('d-none')
    SecondInput.classList.remove("d-none")
    //remove cache la class 

    
  

  }

  iconEdit.addEventListener("click" , functEdit);

  const functEdit2 = () => {
    iconSave.classList.add("d-none")
    iconCheck.classList.remove("d-none")
    iconEdit.classList.remove("d-none")
    iconDelet.classList.remove("d-none")
    paragrapheLi.classList.remove('d-none')
    SecondInput.classList.add("d-none")
    //remove cache la class 

    let SecondInputVal = SecondInput.value
    paragrapheLi.textContent=SecondInputVa

    //recup value de l input et la donner au p 
  
  
  }

  iconSave.addEventListener("click" , functEdit2);

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



