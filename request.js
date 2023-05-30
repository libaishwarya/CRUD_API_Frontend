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

            document.getElementById("feedback").innerHTML = "Student data created"
            setTimeout(function(){
                document.getElementById("feedback").innerHTML = ""
            },2000)
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