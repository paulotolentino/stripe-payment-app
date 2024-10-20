function convertToSubcurrency(amount: number, factot: number = 100) {
  return Math.round(amount * factot);
}

export default convertToSubcurrency;
