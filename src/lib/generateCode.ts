function generateCode(number: number): string {
    const hexChars = "0123456789-ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz.";
    let hex = "";
  
    while (number > 0) {
      const randomValue = Math.floor(Math.random() * hexChars.length);
      hex += hexChars[randomValue];
      number--;
    }
  
    return hex;
  }
  
  export default generateCode;