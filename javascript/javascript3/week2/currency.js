const fetchCurrency = async (baseCurrency = "USD") => {
  try {
    const response = await fetch(
      `https://open.er-api.com/v6/latest/${baseCurrency}`
    );
    if (response.status != 200) {
      return `something went wrong`;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

const iptNum = document.querySelector("#iptNum");
const outNum = document.querySelector("#outNum");
const iptCur = document.querySelector("#iptCur");
const outCur = document.querySelector("#outCur");
const btn = document.querySelector("#convert");

const listCurrency = async () => {
  const data = await fetchCurrency();
  const listCur = Object.keys(data.rates);
  listCur.forEach((e) => {
    const optIn = document.createElement("option");
    optIn.text = e;
    if (e === "EUR") {
      optIn.selected = true;
    }
    iptCur.appendChild(optIn);
    const optOut = document.createElement("option");
    optOut.text = e;
    if (e === "DKK") {
      optOut.selected = true;
    }
    outCur.appendChild(optOut);
  });
};
listCurrency();

const calculate = async () => {
  const data = await fetchCurrency(iptCur.value);
  const list = data.rates;
  outNum.value = Number(iptNum.value) * list[outCur.value];
};
btn.addEventListener("click", calculate);
