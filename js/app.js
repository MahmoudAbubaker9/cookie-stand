'use strict';

function randomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let hourArr =['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM']

let Stores = document.getElementById('cookiesSale');

const Seattle = {
    
    minCust: '23',
    maxCust: '65',
    avgCookies: '6.3',
    custHour: 0,
    cookiesHour: [],

    generatecust: function(){
        for ( let i=0 ; i < hourArr.length ; i++){
            this.custHour = randomCustomer(23,65);
            let multy = Math.floor(this.custHour * this.avgCookies)
            this.cookiesHour.push(multy)
    }
    },
    render:function(){
        let h2 = document.getElementById('Title')
        cookiesSale.appendChild(h2);
        let Elemnt12= document.getElementById('mylist');
        // console.log(this.cookiesHour);
        cookiesSale.appendChild(Elemnt12);
        let Elemnt1 = null;
        for ( let x = 0 ; x < hourArr.length ; x++){
            Elemnt1= document.createElement('li'),
            Elemnt12.appendChild(Elemnt1),
            Elemnt1.textContent = hourArr[x] + ' : ' + this.cookiesHour[x] + '  cookies'
        }

    }
}
Seattle.generatecust(),
Seattle.render()
// --------------------------------------
const Tokyo = {
    
    minCust: '3',
    maxCust: '12',
    avgCookies: '1.2',
    custHour: 0,
    cookiesHour: [],

    generatecust: function(){
        for ( let i=0 ; i < hourArr.length ; i++){
            this.custHour = randomCustomer(3,12);
            let multy = Math.floor(this.custHour * this.avgCookies)
            this.cookiesHour.push(multy)
    }
    },
    render:function(){
        let h2 = document.getElementById('Title2')
        cookiesSale.appendChild(h2);
        let Elemnt12= document.getElementById('mylist2');
        // console.log(this.cookiesHour);
        cookiesSale.appendChild(Elemnt12);
        let Elemnt1 = null;
        for ( let x = 0 ; x < hourArr.length ; x++){
            Elemnt1= document.createElement('li'),
            Elemnt12.appendChild(Elemnt1),
            Elemnt1.textContent = hourArr[x] + ' : ' + this.cookiesHour[x] + '  cookies'
        }

    }
}
Tokyo.generatecust(),
Tokyo.render()

// --------------------------------------

const Dubai = {
    
    minCust: '3',
    maxCust: '12',
    avgCookies: '1.2',
    custHour: 0,
    cookiesHour: [],

    generatecust: function(){
        for ( let i=0 ; i < hourArr.length ; i++){
            this.custHour = randomCustomer(3,12);
            let multy = Math.floor(this.custHour * this.avgCookies)
            this.cookiesHour.push(multy)
    }
    },
    render:function(){
        let h2 = document.getElementById('Title3')
        cookiesSale.appendChild(h2);
        let Elemnt12= document.getElementById('mylist3');
        // console.log(this.cookiesHour);
        cookiesSale.appendChild(Elemnt12);
        let Elemnt1 = null;
        for ( let x = 0 ; x < hourArr.length ; x++){
            Elemnt1= document.createElement('li'),
            Elemnt12.appendChild(Elemnt1),
            Elemnt1.textContent = hourArr[x] + ' : ' + this.cookiesHour[x] + '  cookies'
        }

    }
}
Dubai.generatecust(),
Dubai.render()

// --------------------------------------

const Paris = {
    
    minCust: '3',
    maxCust: '12',
    avgCookies: '1.2',
    custHour: 0,
    cookiesHour: [],

    generatecust: function(){
        for ( let i=0 ; i < hourArr.length ; i++){
            this.custHour = randomCustomer(3,12);
            let multy = Math.floor(this.custHour * this.avgCookies)
            this.cookiesHour.push(multy)
    }
    },
    render:function(){
        let h2 = document.getElementById('Title4')
        cookiesSale.appendChild(h2);
        let Elemnt12= document.getElementById('mylist4');
        // console.log(this.cookiesHour);
        cookiesSale.appendChild(Elemnt12);
        let Elemnt1 = null;
        for ( let x = 0 ; x < hourArr.length ; x++){
            Elemnt1= document.createElement('li'),
            Elemnt12.appendChild(Elemnt1),
            Elemnt1.textContent = hourArr[x] + ' : ' + this.cookiesHour[x] + '  cookies'
        }

    }
}
Paris.generatecust(),
Paris.render()

// --------------------------------------

const Lima = {
    
    minCust: '3',
    maxCust: '12',
    avgCookies: '1.2',
    custHour: 0,
    cookiesHour: [],

    generatecust: function(){
        for ( let i=0 ; i < hourArr.length ; i++){
            this.custHour = randomCustomer(3,12);
            let multy = Math.floor(this.custHour * this.avgCookies)
            this.cookiesHour.push(multy)
    }
    },
    render:function(){
        let h2 = document.getElementById('Title5')
        cookiesSale.appendChild(h2);
        let Elemnt12= document.getElementById('mylist5');
        // console.log(this.cookiesHour);
        cookiesSale.appendChild(Elemnt12);
        let Elemnt1 = null;
        for ( let x = 0 ; x < hourArr.length ; x++){
            Elemnt1= document.createElement('li'),
            Elemnt12.appendChild(Elemnt1),
            Elemnt1.textContent = hourArr[x] + ' : ' + this.cookiesHour[x]  + '  cookies'
        }

    }
}
Lima.generatecust(),
Lima.render()

// --------------------------------------