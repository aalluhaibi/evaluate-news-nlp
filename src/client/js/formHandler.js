function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (Client.checkForName(formText)) {
        console.log("::: Form Submitted :::")

        fetch('http://localhost:8081/data', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            // Body data type must match "Content-Type" header        
            body: JSON.stringify({ url: formText }),
        })
            .then(result => result.json())
            .then(result => {
                console.log("::: Result Recieved :::", result)
                document.getElementById('agreement').innerHTML = "Agreement: " + result.agreement
                document.getElementById('confidence').innerHTML = "Confidence: " + result.confidence
                document.getElementById('irony').innerHTML = "Irony: " + result.irony
                document.getElementById('model').innerHTML = "Model: " + result.model
                document.getElementById('score_tag').innerHTML = "Score Tag: " + result.score_tag
                document.getElementById('subjectivity').innerHTML = "Subjectivity: " + result.subjectivity
            })
    }
}

export { handleSubmit }