'use strict'

const btnGetUsers = document.getElementById("btnGetUsers")
btnGetUsers.addEventListener("click", getUsers)

const form = document.querySelector('.form-inline')
form.addEventListener("submit", event => event.preventDefault())

const divForUsers = document.getElementById("divForUsers")

async function getUsers() {
    const userName = document.querySelector("#qString")
    if (userName.value !== "") {
        const url = `https://api.github.com/search/users?per_page=50&q=${userName.value}`
        const response = await fetch(url)
        const result = await response.json()
        divForUsers.innerHTML = ""
        userName.value = ""
        result.items.forEach(user => showUserCard(user))
        console.log("VS code check")
    }
}

function showUserCard(user) {
    const htmlCard = `
        <div class="card" style="width: 18rem;" >
            <img src="${user.avatar_url}" class="card-img-top" alt="User Avatar">
            <div class="card-body">
                <p class="card-text">${user.login}</p>
                <a href="${user.html_url}" target="_blank" class="btn btn-primary">Open github profile</a>
            </div>
        </div>
        `
    divForUsers.insertAdjacentHTML("beforeend", htmlCard)
}
