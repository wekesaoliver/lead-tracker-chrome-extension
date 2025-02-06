let myLeads = [];
let oldLeads = [];

// // Turn myLeads string into an array
// myLeads = JSON.parse(myLeads);
// // Push a new value into the array
// myLeads.push("www.twitter.com");
// //Turn the array into a string again
// myLeads = JSON.stringify(myLeads);
// // Console.log 'typeof' to verify if its a string
// console.log(typeof myLeads);


const inputEr = document.getElementById("inputer");
const inputBtn = document.getElementById("input-btn");
const listEr = document.getElementById("lister");
const deleteBtn = document.getElementById("delete-btn");
const saveBtn = document.getElementById("save-tab");

// localStorage.setItem("myLeads", "www.example.com");
// console.log( localStorage.getItem("myLeads") );
// localStorage.clear();


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

const tabs = [
    {url: "https://www.linkedin.com/in/owekesa/" }
]


saveBtn.addEventListener("click", function(){
    // console.log(tabs[0].url)
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    //     let activeTab = tabs[0];
    //     let activeTabId = activeTab.id;
    // })
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify( myLeads ));
        render(myLeads);
    })

})



// Render the list in the unordered list

function render(leads){

    let listItems = "";

    for( let i = 0; i < leads.length; i++){
        // listItems += "<li><a target= '_blank' href= '" + myLeads[i] + "' >" + myLeads[i] + "</a></li>" ;
        
        //use of template string(``)
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
            </li>
        ` 
    
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // listEr.append(li);
        
    }
    
    listEr.innerHTML = listItems;

}

deleteBtn.addEventListener("dblclick", function(){
    // console.log("Double clicked")
    localStorage.clear();
    myLeads = [];
    render(myLeads);

});


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEr.value);

    localStorage.setItem("myLeads", JSON.stringify(myLeads) );

    console.log(localStorage.getItem("myLeads"));


    inputEr.value = " ";
    render(myLeads);
    // console.log(myLeads);
})


// let containEr = document.getElementById("container");
// containEr.innerHTML = "<button id='clicker' onclick='buy()'> " + "Buy!" + "</button>" + "<br>"

// let clickEr = document.getElementById("clicker");

// clickEr.addEventListener("click", function(){
//     containEr.innerHTML += "<p>" + "Thank you for buying!" + "</p>";
// })


// function buy(){
//     containEr.innerHTML += "<p>" + "Thank you for buying" + "</P>";
// }


//Template String
// const recipient = "Oliver";
// const recipienT = "Wekesa";

// const email = "Hey " + recipient + "! How is it going? Cheers Ollie"

// console.log(email);

// //Refactor above using Template string
// const emaiL = `
// Hey ${recipienT}!,

// How is it going? 

// Cheers Weks
// `
// console.log(emaiL);


// let boX = document.getElementById("box");
// boX.addEventListener("click", function(){
//     console.log("I want to open the box!");
// })

// const welcomEr = document.getElementById("welcome");

// function greetUser(fname, lname){
//     welcomEr.textContent = `Hello ${fname} ${lname}, Welcome to Javascript haking!`
// }

// greetUser("Oliver", "Wekesa");




// //create a function that returns the first item in an array
// function gArray(fArray){
//     return fArray[0];
// }
// // call it with an array as an argument to verify that it works

// let fcard = gArray(["travel", "music", "coding", "coffee"]);
// console.log(fcard)