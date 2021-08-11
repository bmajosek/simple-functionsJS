class kontakt{
    constructor(imie,nazwisko,miasto)
    {
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.miasto=miasto;
    }
    greeting(){
        return `pozdrawiam ${this.imie} z miasta ${this.miasto}`;
    }

}
class friend extends kontakt{
    constructor(imie,nazwisko,miasto,ulica){
        super(imie,nazwisko,miasto)
        {
        this.ulica=ulica;
        }
    }
    hejfriend(){
        return `witaj przyjacielu ${this.imie} z ulicy ${this.ulica}`;
    }
}
let kontakt1= new kontakt("bartek","maj","evesham");
let kontakt2= new kontakt("xyz","nazwisko","pionki");
let friend1= new friend("mery","jane","warszawa","wierzbicka");
console.log(friend1.hejfriend());
console.log(kontakt1)
console.log(kontakt2.greeting())
