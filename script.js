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
	
	const getSumnum = document.createElement("tr");
getSumnum.append(sum);
document.body.appendChild(getSumnum);
	
};


getSumBtn.addEventListener("click", getSum);

