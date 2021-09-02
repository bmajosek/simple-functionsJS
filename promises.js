const bilety= [
    {
        city:"jedlnia",
        price: 20
    }
    
];

const wiadomosc = () =>{
    bilety.forEach((bilet) =>{
        console.log(`jade do ${bilet.city} i bedzie to kosztowalo ${bilet.price}`);
    })
}
const zakup = (bilet) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const error= false;
            if(error)
            {
                reject("Sorry blad jakis jest");
            }
            else{
            bilety.push(bilet);
            resolve()
            }
        }, 2000);
    })
}
const start=async() =>{
    await zakup({ city:"wierzbica",price:1000})
    wiadomosc();
}
start();
