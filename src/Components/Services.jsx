import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [DrData,setDrData] = useState([])
    useEffect(()=>{
        fetch('/public/data.json')
        .then(res => res.json())
        .then(data => {
            setDrData(data);
            // console.log(data);
        })
    },[])

    return (
        <div>
            <div className="my-14">
                <h2 className="font-bold text-2xl text-center">Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    DrData.map(singleData => <ServiceCard singleData={singleData} key={singleData._id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;