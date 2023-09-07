function convertToRoman(num) {
  //  let number = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  //  let roman = [I,IV,V,IX,X,XL,L,XC,C,CD,D,CM,M]
  let number = [[1,5],[10,50],[100,500],[1000]];
  let roman = [['I','V'],['X','L'],['C','D'],['M']];
  let result = []
  let arr = num.toString().split("").map(ele => Number(ele)); // chuyển sang string
  for (let i = 0; i < arr.length; i++) {
  let indexRoman = roman[arr.length - i - 1];
  let fwIndexRoman = roman[arr.length - i];
      console.log(0 < arr[i] && arr[i] <= 3)
      if (0 < arr[i] && arr[i] <= 3) {
        result.push(indexRoman[0].repeat(arr[i]))
      }

      else if (arr[i] === 4) {
        result.push(`${indexRoman[0]}${indexRoman[1]}`)
      }
      
      else if (5 <= arr[i] && arr[i] < 9) {
        result.push(`${indexRoman[1]}${indexRoman[0].repeat(arr[i] - 5)}`)
      } 

      else if (arr[i] === 9) {
        result.push(`${indexRoman[0]}${fwIndexRoman[0]}`)
      }
  }

    console.log(result.join(""))
   return result.join("")
}

convertToRoman(5);
// 2014 = 2 x 1000 + 0 x 100 + 1 x 10 + 4 x 1
//if 2  length - 0 - 1 = 3 = 1000 x 2
//if 0  length - 1 - 1 = 2 = 100 x 0
//if 1  length - 2 - 1 = 1 = 10 x 1
//if 4  length - 3 - 1 = 0 = 1 x 4
1