const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let a=document.querySelectorAll(".price")
	let sum=0;
	for(let i=0; i < a.length;i++){
		sum += parseInt(a[i].textContent);
	}
	let table=document.queryselector("table");
	const row= document.createElement("tr");
	let data=document.createElement("td");
	data.id="ans"
	row.appendchild(data)
	table.appendChild(row)
getSumnum.append(sum);
document.body.appendChild(getSumnum);
	
};


getSumBtn.addEventListener("click", getSum);

