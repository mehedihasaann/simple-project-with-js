document.getElementById('depositbtn').addEventListener('click', function () {

    const getdepsit = document.getElementById('depositfield');
    const getvalue = getdepsit.value;
    console.log(getvalue);
    const addDeposit = document.getElementById('depositadd');
    const previousdeposit = parseFloat(addDeposit.innerText);
    const newdepositamount = parseFloat(getvalue);

    const totaldepositamount = previousdeposit + newdepositamount;
    addDeposit.innerText = totaldepositamount;
    getdepsit.value = "";
    const balance = document.getElementById('updatebalance');
    const getbalance = balance.innerText;

    const previousBalance = parseFloat(getbalance);
    const updateBalance = previousBalance + newdepositamount;
    balance.innerText = updateBalance;





})

document.getElementById('withdrawbtn').addEventListener('click', function () {

    console.log('clicked');
    const getwithdrawamount = document.getElementById('withdrawfiled');
    const getamount = getwithdrawamount.value;
    const withdrawShow = document.getElementById('withdrawshow');

    const previoutwithdraw = parseFloat(withdrawShow.innerText);

    const updatewithdraw = parseFloat(getamount);
    const withdrawTotal = previoutwithdraw + updatewithdraw;
    withdrawShow.innerText = withdrawTotal;
    getwithdrawamount.value = "";

    const balance = document.getElementById('updatebalance');
    const getbalance = balance.innerText;

    const previousBalance = parseFloat(getbalance);
    const updateBalance = previousBalance - updatewithdraw;
    balance.innerText = updateBalance;


})















