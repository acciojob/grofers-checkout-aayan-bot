const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Remove existing answer row if present
  const existingAns = document.getElementById("ans");
  if (existingAns) {
    existingAns.parentElement.remove();
  }

  let prices = document.querySelectorAll(".price");
  let sum = 0;
  
  prices.forEach(p => {
    sum += parseInt(p.textContent) || 0;
  });

  let table = document.querySelector("table");
  const row = document.createElement("tr");
  let data = document.createElement("td");
  
  data.id = "ans";
  data.setAttribute("colspan", "2");
  data.textContent = sum;
  
  row.appendChild(data);
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

