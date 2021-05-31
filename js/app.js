'use strict';

function randomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let hourArr =['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM']
let table = document.createElement('table')
let stores = document.getElementById('cookiesSale');
stores.appendChild(table)
let arrStore = [];

function timeList(){
 let row1 = document.createElement('tr')
    let th = document.createElement('th')
    th.textContent = ' '
    row1.appendChild(th)
    for(let y=0 ; y < hourArr.length ; y++ ){
        let th = document.createElement('th')
        th.textContent = hourArr[y]
        row1.appendChild(th)
        
    }  
    table.appendChild(row1)

    let th2 = document.createElement('th')
    th2.textContent = 'Daliy ruslt '
    row1.appendChild(th2)
}


function Branch(locationName,minCust,maxCust,avgCookies){
    this.locationName = locationName,
    this.minCust = minCust,
    this.maxCust = maxCust,
    this.avgCookies= avgCookies,
    this.custHour =  0,
    this.totalRep = 0,
    this.multy=[];
    this.sumval = 0
    arrStore.push(this)
    
}

Branch.prototype.custnumber = function(){
    for ( let i=0 ; i < hourArr.length ; i++){
    this.custHour = randomCustomer(this.minCust,this.maxCust)
    this.multy[i] = Math.floor(this.custHour * this.avgCookies)
    this.totalRep = this.totalRep + this.multy[i];
    


}
console.log(this.totalRep)
}
Branch.prototype.render = function(){
   
    let row2 = document.createElement('tr')
    let td = document.createElement('td')
        td.textContent = this.locationName
        row2.appendChild(td)
    for(let y=0 ; y < this.multy.length ; y++ ){
        let td = document.createElement('td')
        td.textContent = this.multy[y]
        row2.appendChild(td)
    }
    table.appendChild(row2)

    let td11 = document.createElement('td')
    row2.appendChild(td11)
    td11.textContent= this.totalRep

    

    

}

Branch.prototype.resultfunc = function(){
    let row3 = document.createElement('tr')
    table.appendChild(row3)
    let td = document.createElement('td')
        td.textContent = 'Totals'
        row3.appendChild(td)
    for(let y=0 ; y < hourArr.length ; y++ ){
        let td = document.createElement('td')
        row3.appendChild(td)
        let valSum = 0;
        for( let q=0 ; q < arrStore.length ; q++){
        valSum = valSum + arrStore[q].multy[y]
    }
    td.textContent=valSum
    }
    
}


timeList()
let Seattle = new Branch('Seattle',23,65,6.3)
let Tokyo = new Branch('Tokyo',3,24,1.2)
let Dubai = new Branch('Dubai',11,38,3.7)
let Paris = new Branch('Paris',20,38,2.3)
let Lima = new Branch('Lima',2,16,4.6)
Seattle.custnumber()
Seattle.render()
Tokyo.custnumber()
Tokyo.render()
Dubai.custnumber()
Dubai.render()
Paris.custnumber()
Paris.render()
Lima.custnumber()
Lima.render()
Lima.resultfunc()


// // ------------------------------------

// const tokyo  = {
//     locationName:'tokyo',
//     minCust: '23',
//     maxCust: '65',
//     avgCookies: '6.3',
//     custHour: 0,
//     totalRep:0,
//     cookiesHour: [],

//     generatecust: function(){
//         for ( let i=0 ; i < hourArr.length ; i++){
//             this.custHour = randomCustomer(23,65);
//             let multy = Math.floor(this.custHour * this.avgCookies)
//             this.cookiesHour.push(multy)
//             this.totalRep = this.totalRep + this.cookiesHour[i]
//     }
//     },
//     render:function(){
//         let locationName = document.createElement('h2')
//         Stores.appendChild(locationName);
//         locationName.textContent = this.locationName
        
//         let h2 = document.createElement('ul')
//         Stores.appendChild(h2);

//         for ( let x = 0 ; x < hourArr.length ; x++){
//             this.forList= document.createElement('li'),
//             h2.appendChild(this.forList),
//             this.forList.textContent = hourArr[x] + ' : ' + this.cookiesHour[x] + '  cookies'
        
//         }

