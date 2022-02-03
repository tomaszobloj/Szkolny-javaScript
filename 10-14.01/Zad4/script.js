liczba1 = 2;
liczba2 = 2;

if(liczba1 > liczba2){
    wynik = "Liczba 1 jest większa od liczba 2";
    document.querySelector("p").innerHTML=wynik;
}else if(liczba1 < liczba2){
    wynik = "Liczba 2 jest większa od liczba 1";
    document.querySelector("p").innerHTML=wynik;
}else{
    wynik = "Warunek nie spełniony, liczby są równe";
    document.querySelector("p").innerHTML=wynik;
}