// console.log("hello");

document.addEventListener('alpine:init', () => {
    // console.log(Alpine);
    Alpine.data('taxiData', () => ({

        // passengers=12,
        // userMessage='',

        increment(taxiObject){
            taxiObject.queue++
        },
        decrement(taxiObject){
            taxiObject.queue--
        },

        addTaxi(taxiObject){
            taxiObject.taxiAvail++
        },

        
        taxiData: Alpine.$persist([
            { destination: 'Makhaza', queue: 12, taxiCount: 0, fare: 12.00, taxiFareTotal: 0, taxiAvail: 3 },
            { destination: 'Belhar', queue: 34, taxiCount: 0, fare: 15.00, taxiFareTotal: 0, taxiAvail: 3 },
            { destination: 'Bellville', queue: 23, taxiCount: 0, fare: 10.00, taxiFareTotal: 0, taxiAvail: 3 }]),
            


            destinationExists(userDestination) {
                return this.taxiData.some(function (element) {
                    return element.destination === userDestination;
                });
            },

            addDestination(userDestination, userFare, userQueue){
                if(userDestination != ''){
                    if(userFare != ''){
                        if(userQueue != ''){
                            if (this.destinationExists(userDestination) == false) {
                                if (userDestination.match("^[a-zA-Z]*$") || userDestination.match("^[a-zA-Z_ ]*$")) {
                                    // if(userFare.match("^[0-9]*$")){
                                        // if(userQueue.match("^[0-9]*$")){
                                            this.taxiData.push({destination:userDestination, queue:userQueue, taxiCount:0, fare:userFare, taxiFareTotal:0, taxiAvail:3})
                                            userMessage = "The destination has been entered successfully"

                                        // }else{
                                        //     userMessage = "Please enter a valid queue"
                                        // }
            
                                    // }else{
                                    //     userMessage = "Please enter a valid fare amount"
                                    // }
                                }
                                else if(!userDestination.match("^[a-zA-Z]*$")){
                                  userMessage = "Please enter a valid destination name"
                                }
                            }
                            else if (this.destinationExists(userDestination) == true) {
                                userMessage = "The destination entered already exists"
                            }

                        }else{
                            userMessage = "Missing queue number!"
                        }

                    }else{
                        userMessage = "Missing fare amount!"
                    }

                }else{
                    userMessage = "Missing destination!"
                }

            },

            // returnMessage(){
            //     return userMessage
            // },


            departTaxi(){
                this.taxiData.queue=taxi.queue-12,
                this.taxiData.taxiCount++,
                this.taxiData.taxiFareTotal+=(taxi.fare*12),
                this.taxiData.taxiAvail--
            }, 

            taxiFare(){
                this.taxiData.fare
            },

            totalTaxiFare(){
                this.taxiData.totalTaxiFare
            },

            taxiCountDepart(){
                this.taxiData.taxiCount
            }

    }))



})
