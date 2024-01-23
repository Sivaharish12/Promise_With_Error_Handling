// Promise With Error Handling

const election_state="tamilnadu";
const minimum_age=18;

function check_state(name_of_the_state){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let state=name_of_the_state.toLowerCase();
            if (state==election_state){
                resolve();
            }
            else{
                reject("The user must be in a specific state to vote for that state");
            }
        },3000);
    })
}

function check_age(age){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (age>=minimum_age){
                resolve();
            }
            else{
                reject("The Voter's Age must be greater than or equal to 18 for voting");
            }
        },3000);
    })
}

function State_Election(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },3000);
    });
}


voter_state="TamilNadu";
voter_age=20;

check_state(voter_state)
.then(()=>{
    console.log("The user state is verified");
    return check_age(voter_age);
})

.then(()=>{
    console.log("The Age is Verified");
    return State_Election();
})

.then(()=>{
    console.log("Your Vote is counted sucessfully");
})

.catch((err)=>console.error("The error is : ",err));
