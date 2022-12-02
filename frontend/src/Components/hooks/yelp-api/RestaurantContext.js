import React,{ useContext, useState} from "react";


 
 const RestaurantContext = React.createContext();
 const RestaurantUpdateContext = React.createContext();

 export function useRestaraunt() {
     return useContext(RestaurantContext)
 }

 export function useRestarauntUpdate() {
    return useContext(RestaurantUpdateContext)
 }

 export function RestarauntProvider({children}){
    const [restarauntArray, setRestarauntArray] = useState([
        {businessName: '', businessId: ' ', businessZip: '' }
    ])
    
    function  setArray (){
        setRestarauntArray(...restarauntArray, {businessName: '', businessId: ' ', businessZip: '' } )
    }


return (
    <RestaurantContext.Provider value={restarauntArray}>
        <RestaurantUpdateContext.Provider value={setRestarauntArray}>
            {children}
        </RestaurantUpdateContext.Provider>

    </RestaurantContext.Provider>

)
}


