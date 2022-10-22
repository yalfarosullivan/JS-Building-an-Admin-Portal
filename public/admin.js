
// Your Code Here
async function saveShinobi() {
    let inputValue = document.getElementById("shinobi-input").value
    console.log('BUTTON')
    console.log(inputValue)
    let response = await fetch('http://localhost:3001/listBooks', {
    method: "PATCH"
    headers:{
        'Content-Type' : 'application/json'
        body: JSON.stringify({
            "id" : 1,
            "quantity": inputValue
        })
    })
    }

    async function saveTess() {
        let inputValue = document.getElementById("tess-input").value
        console.log('BUTTON')
        console.log(inputValue)
        let response = await fetch('http://localhost:3001/listBooks', {
        method: "PATCH"
        headers:{
            'Content-Type' : 'application/json'
            body: JSON.stringify({
                "id" : 1,
                "quantity": inputValue
            })
        })
        }
