let monto=+prompt("Ingrese su sueldo aquí por favor 💸💰💵");
document.getElementById("suel").innerHTML=monto;
let bill=[200,100,50,20,10,];
let cantidad=[];
for(let i=0;i<bill.length;i++){
    let r=monto%bill[i];
    q=monto-r;
    let h=(q)/bill[i];
    monto=r;
    cantidad.push(h);
    document.getElementById("bill"+bill[i]).innerHTML=cantidad[i];
}
