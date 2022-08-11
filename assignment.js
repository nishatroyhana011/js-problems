//solution of problem one
function radianToDegree(radian){
 
    if(typeof(radian) !== 'number'){
        return 'please enter a valid number';
    }
    else{
        //main logic
        let degree = 57.2958 * radian;
        degree = degree.toFixed(2);
        degree = parseFloat(degree);
        return degree;
    }
}

//solution of problem two
function isJavaScriptFile(fileName){
   
    if(typeof(fileName) !=='string'){
        return 'Invalid input';
    }
    else{
        //main logic
        fileName = fileName.toLowerCase();
        if( fileName.endsWith('.js') === true ){
            return true;
        }
        else{
            return false;
        }   
    }
}

//solution of problem three
function oilPrice(myDieselQuantity, mypetrolQuantity, myOctaneQuantity){

    if((typeof(myDieselQuantity) !== 'number') || (typeof(mypetrolQuantity) !== 'number') || (typeof(myOctaneQuantity) !=='number') 
        || myDieselQuantity < 0 || mypetrolQuantity < 0 || myOctaneQuantity < 0 ){
            return 'Invalid input';
    }else{
        //main code
        const dieselPrice = 114;
        const petrolPrice = 130;
        const octanePrice = 135;

        //total diesel price
        let totalDieselPrice = myDieselQuantity * dieselPrice;

        //total petrol price
        let totalPetrolPrice = mypetrolQuantity * petrolPrice;

        //total octane price
        let totalOctanePrice = myOctaneQuantity * octanePrice;

        //total price
        let totalPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice
        return totalPrice;
    }
}

//solution of problem four
function publicBusFare(persons){

    const busFare = 250;

    if((typeof(persons) !== 'number') || persons <= 0 || Math.floor(persons) != persons ){
        return 'Please enter a valid positive full number';
    }
    
    //main code
    if(persons < 11){
        let totalFare = persons * busFare;
        return totalFare;
    }

    //condition for taking a microbus
    else if(persons >= 11 && persons < 50 ){
        let remainingPerson = persons % 11;
       let totalFare = remainingPerson * busFare;
       return totalFare;
    }

    //condition for taking a bus
    else{
        let remainingPerson = persons % 50;

        if( remainingPerson < 11){
            let totalFare = remainingPerson * busFare;
            return totalFare; 
        }
        else {
            remainingPerson = remainingPerson % 11;
            let totalFare = remainingPerson * busFare;
            return totalFare;
        }
    }
}

//solution of problem five
function isBestFriend(firstFriend, secondFriend){
   
    if(typeof(firstFriend) === 'object' && typeof(secondFriend) === 'object'){
 
        if( (typeof(firstFriend['name']) === 'string') && (typeof(firstFriend['friend']) == 'string') && (typeof(secondFriend['name']) == 'string') && (typeof(secondFriend['friend']) == 'string') ){
            
            //converting names to loweercase
            let firstPersonName = firstFriend.name.toLowerCase();
            let firstPersonFriend = firstFriend.friend.toLowerCase();
            let secondPersonName = secondFriend.name.toLowerCase();
            let secondPersonFriend = secondFriend.friend.toLowerCase();

            //bestfriend checking
            if((firstPersonName === secondPersonFriend) && (firstPersonFriend === secondPersonName)) {
                return true;
            }
            else{
                return false;
            }           
        }
        else{
            return 'object property or value is incorrect';
        }  
    }
    else{
        return 'We need an object';
    }
}


