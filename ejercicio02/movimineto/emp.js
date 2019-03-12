export default class Emp
{
    constructor(name, cantidad, transacion, select)
    {
        this._name = name.toUpperCase();
        this._cantidad = cantidad;
        this._transacion = transacion;
        this._select = select.value;
    }

    
    getTransación()
    {
        let f = new Date();
        let F = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
        this._anotado = F;
        this._transacion = document.querySelector("#transacion").value;
        return this._transacion;
    }
    get name()
    {
        return this._name;
    }
    get cantidad()
    {
        return this._cantidad;
    }
    get transacion()
    {
        return this._transacion;
    }
    get select()
    {
        return this._select;
    }
    get anotado()
    {
        return this._anotado;
    }
}