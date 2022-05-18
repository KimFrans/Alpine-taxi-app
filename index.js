console.log("hello");
console.log(Alpine);
document.addEventListener('alpine:init', () => {
    console.log(Alpine);
    Alpine.data('taxiData', () => ({
        taxiData: [
            { destination: 'Makhaza', queue: 12, taxiCount: 0, fare: 12.00, taxiFareTotal: 0, taxiAvail: 3 },
            { destination: 'Belhar', queue: 34, taxiCount: 0, fare: 15.00, taxiFareTotal: 0, taxiAvail: 3 },
            { destination: 'Bellville', queue: 23, taxiCount: 0, fare: 10.00, taxiFareTotal: 0, taxiAvail: 3 }]
    }))




})
// document.addEventListener('alpine:init', () => {
//     Alpine.data('taxiData', () => ({
//         open: false,

//         toggle() {
//             this.open = ! this.open
//         }
//     }))
// })