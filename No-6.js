let pp= 30000;
const tambah = 0.03;
let i=0;

do{
    let hitung = pp * tambah;
    pp = pp + hitung;
    i++;
    console.log(i)
}while(pp<=100000)

//sebanyak 41 *