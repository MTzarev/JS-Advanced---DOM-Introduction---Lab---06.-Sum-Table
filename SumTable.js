function sumTable() {
let rows = document.querySelectorAll(`table tr`);
let sum = 0;
for (let i=1; i<rows.length-1; i++){
    let cols = rows[i].lastChild;
   sum+=Number(cols.textContent);
}
document.getElementById(`sum`).textContent=sum
}