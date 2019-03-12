import banco from "./banco.js";
import Emp from "./emp.js";
class Main
{
    constructor()
    {
        this._Banco = new banco(document.querySelector("#Banco"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let name = document.querySelector("#name").value;

            let cantidad = document.querySelector("#cantidad").value;

            let transacion = document.querySelector("#transacion").value;
            
            let emp = new Emp(name, cantidad, transacion, select);
            this._Banco.addEmp(emp);
        });
    }
}
let m = new Main();
