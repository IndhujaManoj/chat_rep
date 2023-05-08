function hideLogin() {
    document.getElementById('page1').style.display = "none"
    document.getElementById('page2').style.display = "block"
}
function hideReg() {
    document.getElementById('page2').style.display = "none"
    document.getElementById('page1').style.display = "block"
}
function homePage() {
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
    document.getElementById('n1').innerHTML=""
    document.getElementById('n2').innerHTML=""
    document.getElementById('n3').innerHTML=""
    document.getElementById('n4').innerHTML=""
    document.getElementById('n4').innerHTML=""
}
function newsLogout(){
    document.getElementById('page6').style.display='none'
    document.getElementById('page4').style.display='block'
}
function msgimg() {
    document.getElementById("page4").style.display = "none"
    document.getElementById('page5').style.display = "block"
}
function chatLogout() {
    document.getElementById('page5').style.display = "none"
    document.getElementById('page4').style.display = "block"
}
function news() {
    document.getElementById("page4").style.display = "none"
    document.getElementById('page6').style.display = "block"
}
function profile() {
    document.getElementById("page4").style.display = "none"
    document.getElementById('page7').style.display = "block"
}
function mainLogButton(){
    document.getElementById("page4").style.display="none"
    document.getElementById('page1').style.display = "block"

}
let index = ''
//login page
function loginHandling(event) {
    event.preventDefault()
    let username = document.getElementById('uname').value;
    let password = document.getElementById('password').value;

    let foundUser=false
    for (let user of regUsers) {
        if (user.username === username && user.password === password) {
            index = regUsers.indexOf(user)
            alert('login successfull!')
            homePage()
            foundUser = true;
            break;
        }
    }
    if (!foundUser) {
        alert('Invalid username or password');
    }
}
//________________________________________________________________________________REGISTATION FORM__________________________________________________________________
let regUsers = []
function registerUser(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("mail");
    const passwordInput = document.getElementById("psw");
    const repasswordInput = document.getElementById("new1");
    const phoneInput = document.getElementById("no");
  
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const repasswordValue = repasswordInput.value.trim();
    const phoneValue = phoneInput.value.trim();
  
    let error = 0;
    if (!nameValue) {
     document.getElementById("n1").innerHTML = "Please enter a Valid Username"
     error++
    }
    if (!emailValue.match(/^\S+@\S+\.\S+$/)) {
     document.getElementById("n2").innerHTML = "Please enter a Valid email"
error++
    }
    if (!passwordValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&?])[A-Za-z\d#$@!%&?]{8,30}$/)) {
        document.getElementById("n3").innerHTML ="Password must contain at least 1 uppercase, 1 lowercase, 1 special character, and 1 digit, and be between 8 and 30 characters"
    error++
    }
    if (passwordValue !== repasswordValue) {
        document.getElementById("n4").innerHTML ="Passwords do not match"
    error++
    }
    if (!phoneValue.match(/^[\d]{10}$/)) {
        document.getElementById("n5").innerHTML ="Please enter a 10-digit phone number"
    error++
    }
    if (error!= 0) {
        alert('please fill valid information')
    } else {
      const newUser = {username: nameValue,password: passwordValue};
      regUsers.push(newUser);
      console.log(regUsers, "reg");
      inputClear();
      hideReg();
    } }
//__________________________________________________________________GROUP CHAT____________________________________________________________________________________________
var messageInput = document.getElementById("message-input");
let logoutButton = document.getElementById('logout-button')
var username = document.getElementById('uname').value;

var myArray = []

imgChat = document.getElementById('img1')
imgChat.addEventListener('click', messageInputfun)
function messageInputfun() {

    msgimg()
    logoutButton.addEventListener('click', chatLogout) 

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
//_____________________________________________________________NEWS____________________________________________________________________________________________
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
    let tabutton=document.getElementById('head1')
         tabutton.style.display="none"
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
            titles += items[i].title + `<img src="like.png" id="like" class="like-btn"><img src="un.png" id="unlike" class="unlike-btn"></br> </br>`
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
    //___________________________________________________________________PROFILE CHANGE_________________________________________________________________________________________

let profileimg = document.getElementById('avatar');
profileimg.addEventListener('click', profileShow)
function profileShow() {
    profile()
    username = document.getElementById('uname').value;
    document.getElementById('head').innerHTML = username;
}
function profileChange() {
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
