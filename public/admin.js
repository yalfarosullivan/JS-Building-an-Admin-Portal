
// Your Code Here
async function saveShinobi() {
    let inputValue = document.getElementById("shinobi-input").value
    console.log('BUTTON')
    console.log(inputValue)
    let response = await fetch('http://localhost:3001/listBooks', {
    method: "PATCH"
    headers: {
        'Content-Type' : 'application/json'
        },
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
        },
            body: JSON.stringify({
                "id" : 3,
                "quantity": inputValue
            })
        })
        }

        async function saveAnnals() {
            let inputValue = document.getElementById("annals-input").value
            console.log('BUTTON')
            console.log(inputValue)
            let response = await fetch('http://localhost:3001/listBooks', {
            method: "PATCH"
            headers: {
                'Content-Type' : 'application/json'
            },
                body: JSON.stringify({
                    "id" : 2,
                    "quantity": inputValue
                })
            })
            }

            async function saveWarp() {
                let inputValue = document.getElementById("warp-input").value
                console.log('BUTTON')
                console.log(inputValue)
                let response = await fetch('http://localhost:3001/listBooks', {
                method: "PATCH"
                headers: {
                    'Content-Type' : 'application/json'
                },
                    body: JSON.stringify({
                        "id" : 1,
                        "quantity": inputValue
                    })
                })
                }
