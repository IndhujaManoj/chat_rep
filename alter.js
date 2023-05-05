function hideLogin() {
    document.getElementById('page1').style.display = "none"
    document.getElementById('page2').style.display = "block"
}
function hideReg() {
    document.getElementById('page2').style.display = "none"
    document.getElementById('page1').style.display = "block"

}
function loading() {
    document.getElementById('page1').style.display = "none"
    document.getElementById('page4').style.display = "block"


}
function chatLogout() {
    document.getElementById('page4').style.display = "none"
    document.getElementById('page1').style.display = "block"
}
function profileChanged() {
    document.getElementById('page7').style.display = "none"
    document.getElementById('page1').style.display = "block"

}
function inputClear() {
    document.getElementById("no").value = ""
    document.getElementById("new1").value = ""
    document.getElementById("psw").value = ""
    document.getElementById("mail").value = ""
    document.getElementById("name").value = ""
}
//chat

function msgimg() {
    document.getElementById("page4").style.display = "none"
    document.getElementById('page5').style.display = "block"
}
function chatLogout() {
    document.getElementById('page5').style.display = "none"
    document.getElementById('page1').style.display = "block"

}
function news() {
    document.getElementById("page4").style.display = "none"
    document.getElementById('page6').style.display = "block"
}
function profile() {
    document.getElementById("page4").style.display = "none"
    document.getElementById('page7').style.display = "block"
}
let index = ''
//login page
function loginHandling(event) {
    event.preventDefault()
    let username = document.getElementById('uname').value;
    let password = document.getElementById('password').value;

    for (let user of regUsers) {
        if (user.username === username && user.password === password) {
            index = regUsers.indexOf(user)
            alert('login successfull!')
            loading()
        }
    }
}
//register form

let regUsers = []
function registation(event) {
    event.preventDefault()
    //username
    var username = document.getElementById("name").value;
    var checkUsername = /^[a-zA-Z\s]/;
    var valuate = checkUsername.test(username)
    if (valuate == false) {
        document.getElementById("n1").innerHTML = "Please enter a Valid Username"
    }
    else if (valuate == true) {
        document.getElementById("n1").innerHTML = ""
    }

    //email-id
    var email = document.getElementById("mail").value;
    let checkEmail = /^\S+@\S+\.\S/;
    var valuate2 = checkEmail.test(email)
    if (valuate2 == false) {
        document.getElementById("n2").innerHTML = "Please enter a Valid mail-Id"
    }
    else if (valuate2 == true) {
        document.getElementById("n2").innerHTML = ""
    }

    //password
    var password = document.getElementById("psw").value;
    let checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&?])[A-Za-z\d#$@!%&?]{8,30}$/;
    var valuate3 = checkPassword.test(password);
    if (valuate3 == false) {
        document.getElementById("n3").innerHTML = "*password must contain min 1('uppercase','lowercase','special charcter','no') & '8-30' characters."
    }
    else if (valuate3 == true) {
        document.getElementById("n3").innerHTML = ""
    }

    //re-enter password
    var repassword = document.getElementById("new1").value;
    if (password != repassword || repassword == "") {
        document.getElementById("n4").innerHTML = "please enter correct password"
    }
    else if (password == repassword) {
        document.getElementById("n4").innerHTML = ""
    }

    //phone number
    var phoneno = document.getElementById("no").value;
    var checkPhoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/;
    var valuate4 = checkPhoneno.test(phoneno);
    if (valuate4 == false) {
        document.getElementById("n5").innerHTML = "please enter your 10 digit mobile no without +91"
    }
    else if (valuate4 == true) {
        document.getElementById("n5").innerHTML = ''
    }

    if (valuate == true && valuate2 == true && valuate3 == true && valuate4 == true && password == repassword) {
        f3 = document.getElementById('f3')
        var myobj = { username: username, password: password }
        regUsers.push(myobj)
        console.log(regUsers, "reg")
    }
}/*
var messageInput = document.getElementById("message-input");
let logoutButton = document.getElementById('logout-button')
var username = document.getElementById('uname').value;

var myArray = []

imgChat = document.getElementById('img1')
imgChat.addEventListener('click', messageInputfun)
function messageInputfun() {

    msgimg()
    logoutButton.addEventListener('click', function (event) {
        event.preventDefault()
        chatLogout()
    })
    function addMessage() {
        let username = document.getElementById('uname').value;

        myArray.push({ [username]: messageInput.value })
        console.log(myArray,"my")
        messageInput.value = '';
        display()
    }
    function display() {
        let username = document.getElementById('uname').value;
        let messages = ""
        console.log(myArray,"a")
       for (let i = 0; i <myArray.length; i++) {
        if (Object.keys(myArray[i]) == username) {
               messages += `<div class="text-right "><label class="current-user">${Object.values(myArray[i])}</label></div></br>`
          } else {

                messages += `<div class="text-left"><label class="old-user"><small>${Object.keys(myArray[i])}</small></br>${Object.values(myArray[i])}</label></div></br>`
            }
        }
        var chatContainer = document.getElementById("chat")

        chatContainer.innerHTML = messages;
        let chat = document.getElementById('chat-container')
        chat.scrollTop = chat.scrollHeight;
    }
    var sendButton = document.getElementById("send-button");
    sendButton.addEventListener("click", addMessage);
    display()
}*/
var messageInput = document.getElementById("message-input");
let logoutButton = document.getElementById('logout-button')
var username = document.getElementById('uname').value;

