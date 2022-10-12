// Synonyms:

// Template Literals
// Template Strings
// String Templates
// Back-Tics Syntax

const name = 'John';
const age = 30;
const job = 'Web developer';
const city = "Chennai";

let html;


// Without template strings (e5s)

html = "<ul><li> Name: " + name + 
        "</li><li>Age : " + age + 
        "</li><li>Job: " + job + 
        "</li><li>City :" + city 
        + "</li></ul>"

        
function hello(){
    return "hello";
}     


html = `
        <ul>
           <li>Name: ${name}</li>
           <li>Age: ${age}</li>
           <li>Job: ${job}</li>
           <li>City: ${city}</li>
            <li>${2 + 2}</li>
            <li>${hello()}</li>
            <li>${age >= 30 ? "Over 30" : "Under 30"}</li>
        </ul>
    `; 


document.body.innerHTML = html;