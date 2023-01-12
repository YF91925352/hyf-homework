const createLoginForm = document.getElementById("create-login-form");
const inputUsername = document.getElementById("input-username");
const inputEmail = document.getElementById("input-email");
const inputPwd = document.getElementById("input-pwd");
const buttonSignUP = document.getElementById("signup-button");
const buttonLogin = document.getElementById("login-button");

const isValidUsername = (userName) => {
  const patrn_username = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
  if (!patrn_username.test(userName)) {
    alert("Valid user names allow Chinese, English, numbers and underscores");
    return false;
  } else {
    return true;
  }
};
const isValidPassword = (pwd) => {
  const patrn_pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
  if (!patrn_pwd.test(pwd)) {
    alert(
      "Password must contain a combination of upper and lower case letters and numbers, no special characters, length between 8 and 10"
    );
    return false;
  } else {
    return true;
  }
};
const createLoginUrl = async () => {
  const body = {
    userName: inputUsername.value.toLowerCase(),
    email: inputEmail.value.toLowerCase(),
    password: inputPwd.value.toLowerCase(),
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
const isavailableUserName = async (username) => {
  const response = await fetch(`${Basic_URL_Login}/Login`);
  const data = await response.json();
  console.log(data);
  const isUsed = data.some((el) => el.userName === username.toLowerCase());
  if (isUsed) {
    alert("This name has been used");
    return false;
  } else {
    return true;
  }
};
const isSignedUp = async () => {
  const response = await fetch(`${Basic_URL_Login}/Login`);
  const data = await response.json();
  const isSignedUp = data.some((el) => {
    return (
      el.userName === inputUsername.value.toLowerCase() &&
      el.email === inputEmail.value.toLowerCase() &&
      el.password === inputPwd.value.toLowerCase()
    );
  });
  if (isSignedUp) {
    window.location.href = "app.html";
  } else {
    alert("You should sign up first");
  }
};
const handleCreateLoginForm = async (e) => {
  isValidUsername(inputUsername.value) &&
    isValidPassword(inputPwd.value) &&
    isavailableUserName(inputUsername.value) &&
    createLoginUrl();
};

const handleLogin = async (e) => {
  isValidUsername(inputUsername.value) &&
    isValidPassword(inputPwd.value) &&
    isSignedUp();
};

buttonSignUP.addEventListener("click", handleCreateLoginForm);
buttonLogin.addEventListener("click", handleLogin);

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
