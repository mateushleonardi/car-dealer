// import { useState, useEffect } from "react";

// export function APIVehicleType(){
//     const [vehicleType, setVehicleType] = useState([]);
//     useEffect(()=>{
//         fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
//         .then(response => response.json())
//         .then(data => setVehicleType(data.Results))
//         .catch((error)=> console.error ('Cannot find the VehicleTypes',error));
//     },[])

//     return vehicleType
// }
// export function APIVehicleYear(){
//     const [vehicleYear, setVehicleYear] = useState([]);
//     useEffect(()=>{
//         fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
//         .then(response => response.json())
//         .then(data => setVehicleYear(data.Results))
//         .catch((error)=> console.error ('Cannot find the VehicleYear',error));
//     },[])
    
//     return vehicleYear
// }
// api/APIConnection.js
import { useState, useEffect } from "react";

// Hook customizado para buscar tipos de veículos
export function useAPIVehicleType() {
    const [vehicleType, setVehicleType] = useState([]);

    useEffect(() => {
        fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
            .then(response => response.json())
            .then(data => setVehicleType(data.Results))
            .catch(error => console.error('Cannot find the VehicleTypes', error));
    }, []);

    return vehicleType; // Retorne os dados obtidos
}

// Hook customizado para buscar anos de veículos
export function useAPIVehicleYear() {
    const [vehicleYear, setVehicleYear] = useState([]);

    useEffect(() => {
        fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
            .then(response => response.json())
            .then(data => setVehicleYear(data.Results))
            .catch(error => console.error('Cannot find the VehicleYear', error));
    }, []);

    return vehicleYear; // Retorne os dados obtidos
}
