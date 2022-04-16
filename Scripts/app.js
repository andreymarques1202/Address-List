function Add() {
    let address = document.querySelector("input[name='address']").value
    let house = document.querySelector("input[name='house']").value
    let city = document.querySelector("input[name='city']").value

    document.getElementById("list-form").reset()
    
    let save = new listSave(address, house, city)
    return save.impress()
}

class listSave extends savesHouse {
    impress() {
        let ulList = document.getElementById("list")
        let item = document.createElement("li")
        let br = document.createElement("br")
        let buttonRemove = document.createElement("button")
        
        item.setAttribute("data-aos", "zoom-in-up")
        buttonRemove.setAttribute("onclick", "removeItem(this)")
        buttonRemove.style.backgroundColor = "#fc6e41"
        buttonRemove.type = "button"
        buttonRemove.innerText = "Remove"
        
        item.innerText = `Address: ${this.address}\nN°: ${this.house}\nCity: ${this.city}\n`
       

        ulList.appendChild(item)
        item.appendChild(buttonRemove)
        ulList.appendChild(br)

        
        
    }

}

function removeItem(element) {
    let liRemove = element.parentNode
        
    document.getElementById("list").removeChild(liRemove)
}

