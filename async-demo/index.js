// =======================================
// Asyncronous program
// console.log('before');
// setTimeout(()=>{
//     console.log('reading detabase.....');
// },2000);
// console.log('after');

// ===================================
// Asyncronous pattern

// console.log('before');
// const user = getUser(1)
// console.log(user);
// console.log('after');
// function getUser(id){
//     setTimeout(()=>{
//         console.log('reading detabase.....');
//         return {id:id, username:'Mosh'};
//     },2000);
// }

// before
// undefined // this is beacause it not ready at this point of time 
// after
// reading detabase.....



// to handle this we have 
// 1. Callbacks
// 2. Promises
// 3. async/await

// ===============================================================
// Callback

// console.log('before');
// getUser(1,function(user){
//     console.log('user :',user)
// });
// console.log('after');
// function getUser(id,callback){
//     setTimeout(()=>{
//         console.log("reading detabase.....");
//         callback({id:id, username:'Mosh'});
//     },2000);
// }


// ---------------------------------------------

// console.log('before');
// getUser(1,(user) => console.log('user :',user));
// console.log('after');
// function getUser(id,callback){
//     setTimeout(()=>{
//         console.log("reading detabase.....");
//         callback({id:id, username:'Mosh'});
//     },2000);
// }


// -------------------------------------------

// console.log('before');
// getUser(1,(user) =>{ 
//     // get reposs
//     getRepos(user.username,(repo) => {
//         console.log(`Repos`,repo);
//     })
// });
// console.log('after');
// function getUser(id,callback){
//     setTimeout(()=>{
//         console.log("reading detabase.....");
//         callback({id:id, username:'Mosh'});
//     },2000);
// }

// function getRepos(username,callback){
//     setTimeout(()=>{
//         console.log('calling github API......');
//         callback(["repo1","repo2","repo3"]);
//     },2000)
    
// }


// ==========================================================
// Callback Hell

// the above code get callback inside another callback inside anthor callback 
// this make code difficult to undestand and maintain and hard to debug 
// this type of code is called callback hell or chrismus problem.

// ===========================================================================

// callback hell solution
// replace anonomous functions to named function 

console.log('before');

// Start the process by calling getUser
getUser(1, handleUser);

console.log('after');

// Named function to handle the user data
function handleUser(user) {
    getRepos(user.username, handleRepos);
}

// Named function to handle the repos
function handleRepos(repos) {
    getCommits(repos[0], displayCommits); // Assuming we want to get commits for the first repo
}

// Named function to handle the commits
function handleCommits(repo) {
    getCommits(repo, displayCommits);
}

// Named function to display the commits
function displayCommits(commits) {
    console.log(commits);
}

// Function to simulate getting user data from a database
function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading database.....");
        callback({ id: id, username: 'Mosh' });
    }, 2000);
}

// Function to simulate getting repos from GitHub API
function getRepos(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API......');
        callback(["repo1", "repo2", "repo3"]);
    }, 2000);
}

// Function to simulate getting commits for a repo
function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Getting commits for repo:', repo);
        callback(["commit1", "commit2", "commit3"]);
    }, 2000);
}

