// const url = 'http://192.168.100.168/delete-anime'
// const deleteButtons = document.querySelectorAll('.delete')
// // const animeId = deleteButtons.dataset.id


// // document.addEventListener('DOMContentLoaded', ()=>{
// //     console.log(deleteButtons)
// // })

// deleteButtons.forEach(button => {
//     button.addEventListener('click', (e)=>{
//         let button = e.target
//         let animeId = {animeId: button.dataset.id}

//         fetch(url, {
//             method: 'POST',
//             headers: new Headers({'Content-type': 'application/json'}),
//             body: JSON.stringify(animeId)
//         }).then(response => {
//             return response.json()
//         }).then(data => {
//             console.log(data)
//         })

//         console.log(animeId)
//     })
// })
