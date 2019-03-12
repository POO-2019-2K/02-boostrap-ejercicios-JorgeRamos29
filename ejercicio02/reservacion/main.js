import Hotel from "./hotel.js";
import Emp from "./emp.js";
class Main
{   
    constructor()
    {
        this._hotel = new Hotel(document.querySelector("#hotel"), document.querySelector("#info"));
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let reservacion = document.querySelector("#reservacion").value;
            let reservacionF = document.querySelector("#reservacionF").value;
            let habitacion = document.getElementById("habitacion");
            let name = document.querySelector("#name").value;
            let email = document.querySelector("#email").value;
            let emp = new Emp(name, email, reservacion, reservacionF, habitacion);
            this._hotel.addEmp(emp);
        });
    }
}
let m = new Main();