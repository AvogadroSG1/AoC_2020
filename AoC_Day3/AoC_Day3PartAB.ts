{
  interface ISlopeTry {
    colIncrement: number;
    rowIncrement: number;
  }

  let transverseTries = [
    { colIncrement: 1, rowIncrement: 1 },
    { colIncrement: 3, rowIncrement: 1 },
    { colIncrement: 5, rowIncrement: 1 },
    { colIncrement: 7, rowIncrement: 1 },
    { colIncrement: 1, rowIncrement: 2 },
  ] as ISlopeTry[];

  let mapInput: string = `....#..#.................#..#..
#..#.#.#..#.###.#..#...#..#....
.#....#......#.#.#..##...#...#.
.............#.#..#........#.#.
............##.#..#...##.###...
.....#..#......#......##.......
........##........#...........#
..................#..#.........
......#..#...#..#......###..#..
.#....#...........#.....#.##...
..#..#.#........###..#....#...#
..#..##..#..#....#..#......#...
......#....................#...
.........#..#..................
..#.#.....#......#.#....#...#..
..#..........##.......##.##....
#.......#.##.....#...#....#....
####..............###.#....#...
....#........#.#..###..#...#..#
#.#......#...#.##....#.....#...
.......#......#.....#........#.
.##.........#...#.........#....
............#....#.#........#..
#..##..#....#...#.#....#....#..
.....#....##..#................
.#...........#....#..#.....#...
......#.#...#..###.............
#...#...........#..###.#..#..#.
...................#..#....#..#
....#...#...#.#.....#....#.##..
.......#.......#.#.........#...
#..#.......#...#..#.#......#...
..##...........#....#..#.......
.#...............#...##........
.....#..........#............#.
..#.......#.#.#...........#..#.
........#..#.#.#........#.#.##.
.###..............#.#..........
.#....###.....#......#....#....
............#.#......#..#....#.
.#.#.............#........##...
.....#..###....##.....#....#..#
.##....#...#.#.........#......#
....##.......#...............##
..........##.##.......#........
......#....##.........##.#.#.#.
..............#....#..#......#.
......##.........#.........#...
.#...##...##....##..#..#.....#.
.#......#.###.#....#...#......#
.##.......................#..#.
....#......#.##..........#.###.
.#.....##..........#.#.........
....#.#.........#...#..........
.#..##.#....##.......#.......#.
.........#.......#............#
###..........#.....##.#....#...
.......###.#....#........#...##
..#..#....#.......#.#..........
.#..#..........#......#...#....
.....###.#..#.....#...#..#.....
........#.#.#..........#.#..#..
........#...##.................
...#.............#.#..#......##
......#......##......#...#.#..#
.#..#...##..........#...##.....
..#.#....####..#...#....##....#
.#..##.........#..##......#....
#....#.#.........#.............
....###..............#....#....
....#..#..#...###..#.#..#.#....
....#.....#...........###..#...
....#.#.....#...#.....#.......#
..#.......#..................#.
#...................##.........
....#.#.#.#.#.....#.....#......
...............##..#..##.#...##
..#.....#.....##.........#..#..
...#...#.....#..##..##....#..##
..#.................#....#...#.
#....##...............##..#....
..#.....#.....##.........##...#
..#.###..............#...#.....
.......................#.......
#...#..#.....##...#...#........
..........#......#.###....#...#
..#.....#.##.#..#.#.......#....
#.##...#............#..........
#........#.#.#..#...#..#.....##
#............#.#...............
.#..#.......#.#.....#.#......##
.#.#....#........#..##.........
..#....#......#.#...##...#.....
##.....#......................#
...#.......#..##.....#........#
......##..#...............##...
.....#...#......##....#.#......
.#...#....#.#.#........#...#.#.
.......#...#...##...#..........
.##..#..##........##....###.#..
..##........#........##........
............#....#......#......
.......#...........#.......#...
#.#......##.#...#....#.#.....#.
..#.#.#......##........#....#..
#.#.####.#..#..........#.......
......................#.#......
...#.......#.....#......#..#.#.
...#....#....##..........#..##.
......#......#....#.........#..
.........#....#...#.#.........#
.....#...##.#.#.#......#.....#.
........#...#......#.#....#....
.....#.........#.............#.
.#...........#.#....##.......#.
.#..#......#....#....#....#....
#.......#.#.#.#..#.......#.....
..#...#...#......#.............
.....#.......#..#.........##..#
#..##...........#.#.........#..
#..#..........#....#......#...#
#...#............#....##..#.##.
....#.#..#....#.........##..##.
.........#..........#.......##.
#...#........................#.
....#....#..#...........##...#.
.....###.###.#....#.....#.....#
.#..###..#...##..........#.....
#..#.....#...#........#........
.#..##..#......#.....#......##.
#.....##........#.#..#....#.#..
.#....#...#..#...............#.
..........#.#........#.....#...
..#.#.....#....#........#.###..
...#..#...#.##.....#..........#
..#......##....................
.....#...#....#..#....#.......#
......#............#....#...#..
.#..#....#.....#........##.....
...#..#.......#...............#
##.#..#...............#.#..##..
..#.........#.####.####........
.........#...#.#........#..###.
..###.....#.........##........#
#..##.....##.#..........#....##
.#..#....###..#.....##..#......
#...#..#........#.............#
#.#....#........#.........#.###
.....#....#.###.......#........
...........#............#..#...
..........#.#..##......###....#
..##....#...........#....#....#
..#...##.#.......#.##.......#..
.......#......#..........#....#
.........#..#..............####
#.#...#...#......#...#..#...#.#
.#.#...#.....#.......#.#..##.#.
......##..##...#...............
....#....#...##.......#.#......
.............................#.
..##...#.......#......#.......#
.#.##.##....#......##.......#..
.......##..#....#.##.#.#.......
....#.............#......#..#..
...#.........#....#..#.....#.#.
......#......#......#.........#
........#..#.#.....#.....#...#.
.#.......#.........#...#.......
#.#.##.....#...#...............
..#.......##.....#............#
.................##.#..#.....##
........#.###....#.......##.#..
....#.#..#..#.......#.#....#..#
.#..#..#..#...##....#..#.....#.
...#..#...#..........#........#
...........##....#...##.#...###
.##..#.......##.....##....#....
...#.#..#..#..##..#.....##.....
.#.....#..........#...#........
.....#..#.#..#.................
..#.......#..#.....##.......#..
............##.##.....#...#....
#......#......................#
...#..........#...#...#..#.....
......##..............##.##....
................##......#.###..
.###...#..........#...........#
#....#...#.........##......#...
.............#...............#.
.###.....#......#...#.......#..
......##..#.#.#.....#........#.
..#.#..........#.#......##.....
.#.#...#.#.....#.#..#.....#....
.......#....#.#....##..........
#.........#........####.#......
...#..#.....#..............#.#.
...#..........................#
..##....#..#..........#....#...
..##.##.#.#.#......#..#........
...#..#.#.#..#........#.......#
.....#.....#..#...#........##..
..#..#...........#...##..##..#.
#.....#.....#..#..##........#..
...#..............#......#..#..
...#.#...........###...#.#.....
..........................#.#..
....#........#..#..........#.#.
.#..#..........#.#..........#..
....#.........#......#.#....#..
..#........#.................#.
...#......#............#.......
...#.#...#..##....#........#...
......##.#....#.#......#.......
........#..........#........#..
###..#.....#...#......#...###..
..##...#..###............#...#.
#.......#..#..#............##..
#........####......#...........
#..#..#...........#.......####.
......#..##................#...
.....#..##......#.#...#..#.....
......#.....##.....#.###.......
.#.....#.........#.......#.#..#
.##...........###...#....#...#.
.#....#..#....#.##...#.........
.................##............
......#......#.............#...
.........##.#........#....#...#
..##....#.......#....##.#......
.......#.#.#.....##..#.#.......
......#.#.#.#......#...#.......
....##...#.....#..#......#.....
..............#......#.##......
#.##..###........#.##........##
#..#.........#.#......#.#......
.#..###.......#................
..............#...#..##.#.#....
.....#..#........#...##.#...#..
.#...##.....#........#..###.#..
....#.....#...#........#.......
....#.##.....#....#............
#.#..#....#....#............#..
....#....#...#.#...#...######..
.##.........#..#.....#.....#...
..##...............#...........
........##...#........#..#.....
...#................###.##..##.
.#..#..#..#...#.............#..
#.....#..##.#....#.#......#..#.
...#...#...#.....#...#...#.....
..##.###..#..#...##...........#
.#.......##........#.#..#..#...
..#.......#.###................
..#...#........##...#..#......#
...#...#............#.#......#.
..#...#.....#.#.#.#........#...
.#........#......##....##...#..
...#..##....#.........#....#.#.
....#........##...............#
.###.....#...#..#.#.....#.....#
..#...#..................#...##
#..#....###....................
...........#...#...........#...
........#.....#................
#........#...........#........#
........#..#....#...#....#..#..
#.#....#......#.......##.......
.#.....##..#...#......#.#.#....
..#..##.#.....#...#.#......#.#.
.##....#...#....#......##......
.#..#..#...##.##..#.#..#.......
.....#.#...........#.#........#
.#...#....#..................#.
...........#...#.........#.....
.#..###........##......#..#...#
.............###..##.....#.#..#
.#..#..........#......#........
..#........#.#...#.......##.#..
....#...........##......#...#..
...........#....#.....#...#.#..
...#...........#.....#.#..#..#.
......#.......#................
##.......#.....#............#.#
.##.....#.#.#..................
..........#.....##..#.#.#......
.###.#.....##...#..#.#........#
#....#........##..#..#.........
.............#.........##..#...
......##.#...#.#.#....##.......
.#.......###.#.###..##........#
..##.....#..#.............#..#.
.#...#......#.#.............#..
..##.#...#.........##....#...#.
...........#......#.#..........
.....#..#...##.....#....#..#...
#...................##...#.....
..#.................#.....#....
..............#..#.#...###.....
.......#........#...#.....#....
.............#.......#...##..#.
.#...#..#...#..#.....#......#.#
....#..#..#...#...........#....
.....#..#......##.##....#..#...
...#......#..#.#...#.....#.....
.......##..#.#.......#..#....##
#.#..#....##.##.#.#..........#.
..........#..........#....##.#.
....#.................#...#..#.
...#.....#..#...#.#...#..#.....
....#.#..###....#.............#
#....#..#.#..........#..#..#...
...#..#......#...#...#...#...#.
##....#.......#..........#.....
#......#.........#...#.........
##...##.#....#....#..#..#.#....
....#..#.....#.##.#.......#.#..
..##....##....#...#..####...#.#
..##..........#.............#..
..#......#..............#......
...#......#..#.#...#.......#...
.#............#....#...##.##..#
..##..........#...........#..#.
..#..##..#....#..#.#..#..#..#..`;

  let booleanMap: boolean[][] = [] as boolean[][];

  function parseMapRow(row: string): boolean[] {
    return row.split("").map((v, i, arr) => {
      return v === ".";
    });
  }

  function parseMap(data: string) {
    let mapRows = data.split("\n");
    mapRows.forEach((row, i, arr) => {
      let boolRow = parseMapRow(row);
      booleanMap.push(boolRow);
    });
  }

  parseMap(mapInput);

  function transverse(colIncrement: number, rowIncrement: number): number {
    let treeCount = 0;
    let column = 0;
    for (let row = 0; row < booleanMap.length; row += rowIncrement) {
      if (!booleanMap[row][column]) {
        treeCount++;
      }

      column += colIncrement;
      //readjust column since we've spilled over to same map
      if (column >= booleanMap[row].length) {
        column -= booleanMap[row].length;
      }
    }

    return treeCount;
  }

  let result = 1;

  transverseTries.forEach((v, i, arr) => {
    result *= transverse(v.colIncrement, v.rowIncrement);
  });

  console.log(result);
}
