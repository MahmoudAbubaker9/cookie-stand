'use strict';

function randomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let hourArr =['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM']

let Stores = document.getElementById('cookiesSale');

const Seattle = {
    locationName:'Seattle',
    minCust: '23',
    maxCust: '65',
    avgCookies: '6.3',
    custHour: 0,
    totalRep:0,
    cookiesHour: [],

    generatecust: function(){
        for ( let i=0 ; i < hourArr.length ; i++){
            this.custHour = randomCustomer(23,65);
            let multy = Math.floor(this.custHour * this.avgCookies)
            this.cookiesHour.push(multy)
            this.totalRep = this.totalRep + this.cookiesHour[i]
    }
    },
    render:function(){
        let locationName = document.createElement('h2')
        Stores.appendChild(locationName);
        locationName.textContent = this.locationName
        
        let h2 = document.createElement('ul')
        Stores.appendChild(h2);

        for ( let x = 0 ; x < hourArr.length ; x++){
            this.forList= document.createElement('li'),
            h2.appendChild(this.forList),
            this.forList.textContent = hourArr[x] + ' : ' + this.cookiesHour[x] + '  cookies'
        
        }

        let Total = document.createElement('li');
        h2.appendChild(Total) 
        Total.textContent = `Total : ${this.totalRep} cookies`; 
    },
    
}
Seattle.generatecust(),
Seattle.render()
// // --------------------------------------

const tokyo  = {
    locationName:'tokyo',
    minCust: '23',
    maxCust: '65',
    avgCookies: '6.3',
    custHour: 0,
    totalRep:0,
    cookiesHour: [],

    generatecust: function(){
        for ( let i=0 ; i < hourArr.length ; i++){
            this.custHour = randomCustomer(23,65);
            let multy = Math.floor(this.custHour * this.avgCookies)
            this.cookiesHour.push(multy)
            this.totalRep = this.totalRep + this.cookiesHour[i]
    }
    },
    render:function(){
        let locationName = document.createElement('h2')
        Stores.appendChild(locationName);
        locationName.textContent = this.locationName
        
        let h2 = document.createElement('ul')
        Stores.appendChild(h2);

        for ( let x = 0 ; x < hourArr.length ; x++){
            this.forList= document.createElement('li'),
            h2.appendChild(this.forList),
            this.forList.textContent = hourArr[x] + ' : ' + this.cookiesHour[x] + '  cookies'
        
        }

        let Total = document.createElement('li');
        h2.appendChild(Total) 
        Total.textContent = `Total : ${this.totalRep} cookies`; 
    },
    
}
tokyo .generatecust(),
tokyo .render()

// // --------------------------------------

const Dubai  = {
    locationName:'Dubai',
    minCust: '23',
    maxCust: '65',
    avgCookies: '6.3',
    custHour: 0,
    totalRep:0,
    cookiesHour: [],

    generatecust: function(){
        for ( let i=0 ; i < hourArr.length ; i++){
            this.custHour = randomCustomer(23,65);
            let multy = Math.floor(this.custHour * this.avgCookies)
            this.cookiesHour.push(multy)
            this.totalRep = this.totalRep + this.cookiesHour[i]
    }
    },
    render:function(){
        let locationName = document.createElement('h2')
        Stores.appendChild(locationName);
        locationName.textContent = this.locationName
        
        let h2 = document.createElement('ul')
        Stores.appendChild(h2);

        for ( let x = 0 ; x < hourArr.length ; x++){
            this.forList= document.createElement('li'),
            h2.appendChild(this.forList),
            this.forList.textContent = hourArr[x] + ' : ' + this.cookiesHour[x] + '  cookies'
        
        }

        let Total = document.createElement('li');
        h2.appendChild(Total) 
        Total.textContent = `Total : ${this.totalRep} cookies`; 
    },
    
}
Dubai .generatecust(),
Dubai .render()

// // --------------------------------------

const Paris  = {
    locationName:'Paris',
    minCust: '23',
    maxCust: '65',
    avgCookies: '6.3',
    custHour: 0,
    totalRep:0,
    cookiesHour: [],

    generatecust: function(){
        for ( let i=0 ; i < hourArr.length ; i++){
            this.custHour = randomCustomer(23,65);
            let multy = Math.floor(this.custHour * this.avgCookies)
            this.cookiesHour.push(multy)
            this.totalRep = this.totalRep + this.cookiesHour[i]
    }
    },
    render:function(){
        let locationName = document.createElement('h2')
        Stores.appendChild(locationName);
        locationName.textContent = this.locationName
        
        let h2 = document.createElement('ul')
        Stores.appendChild(h2);

        for ( let x = 0 ; x < hourArr.length ; x++){
            this.forList= document.createElement('li'),
            h2.appendChild(this.forList),
            this.forList.textContent = hourArr[x] + ' : ' + this.cookiesHour[x] + '  cookies'
        
        }

        let Total = document.createElement('li');
        h2.appendChild(Total) 
        Total.textContent = `Total : ${this.totalRep} cookies`; 
    },
    
}
Paris .generatecust(),
Paris .render()

// // --------------------------------------

const Lima  = {
    locationName:'Lima',
    minCust: '23',
    maxCust: '65',
    avgCookies: '6.3',
    custHour: 0,
    totalRep:0,
    cookiesHour: [],

    generatecust: function(){
        for ( let i=0 ; i < hourArr.length ; i++){
            this.custHour = randomCustomer(23,65);
            let multy = Math.floor(this.custHour * this.avgCookies)
            this.cookiesHour.push(multy)
            this.totalRep = this.totalRep + this.cookiesHour[i]
    }
    },
    render:function(){
        let locationName = document.createElement('h2')
        Stores.appendChild(locationName);
        locationName.textContent = this.locationName
        
        let h2 = document.createElement('ul')
        Stores.appendChild(h2);

        for ( let x = 0 ; x < hourArr.length ; x++){
            this.forList= document.createElement('li'),
            h2.appendChild(this.forList),
            this.forList.textContent = hourArr[x] + ' : ' + this.cookiesHour[x] + '  cookies'
        
        }

        let Total = document.createElement('li');
        h2.appendChild(Total) 
        Total.textContent = `Total : ${this.totalRep} cookies`; 
    },
    
}
Lima .generatecust(),
Lima .render()