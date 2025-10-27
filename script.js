let text=prompt(`Поставь отценку (от 2 до 5)`)

switch (text) {
    case (`2`):
        alert(`Плохо!`)
        break;
        
        case (`3`):
        alert(`Нормально!`)
        break;

        case (`4`):
        alert(`Хорошо!`)
        break;

        case (`5`):
        alert(`Отлично!`)
        break;

    default:
        alert(`Такой отценки нету(`)
        break;
}