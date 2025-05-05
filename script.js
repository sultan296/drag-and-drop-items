let items = document.querySelectorAll(".items")
let leftBox = document.querySelector(".leftbox")
let rightBox = document.querySelector(".rightbox")

for (item of items) {
    item.addEventListener("dragstart", (event)=>{
        let selected = event.target;

        rightBox.addEventListener("dragover", (event)=>{
            event.preventDefault();
        })
        rightBox.addEventListener("drop", ()=>{
            rightBox.appendChild(selected)
            selected = null
        })

        leftBox.addEventListener("dragover", (event)=>{
            event.preventDefault();
        })
        leftBox.addEventListener("drop", ()=>{
            leftBox.appendChild(selected)
            selected = null
        })
    })
}