const Karsilastir = async (arr, dataBase) => {
  const x = dataBase[0];
  const y = dataBase[1];
  const z = dataBase[2];
  let xSayac = 0;
  let ySayac = 0;
  let zSayac = 0;

  
  await arr.map(item => {
    let a = dataBase[3][x].includes(item);
    if (a) {
      xSayac++;
    }
    let b = dataBase[3][y].includes(item);
    if (b) {
      ySayac++;
    }
    let c = dataBase[3][z].includes(item);
    if (c) {
      zSayac++;
    }
  });

  if (xSayac > ySayac && xSayac > zSayac) {
    return x;
  } else if (ySayac > xSayac && ySayac > zSayac) {
    return y;
  } else {
    return z;
  }
};
export default Karsilastir;
