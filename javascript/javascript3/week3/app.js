const createImgForm = document.getElementById("create-img-form");
const addImgUrlInput = document.getElementById("add-img-url");
const imgContainerDiv = document.getElementById("img-container");
// {imageUrl: 'https://storage.linebot.site/screenshotehm9zs1672879903897.png', _id: '63b61f2032f90d03e8f1000e'}
let screenshots;
const getScreenShotsPost = async () => {
  const response = await fetch(`${Basic_URL_SaveScreenShot}/screenshots`);
  const data = await response.json();
  screenshots = data;
  screenshots.forEach((screenshot) => {
    imgContainerDiv.innerHTML += postScreenShotsDiv(screenshot);
  });
};
const getScreenShots = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY_ScreenShot,
      "X-RapidAPI-Host": API_HOST_ScreenShot,
    },
  };
  try {
    const response = await fetch(
      `${Basic_URL_ScreenShot}+${addImgUrlInput.value}`,
      options
    );
    if (response.status != 200) {
      return "something went wrong";
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

const handleCreateImgForm = async (e) => {
  e.preventDefault();
  const getScreenShotsData = await getScreenShots();
  const body = { imageUrl: getScreenShotsData.screenshotUrl };
  const response = await fetch(`${Basic_URL_SaveScreenShot}/screenshots`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  imgContainerDiv.innerHTML += postScreenShotsDiv(data);
};

const postScreenShotsDiv = (screenshot) => {
  return ` <div id="screenshot-post">
<img src="${screenshot.imageUrl}" alt="screenshot">
<button onclick="handleDeletePost('${screenshot._id}')">Delete</button>
</div>`;
};

const handleDeletePost = async (postId) => {
  await fetch(`${Basic_URL_SaveScreenShot}/screenshots/${postId}`, {
    method: "DELETE",
  });

  screenshots = screenshots.filter((screenshot) => {
    if (screenshot._id !== postId) {
      return screenshot;
    }
  });
  imgContainerDiv.innerHTML = "";
  screenshots.forEach((screenshot) => {
    imgContainerDiv.innerHTML += postScreenShotsDiv(screenshot);
  });
};
getScreenShotsPost();
createImgForm.addEventListener("submit", (e) => handleCreateImgForm(e));
