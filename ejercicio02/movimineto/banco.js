export default class Hotel 
{
    
    constructor(tablaBanco, tablainfo) 
    {
        this._tablaBanco = tablaBanco;
        this._tablainfo = tablainfo;
        this._Depositos = 0;
        this._Retiros = 0;
        this._movimientos = 0;
        this._saldo = 10000;
        this._contadorD=0;
        this._contadorR=0;
    }


    addEmp(emp) 
    {
        let row = this._tablaBanco.insertRow(-1);
        let cellName = row.insertCell(0);
        let celltransacion = row.insertCell(1);
        let cellcantidad = row.insertCell(2);
        let celldia = row.insertCell(3);
        let cellanotado = row.insertCell(4);
        let cellsaldo = row.insertCell(5);
        cellName.innerHTML = emp.name;
        celltransacion.innerHTML = emp.select;
        cellcantidad.innerHTML = emp.cantidad;
        celldia.innerHTML = emp.getTransación();
        cellanotado.innerHTML = emp.anotado;
        let select = emp.select;
        let cantidad =  Number(emp.cantidad)
        if(select  === "retiro")
        {
            this._saldo = this._saldo - cantidad;
            this._contadorR = this._contadorR + cantidad;
            this._Retiros++; 
            this._movimientos++;
        }
        else if(select  === "deposito")
        {
            this._saldo = this._saldo + cantidad;
            this._contadorD = this._contadorD + cantidad; 
            this._Depositos++;
            this._movimientos++;
        }
        this._tablainfo.rows[1].cells[1].innerHTML = this._Depositos;
        this._tablainfo.rows[2].cells[1].innerHTML = this._contadorD;
        this._tablainfo.rows[3].cells[1].innerHTML = this._Retiros;
        this._tablainfo.rows[4].cells[1].innerHTML = this._contadorR;
        this._tablainfo.rows[5].cells[1].innerHTML = this._movimientos;
        this._tablainfo.rows[6].cells[1].innerHTML = this._saldo;
        cellsaldo.innerHTML = this._saldo;
    }
}  