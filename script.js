function getTotal() {
    let billAmount =document.getElementById('billAmount').value;
    let tipPercent = document.getElementById('tipPercent').value;
    let tipAmount = billAmount * (tipPercent / 100);
    let billTotal = tipAmount + billAmount;
    console.log(billTotal)
    document.getElementById('tipAmount').value = tipAmount
    document.getElementById('billAmount').value = billTotal
    
    return false
}