function calcCircle(r) {
    let circle = Math.PI * 2 * r;
    console.log(circle);
}

let radius = process.argv.slice(2);
calcCircle(radius)