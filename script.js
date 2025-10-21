// 1. Stwórz 4 zmienne, opisujące jakiegoś
// człowieka. Byleby nie kolegę z klasy :)
// 2. Wypisz je do konsoli.
// 3. Zapisz warunek, sprawdzający czy ta osoba
// jest pełnoletnia czy nie i wyświetl odpowiedni 
// komunikat w konsoli.
// 4. Skorzystaj z promt() do poproszenia
// usera o dwie liczby i zsumuj je za pomocą 
// samodzielnie stworzonej funkcji

const Name = prompt("Napisz swoje imię:");
const LastName = prompt("Napisz swoje nazwisko:");
let Age = prompt("Napisz, ile masz lat:");

console.log(Name);
console.log(LastName);
console.log(Age);

if (Age >= 18) {
    console.log("Jesteś pełno letnim");
    let Job = prompt("Napisz swoją miejsce pracy:");
    console.log(Job);
} else {
    console.log("Jesteś jeszcze nie pełnoletnim");
}

let Calculate = prompt("Czy chcesz skorzystać z kalkulatora? Tak lub Nie");
if (Calculate == "Tak") {
    MiniCalculate()
}

if (Calculate == "Nie") {
    console.log("Okej, spoko");
}

function MiniCalculate() {
    let a = prompt("Napisz pierwszą liczbę:");
    let b = prompt("Napisz drugą liczbę:");
    let c = prompt("Napisz operacje +, -, *, /");

    if (c == "+") {
        c = a + b
        console.log(c);
    } else if (c == "-") {
        c = a - b
        console.log(c)
    } else if (c == "*") {
        c = a * b
        console.log(c)
    } else if (c == "/") {
        c = a / b
        console.log(c)
    } else {
        console.log("Nie rozpoznano operacji")
    }
}