let count = 0
let countEl = document.getElementById("count")
let saveEl = document.getElementById("counts-saved")


function increment() {
    count = count + 1
    countEl.innerText = count
}

function save(){
    let countString = ` ${count} -`
    // let countDash = " " + count + " - "
    saveEl.textContent += countString
    count = 0 
    countEl.innerText = 0   
}
