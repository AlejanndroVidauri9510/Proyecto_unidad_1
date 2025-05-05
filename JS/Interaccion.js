// creamos un arrglo 
let cuentas=[
    { nombre: "Persona1", numero:"1234567890123456", password: "12345", saldo: 5000},
    { nombre: "Persona2", numero:"2345678901234567", password: "2525", saldo: 15000},
    { nombre: "Persona3", numero:"3456789012345678", password: "2525", saldo: 45000},
    { nombre: "Persona4", numero:"4567890123456789", password: "2525", saldo: 150000},
    { nombre: "Persona5", numero:"5678901234567890", password: "2525", saldo: 250000},

];

let CuentaSeleccionada = null; 

window.onload = ()=>{
    const select = document.getElementById("accountSelect");
    cuentas.forEach((cuentas, index)=>{
        const option =document.createElement("option");
        option.value =index;
        option.textContent= `${cuentas.nombre} - ${cuentas.numero}`;
        select.appendChild(option);
    });
};

// Creamos la función long 
function login(){
    const indexValue = document.getElementById("accountSelect").value;
    const password = document.getElementById("password").value;

    if (indexValue === "") {
        alert('Seleccione una cuenta');
        return;
    }

    if (password === "") {
        alert('Ingrese una contraseña');
        return;
    }

    const index = parseInt(indexValue);
    const cuenta = cuentas[index];

    // Debugging
    console.log("Índice seleccionado:", index);
    console.log("Cuenta obtenida:", cuenta);
    console.log("Contraseña ingresada:", password);
    console.log("Contraseña real:", cuenta.password);

    if (cuenta && cuenta.password === password) {
        CuentaSeleccionada = cuenta;
        document.getElementById('actions').classList.remove('hidden');
        document.getElementById('output').textContent = `Bienvenido, ${cuenta.nombre}`;
    } else {
        alert('Contraseña incorrecta, intente de nuevo');
    }
}

// Creamos la función consultar saldo 
function ConsultarSaldo(){
    document.getElementById('output').textContent =`Saldo actual: $${CuentaSeleccionada.saldo}`;
}

// Creamos la funcion ingrear monto
function IngresarMonto(){
    let monto = parseFloat(prompt('Ingresar monto a depositar: '));
    if(isNaN(monto)|| monto<=0){
        alert('Monto invalido');
        return;
    }
    let nuevoSaldo = CuentaSeleccionada.saldo + monto;
    if(nuevoSaldo > 99999.99){
        
        alert('No puedes ecceder de $99,999.99');

    }else{

        CuentaSeleccionada.saldo= nuevoSaldo;
        alert(`Se ingresaron $${monto}.Nuevo saldo: $${CuentaSeleccionada.saldo}`);
    }
}

// Creamos la funcion retirar monto 
function RetirarMonto(){
        let monto = parseFloat(prompt('Ingrese el monto aretirar'));
        if(isNaN(monto)|| monto <=0){
            alert('moto invalido');
            return;
        }
        let nuevoSaldo = CuentaSeleccionada.saldo - monto;
        if (nuevoSaldo < 1000) {
            alert("No puedes tener menos de $1,000 en la cuenta.");
          } else {
            CuentaSeleccionada.saldo = nuevoSaldo;
            alert(`Se retiraron $${monto}. Nuevo saldo: $${CuentaSeleccionada.saldo}`);
          }
}