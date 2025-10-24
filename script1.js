// Funkcja dla tworzenia Imienia i Roli dla mojego bohatera
function createCharacter() {
    const Name = prompt("Napisz imię dla twojego nowego bohatera:");
    const Role = prompt("Napisz rolę dla twojego nowego bohatera:");
    return {
        name: Name,
        role: Role
    }
}
// Funkcja dla dodawania różnych przedmiotów do inwentatorza mojego bohatera
function addItem() {
    const Item = prompt("Wpisz różne przedmioty które chciał, żeby twój bohater ich miał:")
    return {
        equipment: {
            items: [Item]
        }
    }
}
// Funkcja dla dodawania skillów do mojego bohatera
function learnSkills() {
    const Skills = prompt("Wpisz jeden lub więcej umiejętności dla twojego bohatera:");
    return {
        skills: [Skills]
    }
}
// Funkcja dla ustawienia levelu mojego bohatera
function levelUp() {
    const Level = prompt("Wpisz level dla twojego bohatera:");
    return {
        level: Level
    }
}
// Zmienna która łączy i przechowuje w sobie wszystkie parametry mojego bohatera
const MyCharacter = {
    ...createCharacter(),
    ...addItem(),
    ...learnSkills(),
    ...levelUp()
};
// Funkcja która będzie wyświetlać do konsoli wszystkie parametry mojego bohatera 
function characterDescription(MyCharacter) {

console.log("=== KARTA POSTACI ===");
console.log(`Imię: ${MyCharacter.name}`);
console.log(`Rola: ${MyCharacter.role}`);
console.log(`Ekwipunek: ${MyCharacter.equipment.items}`);
console.log(`Umiejętności: ${MyCharacter.skills}`);
console.log(`Level: ${MyCharacter.level}`);

}
// Wywołanie tej samej funkcji 
characterDescription(MyCharacter);