//         let Total = document.createElement('li');
//         h2.appendChild(Total) 
//         Total.textContent = `Total : ${this.totalRep} cookies`; 
//     },
    
// }
// tokyo .generatecust(),
// tokyo .render()

// // // --------------------------------------

// const Dubai  = {
//     locationName:'Dubai',
//     minCust: '23',
//     maxCust: '65',
//     avgCookies: '6.3',
//     custHour: 0,
//     totalRep:0,
//     cookiesHour: [],

//     generatecust: function(){
//         for ( let i=0 ; i < hourArr.length ; i++){
//             this.custHour = randomCustomer(23,65);
//             let multy = Math.floor(this.custHour * this.avgCookies)
//             this.cookiesHour.push(multy)
//             this.totalRep = this.totalRep + this.cookiesHour[i]
//     }
//     },
//     render:function(){
//         let locationName = document.createElement('h2')
//         Stores.appendChild(locationName);
//         locationName.textContent = this.locationName
        
//         let h2 = document.createElement('ul')
//         Stores.appendChild(h2);

//         for ( let x = 0 ; x < hourArr.length ; x++){
//             this.forList= document.createElement('li'),
//             h2.appendChild(this.forList),
//             this.forList.textContent = hourArr[x] + ' : ' + this.cookiesHour[x] + '  cookies'
        
//         }

//         let Total = document.createElement('li');
//         h2.appendChild(Total) 
//         Total.textContent = `Total : ${this.totalRep} cookies`; 
//     },
    
// }
// Dubai .generatecust(),
// Dubai .render()

// // // --------------------------------------

// const Paris  = {
//     locationName:'Paris',
//     minCust: '23',
//     maxCust: '65',
//     avgCookies: '6.3',
//     custHour: 0,
//     totalRep:0,
//     cookiesHour: [],

//     generatecust: function(){
//         for ( let i=0 ; i < hourArr.length ; i++){
//             this.custHour = randomCustomer(23,65);
//             let multy = Math.floor(this.custHour * this.avgCookies)
//             this.cookiesHour.push(multy)
//             this.totalRep = this.totalRep + this.cookiesHour[i]
//     }
//     },
//     render:function(){
//         let locationName = document.createElement('h2')
//         Stores.appendChild(locationName);
//         locationName.textContent = this.locationName
        
//         let h2 = document.createElement('ul')
//         Stores.appendChild(h2);

//         for ( let x = 0 ; x < hourArr.length ; x++){
//             this.forList= document.createElement('li'),
//             h2.appendChild(this.forList),
//             this.forList.textContent = hourArr[x] + ' : ' + this.cookiesHour[x] + '  cookies'
        
//         }

//         let Total = document.createElement('li');
//         h2.appendChild(Total) 
//         Total.textContent = `Total : ${this.totalRep} cookies`; 
//     },
    
// }
// Paris .generatecust(),
// Paris .render()

// // // --------------------------------------

// const Lima  = {
//     locationName:'Lima',
//     minCust: '23',
//     maxCust: '65',
//     avgCookies: '6.3',
//     custHour: 0,
//     totalRep:0,
//     cookiesHour: [],

//     generatecust: function(){
//         for ( let i=0 ; i < hourArr.length ; i++){
//             this.custHour = randomCustomer(23,65);
//             let multy = Math.floor(this.custHour * this.avgCookies)
//             this.cookiesHour.push(multy)
//             this.totalRep = this.totalRep + this.cookiesHour[i]
//     }
//     },
//     render:function(){
//         let locationName = document.createElement('h2')
//         Stores.appendChild(locationName);
//         locationName.textContent = this.locationName
        
//         let h2 = document.createElement('ul')
//         Stores.appendChild(h2);

//         for ( let x = 0 ; x < hourArr.length ; x++){
//             this.forList= document.createElement('li'),
//             h2.appendChild(this.forList),
//             this.forList.textContent = hourArr[x] + ' : ' + this.cookiesHour[x] + '  cookies'
        
//         }

//         let Total = document.createElement('li');
//         h2.appendChild(Total) 
//         Total.textContent = `Total : ${this.totalRep} cookies`; 
//     },
    
// }