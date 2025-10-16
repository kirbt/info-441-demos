async function createUser() {
    let first_name = document.getElementById('first_name_input').value
    let last_name = document.getElementById('last_name_input').value
    let favorite_ice_cream = document.getElementById('favorite_ice_cream_input').value

    let myData = {
        "first_name": first_name,
        "last_name": last_name,
        "favorite_ice_cream": favorite_ice_cream
    }

    let resposne = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(myData),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
}

async function getUsers() {
    let response = await fetch('/api/users')
    let userData = await response.json()

    document.getElementById('results').innerHTML =
        json.stringify(userData)
}

// async function getPterosaurs(){
//     let response = await fetch("api/getPterosaurs")
//     try{
//         let PterosaurJson = await response.json()

//         let PterosaurHtml = PterosaurJson.map(onePterosaur => {
//             return `
//             <div>
//             <p>${onePterosaur.Genus}</p>
//             <img src="${onePterosaur.img}" />
//             </div>
//             `
//         }).join("")
//         document.getElementById('results').innerHTML = PterosaurHtml

//     } catch(err){
//     document.getElementById('results').innerHTML = `
//         Status: ${response.status}: ${response.statusText} <br>
//         Error: ${err}`
//     }

// }

