const createLoginForm = document.getElementById("create-login-form");
const inputUsername = document.getElementById("input-username");
const inputEmail = document.getElementById("input-email");
const inputPwd = document.getElementById("input-pwd");
const buttonSignUP = document.getElementById("signup-button");
const buttonLogin = document.getElementById("login-button");

let postUsername;
let postPassword;
let flagSignUP = true;
let flagLogin = false;
const isValidUsername = (userName) => {
  const patrn_username = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
  if (!patrn_username.exec(userName)) {
    alert("Valid user names allow Chinese, English, numbers and underscores");
  } else {
    postUsername = userName;
  }
};
const isValidPassword = (pwd) => {
  const patrn_pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
  if (!patrn_pwd.exec(pwd)) {
    alert(
      "Password must contain a combination of upper and lower case letters and numbers, no special characters, length between 8 and 10"
    );
  } else {
    postPassword = pwd;
  }
};
const createLoginUrl = async () => {
  const body = {
    userName: postUsername.toLowerCase(),
    email: inputEmail.value.toLowerCase(),
    password: postPassword.toLowerCase(),
  };
  const response = await fetch(`${Basic_URL_Login}/Login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
};
const isrepeatedUserName = async () => {
  const response = await fetch(`${Basic_URL_Login}/Login`);
  const data = await response.json();
  console.log(data);
  data.forEach((el) => {
    if (el.userName === postUsername.toLowerCase()) {
      alert("This name has been used");
      flagSignUP = false;
    }
  });
  if (flagSignUP) {
    createLoginUrl();
  }
};

const handleCreateLoginForm = (e) => {
  e.preventDefault();
  isValidUsername(inputUsername.value);
  isValidPassword(inputPwd.value);
  isrepeatedUserName();
};

const handleLogin = async (e) => {
  e.preventDefault();
  isValidUsername(inputUsername.value);
  isValidPassword(inputPwd.value);
  const response = await fetch(`${Basic_URL_Login}/Login`);
  const data = await response.json();
  data.forEach((el) => {
    if (
      el.userName === postUsername.toLowerCase() &&
      el.email === inputEmail.value.toLowerCase() &&
      el.password === postPassword.toLowerCase()
    ) {
      flagLogin = true;
    }
  });
  if (flagLogin) {
    window.location.href = "app.html";
  } else {
    alert("You should sign up first");
  }
};

buttonSignUP.addEventListener("click", (e) => {
  handleCreateLoginForm(e);
});
buttonLogin.addEventListener("click", (e) => {
  handleLogin(e);
});

/* delete url
const deleteUrl = async (id) => {
  await fetch(`${Basic_URL_Login}/Login/${id}`, {
    method: "DELETE",
  });
};
const DeleteUrl = async () => {
  const response = await fetch(`${Basic_URL_Login}/Login`);
  const data = await response.json();
  console.log(data);
  const id = data.map((e) => e._id);
  console.log(id);
  id.forEach((e) => deleteUrl(e));
};
DeleteUrl();
 */
