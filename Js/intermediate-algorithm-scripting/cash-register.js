function checkCashRegister(price, cash, cid) {
    let chance = (cash - price)*100;
//     let currencyUnit = [
//   ["PENNY",  0.01],
//   ["NICKEL", 0.05],
//   ["DIME", 0.1],
//   ["QUARTER", 0.25],
//   ["ONE", 1],
//   ["FIVE", 5],
//   ["TEN", 10],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ].reverse();
    let currencyUnit = [
  ["PENNY",  1],
  ["NICKEL", 5],
  ["DIME", 10],
  ["QUARTER", 25],
  ["ONE", 100],
  ["FIVE", 500],
  ["TEN", 1000],
  ["TWENTY", 6000],
  ["ONE HUNDRED", 10000]
].reverse();

    console.log(cid.some(ele => (ele[1]*100 === chance)))
    if( cid.some(ele => (ele[1]*100 === chance)) ) {
        return  {
            status: "CLOSED",
            change: cid
        }
    }
    // Constructor két quả
    function result (stus,valueChance) {
        this.status = stus;
        this.change = valueChance;
    }
    let moneyChance = cid.slice(0).reverse().map(section => {
        let curUnit = currencyUnit.find(unit => unit[0] === section[0])[1]; //lấy giá trị của tờ tiền
        let curCase = section[1]*100; // lượng $ tương ứng với tờ $ đang xét 
        // let curCaseNumber = (curCase/curUnit).toFixed(0) ; // lượng tờ tiền tương ứng với tờ $ đang xét 
        if(curUnit < chance) {

            if(curCase > chance ) {  // logic sai lầm là cứ nhiều tiền là hết nợ :V
                let reduce = curCase // 4.25
                while (chance >= curUnit) { 
                    chance -= curUnit;
                    chance = chance
                    curCase = curCase - curUnit
                    curCase = curCase
                }
                reduce -= curCase
                return [section[0],reduce/100]
            }

            if(curCase <= chance ) {
                let reduce = curCase 
                chance -= curCase
                curCase = 0
                return [section[0],reduce/100]
            }
        } 
        return null
    })
    .filter((element) => element !== null);
    
    
    // trả mảng rỗng khi chance ko trả về "0"
    if (chance !==0) {
      moneyChance = []
    }
    let status = chance !== 0? "INSUFFICIENT_FUNDS" : "OPEN"
    let caseResult = new result(status,moneyChance)
    return caseResult
}
let No3 = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
console.log (No3)