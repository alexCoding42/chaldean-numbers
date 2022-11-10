/*
    1: ["A", "Q", "Y", "I", "J"]
    2: ["B", "R", "K"]
    3: ["G", "C", "L", "S"]
    4: ["D", "M", "T"]
    5: ["E", "H", "N", "X"]
    6: ["U", "V", "W"]
    7: ["O", "Z"]
    8: ["P", "F"]
*/

export const getArrayOfNumbersFromSplittedName = (splittedName: string[]) => {
  let numbers: number[] = [];

  splittedName.map(n => {
    switch (n) {
      case 'a':
      case 'q':
      case 'y':
      case 'i':
      case 'j':
      case '1':
        numbers.push(1);
        break;
      case 'b':
      case 'r':
      case 'k':
      case '2':
        numbers.push(2);
        break;
      case 'g':
      case 'c':
      case 'l':
      case 's':
      case '3':
        numbers.push(3);
        break;
      case 'd':
      case 'm':
      case 't':
      case '4':
        numbers.push(4);
        break;
      case 'e':
      case 'h':
      case 'n':
      case 'x':
      case '5':
        numbers.push(5);
        break;
      case 'u':
      case 'v':
      case 'h':
      case '6':
        numbers.push(6);
        break;
      case 'o':
      case 'z':
      case '7':
        numbers.push(7);
        break;
      case 'p':
      case 'f':
      case '8':
        numbers.push(8);
        break;
      case '0':
        numbers.push(0);
        break;
      default:
        return numbers;
    }
  });

  return numbers;
};

export const getTotal = (value: string | number) => {
  return value
    .toString()
    .split('')
    .map(Number)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
