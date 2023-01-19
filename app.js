/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ 
          success: false, 
          message: "Failed to get list of hobbits." 
        });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

//Exercise 1:
const pError = document.getElementById("error"); 
const ulList = document.getElementById("list");

//Exercises 2 & 3:
// TODO: Handle the resolved or rejected states of the promise
let promise1 = getList(); 
promise1
// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)
.then((resolve) => {
  for (let i = 0; i < resolve.length; i++) {
    let li = document.createElement("li");
    li.textContent = resolve[i]; 
    ulList.appendChild(li);
  }
  })

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)

.catch((err) => {
    console.error(err); 
    pError.textContent = err.message;  
  });

 

//Tyson's solution: 
let promise = getList();


promise.then(res =>
  res.forEach(function (hobbit){
    let li = document.createElement("li");
    li.textContent = hobbit;
    ulEle.appendChild(li);
    })
  ).catch((err) => {
    console.error(err);
    errDiv.textContent = err.message;
  })

//Notes from yesterday's exercise (JS DOM Events):
  // TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
// let oldChild = document.querySelector("#N1");
// let newChild = document.createElement("p"); 
// newChild.textContent = "I'll replace the Child Node #1.";
// let parent = document.querySelector("#exercise-container3");
// parent.replaceChild(newChild, oldChild);  

// for (let i = 0; i < list.length; i++){
//   let li = document.createElement("li");
//   li.innerText = list[i];
//   // TODO: Append the new list items to the unordered list element
//   ul.appendChild(li);   
// }



  
