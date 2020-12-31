{
    const planeSeats = new Array(4);
    planeSeats[0] = [0, 0, 0, 0, 0, 0, 0, 0];
    planeSeats[1] = [1, 0, 0, 0, 0, 0, 0, 0];
    planeSeats[2] = [2, 0, 0, 0, 0, 0, 0, 0];
    planeSeats[3] = [3, 0, 0, 0, 0, 0, 0, 0];
    let test = planeSeats.slice(1, 2);
    test[0][0] = -1;
    console.log(test[0]);
    console.log(planeSeats[1]);
}
//# sourceMappingURL=Test.js.map