var myArray = []

imgChat = document.getElementById('img1')
imgChat.addEventListener('click', messageInputfun)
function messageInputfun() {

    msgimg()
    logoutButton.addEventListener('click', chatLogouts) 

    function addMessage() {
        let username = document.getElementById('uname').value;

        myArray.push({ [username]: messageInput.value })
        console.log(myArray,"my")
        messageInput.value = '';
        display()
    }/*
    function display() {
        let username = document.getElementById('uname').value;
        let messages = ""
        console.log(myArray,"a")
       for (let i = 0; i <myArray.length; i++) {
        if (Object.keys(myArray[i]) == username) {
               messages += `<div class="text-right "><label class="current-user">${Object.values(myArray[i])}</label></div></br>`
          } else {

                messages += `<div class="text-left"><label class="old-user"><small>${Object.keys(myArray[i])}</small></br>${Object.values(myArray[i])}</label></div></br>`
            }
        }
        var chatContainer = document.getElementById("chat")

        chatContainer.innerHTML = messages;
        let chat = document.getElementById('chat-container')
        chat.scrollTop = chat.scrollHeight;
    }*/
    function display() {
        let username = document.getElementById('uname').value;
        let messages = ""
        console.log(myArray, "a")
        for (let i = 0; i < myArray.length; i++) {
          let messageText = Object.values(myArray[i])[0];
          if (messageText.trim() !== "") {
            if (Object.keys(myArray[i]) == username) {
              messages += `<div class="text-right "><label class="current-user">${messageText}</label></div></br>`
            } else {
              messages += `<div class="text-left"><label class="old-user"><small>${Object.keys(myArray[i])}</small></br>${messageText}</label></div></br>`
            }
          }
        }
        var chatContainer = document.getElementById("chat")
        chatContainer.innerHTML = messages;
        let chat = document.getElementById('chat-container')
        chat.scrollTop = chat.scrollHeight;
      }
      
    var sendButton = document.getElementById("send-button");
    sendButton.addEventListener("click", addMessage);
    display()

}
function chatLogouts() {
    // Clear the myArray array
   // myArray = [];
    chatLogout()

    // Do other logout actions
}

