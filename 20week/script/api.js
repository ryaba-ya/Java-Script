const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7014b1ace0msh189cfcb3f4d8cc0p10ff59jsn118d8d3ea1ec',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};
function calculate(){
fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${document.getElementById("firstName").value}&fname=${document.getElementById("secName").value}`, options)
	.then(response => response.json())
	.then(date => {console.log(date)
       console.log(date.fname)
    document.getElementById("ok").innerText=date.result;
    document.getElementById("prsnt").innerText=`${date.percentage}%`;
   
    console.log( date.result)
    


})
	.catch(err => console.error(err));
}
   document.querySelector(".btn").addEventListener("click",calculate)