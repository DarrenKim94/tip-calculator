function getTotal() {
    const billAmount = parseInt(document.getElementById('billAmount').value);

    const tipPercent = document.getElementById('tipPercent').value;

    const tipAmount = billAmount * (tipPercent / 100);

    const billTotal = tipAmount + billAmount;
    
    document.getElementById('tipAmount').value = tipAmount

    document.getElementById('billTotal').value = billTotal;
    
    return false
}