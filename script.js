
document.getElementById("5per").addEventListener('click', function(){
  calculateTotal(5)
});

document.getElementById("10per").addEventListener('click', function(){
  calculateTotal(10)
});

document.getElementById("15per").addEventListener('click', function(){
  calculateTotal(15)
});

document.getElementById("25per").addEventListener('click', function(){
  calculateTotal(25)
});

document.getElementById("50per").addEventListener('click', function(){
  calculateTotal(50)
});



function calculateTotal(tip){

  const bill = document.getElementById("bill");
  let tipAmt = document.getElementById("tipAmt");
  let peopleAmt = document.getElementById("peopleAmt");

  //alert(peopleAmt)

  if(bill.value === '0' ){
    bill.classList.add('error');
  } else {
    bill.classList.remove('error');
  }

  if(peopleAmt.value === '0' ){
    peopleAmt.classList.add('error');
  } else {
    peopleAmt.classList.remove('error');
  }

  if(bill.value !== '0' && peopleAmt.value !== '0'){

    const calcTip =  Number(bill.value) * Number(tip.toFixed() * 0.01);
    const calcPerPerson = calcTip / Number(peopleAmt.value);

    const calcTotal = Number(bill.value) / Number(peopleAmt.value);


    tipAmt.innerHTML = "$" + Number(calcPerPerson).toFixed(2);
    totalAmt.innerHTML = "$" + Number(calcTotal).toFixed(2);


  }

  document.getElementById("reset").addEventListener("click", function() {

    tipAmt.innerHTML = "$0.00";
    totalAmt.innerHTML = "$0.00";

    document.getElementById("bill").value = 0;
    document.getElementById("peopleAmt").value = 0;


  })


}