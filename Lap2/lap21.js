const gameEvents = new Map([
    [17,'Vào'],
    [36,'Thay người'],
    [47,'Vào'],
    [61,'Thẻ vàng'],
    [69,'Thẻ đỏ'],
    [70,'Thay người'],
    [72,'Thay người'],
    [76,'Vào'],
    [80,'Vào'],
    [92,'Thẻ vàng'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);