//news
let imgNews = document.getElementById('img2')
imgNews.addEventListener('click', newShow)
function newShow() {
    news()
}
let display = document.getElementById('container')
let likeArray = []
let unlikeArray = []
let lastClick = []
function uptades() {
    let container = document.getElementById('container');
    container.style.display = 'none'
    let tabutton = document.getElementById('head1')
    tabutton.style.display = "none"
    for (i = 0; i < likeArray.length; i++) {
        my_likes = likeArray[i]

        let table = document.getElementById('table')
        var row = table.insertRow()
        var my_para = row.insertCell(0)
        var likeCells = row.insertCell(1)
        let remove = row.insertCell(2)
        likeCells.innerHTML = my_likes
        my_para.innerHTML = "Liked Messages :"
        remove.innerHTML = `<button onclick="removed(this)">Remove</button>`
    }
    for (i = 0; i < unlikeArray.length; i++) {
        let my_unlikes = unlikeArray[i]

        let unlikes = document.getElementById('unlikes')
        var row1 = unlikes.insertRow()
        var my_para1 = row1.insertCell(0)
        var unlikeCells = row1.insertCell(1)
        unl_Remove = row1.insertCell(2)
        my_para1.innerHTML = "Unliked Messages :"
        unlikeCells.innerHTML = my_unlikes;
        unl_Remove.innerHTML = `<button onclick="removed(this)">Remove</button>`
    }
}
function removed(button) {
    let removeRow = button.parentNode.parentNode;
    likeArray.splice(removeRow, 1);
    lastClick.splice(removeRow, 1)
    removeRow.remove()
}
fetch('https://api.rss2json.com/v1/api.json?rss_url=https://timesofindia.indiatimes.com/rssfeedstopstories.cms')
    .then(response => response.json())
    .then(data => {
        let items = data.items;
        let titles = ''
        for (let i = 0; i < items.length; i++) {
            titles += items[i].title + `<img src="like.png" id="like" class="like-btn"><img src="images.png" id="unlike" class="unlike-btn"></br> </br>`
        }
        display.innerHTML = titles
        let like_btn = document.querySelectorAll('.like-btn')
        like_btn.forEach(btn => {

            btn.addEventListener('click', function () {
                let text = btn.previousSibling.textContent
                lastClick.push(text)
                if (!likeArray.includes(text) && (!unlikeArray.includes(text))) {
                    likeArray.push(text)
                }
            })
        })
        let unlike_btn = document.querySelectorAll('.unlike-btn')
        unlike_btn.forEach(button => {
            button.addEventListener('click', function () {
                let unText = button.previousSibling.previousSibling.textContent
                lastClick.push(unText)
                if (!unlikeArray.includes(unText) && (!likeArray.includes(unText))) {
                    unlikeArray.push(unText)
                }
            })
        })
    })
    .catch(error => console.error(error));

//profile
let profileimg = document.getElementById('avatar')
profileimg.addEventListener('click', profileShow)
function profileShow() {
    profile()
    username = document.getElementById('uname').value;
    document.getElementById('head').innerHTML = username
}
function pass() {
    const newUsernameInput = document.createElement("input");
    const newPasswordInput = document.createElement("input");
    newUsernameInput.type = "text";
    newPasswordInput.type = "password";
    const saveButton = document.createElement("button");
    saveButton.innerText = "Save Changes";
    saveButton.addEventListener("click", () => {
        const newPassword = newPasswordInput.value;
        if (newPassword.length < 5) {
            alert("Password must be at least 5 characters long.");
            return;
        }
        const newUsername = newUsernameInput.value;
        regUsers.splice(index, 1, { username: newUsernameInput.value, password: newPasswordInput.value })
        alert("Your changes have been saved.");
        document.getElementById('head').innerHTML = newUsername
        container.style.display = 'none'
        profileChanged()

    });
    const container = document.createElement("div");
    container.setAttribute("id", "save")
    container.appendChild(document.createTextNode("New username: "));
    container.appendChild(newUsernameInput);
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createTextNode("New password: "));
    container.appendChild(newPasswordInput);
    container.appendChild(document.createElement("br"));
    container.appendChild(saveButton);
    document.body.appendChild(container);
}
