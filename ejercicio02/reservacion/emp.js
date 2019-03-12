export default class Emp
{
    constructor(name , email , reservacion , reservacionF, habitacion)
    {
        this._name = name.toUpperCase();
        this._email = email;
        this._reservacion = reservacion;
        this._reservacionF = reservacionF;
        this._habitacion = habitacion.value;
    }

    getReservacion()
    {
        let reservacion = document.querySelector("#reservacion").value;
        reservacion = reservacion.split('-')
        let reservacionF = document.querySelector("#reservacionF").value;
        reservacionF = reservacionF.split('-')
        this._reservacion = new Date(reservacion[0], reservacion[1], reservacion[2])
        this._reservacionF = new Date(reservacionF[0], reservacionF[1], reservacionF[2])
        let oneDay = 86400000;
        let differenceMs = Math.abs(new Date(this._reservacionF) - new Date(this._reservacion));
        return Math.round(differenceMs / oneDay);
    }
    get name()
    {
        return this._name;
    }
    get email()
    {
        return this._email;
    }
    get reservacion()
    {
        return this._reservacion;
    }
    get reservacionF()
    {
        return this._reservacionF;
    }
    get habitacion()
    {
        return this._habitacion;
    }
}