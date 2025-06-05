const showLogin = () => {
    let str=`
    <div class='App-Container'>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button onclick="Welcome()">Log In</button></p>
    <p><button onclick="showRegister()">Create Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
      let str=`
    <div class='Register-Container'>
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <button>Register</button>
    <p><button onclick="showLogin()">Already have an account</button></p>
    </div>
    `
    root.innerHTML = str
}
const Welcome = () => {
    let str = `
    <p>Welcome to the website</p>    
     `
     root.innerHTML = str
} 