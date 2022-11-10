let myTodoList = [];
let yourName = "";
function getReply(command) {
  if (command.startsWith("Hello my name is")) {
    if (yourName === command.split(" ")[command.split(" ").length - 1]) {
      console.log("You have input your name");
    } else {
      yourName = command.split(" ")[command.split(" ").length - 1];
      console.log(`Nice to meet you ${yourName}`);
    }
  } else if (command === "What is my name") {
    if (!yourName.length) {
      console.log(
        `You should input your name with this format:Hello,my name is xxx`
      );
    } else {
      console.log(`Your name is ${yourName}`);
    }
  } else if (command.endsWith("to my todo")) {
    const AddForTodoList = command.slice(4, -11);
    myTodoList.push(AddForTodoList);
    console.log(`${AddForTodoList} added to your todo list`);
  } else if (command.endsWith("from my todo")) {
    const RemoveForTodoList = command.slice(7, -13);
    if (myTodoList.includes(RemoveForTodoList)) {
      myTodoList.splice(myTodoList.indexOf(RemoveForTodoList), 0);
      console.log(`Removed ${RemoveForTodoList} from your todo`);
    } else {
      console.log(`${RemoveForTodoList} is not in your todo list`);
    }
  } else if (command === "What is on my todo?") {
    if (myTodoList.length) {
      myTodoList.splice(-1, 1, `and ${myTodoList.slice(-1)}`);
      console.log(
        `you have ${myTodoList.length} todos - ${myTodoList.join(",")}`
      );
    } else {
      console.log(`There is nothing in your todo list`);
    }
  } else if (command === "What day is it today?") {
    const today = new Date();
    console.log(
      `Today is ${today.getDate()} of ${today.toLocaleDateString("en-GB", {
        month: "long",
      })} ${today.getFullYear()}`
    );
  } else if (command.startsWith("What is")) {
    const calculation = command.slice(8, -1);
    console.log(eval(calculation));
  } else if (command.startsWith("Set a timer")) {
    console.log(`Timer set for ${command.slice(16)}`);
    setTimeout(() => {
      console.log("Time done");
    }, command.slice(16, 17) * 60 * 1000);
  } else {
    console.log(`I don't understand you`);
  }
}

getReply("Hello my name is Benjamin");
getReply("What is my name");
getReply("Add singing in the shower to my todo");
getReply("Add fishing to my todo");
getReply("What is on my todo?");
getReply("What day is it today?");
getReply("What is 3+3*4-6/2?");
getReply("Set a timer for 4 minutes");
getReply("Sing a song");
