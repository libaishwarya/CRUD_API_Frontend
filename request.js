function createStudent(){
    let nameValue = document.getElementById("name").value
    let markValue = document.getElementById("mark").value
    let subjectValue = document.getElementById("subject").value
    let body = {
        "name": nameValue,
        "mark": markValue,
        "subject": subjectValue
    }

    postRequest("http://127.0.0.1:8080/user", body)
}

function viewStudent(){
    let userID = document.getElementById("user_id").value

    let url = "http://127.0.0.1:8080/user/" + userID
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("user_id").value = ""

            response.json().then((jsonData)=>{
                document.getElementById("result").innerHTML = JSON.stringify(jsonData)
                setTimeout(function(){
                    document.getElementById("result").innerHTML = ""
                },10000)
            })
        } else {
            console.log("Form submission failed!");
            // Handle form submission failure
        }
    })
}

function updateStudent() {

}

function deleteStudent(){

}


// utility function
function postRequest(url, body){
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("name").value = ""
            document.getElementById("mark").value = ""
            document.getElementById("subject").value = ""

            response.json().then((jsonData)=>{
                document.getElementById("feedback").innerHTML = "Student data created, id: " + jsonData.id
                setTimeout(function(){
                    document.getElementById("feedback").innerHTML = ""
                },2000)
            })
        } else {
            console.log("Form submission failed!");
            // Handle form submission failure
        }
    })
    .catch(error => {
        console.log("Error:", error);
        // Handle error during form submission
    });
}