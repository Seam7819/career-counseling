import { FaRegStar, FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const ServiceCard = ({ singleData }) => {

    const { category, id, counselor, description, duration, image, learn_more, pricing, rating, service_name
        , session_type } =  singleData ;

        const {_id} = useParams();
        console.log(_id);

    return (
        <div className="card bg-base-100 mx-4 lg:mx-0 shadow-sm my-5 ">
  <figure>
    <img className="w-96 h-60 rounded-md"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {counselor}
      <div className="flex text-yellow-500 ml-5"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />


</div>
    </h2>
    <p>{service_name}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{session_type}</div>
      <div className="badge badge-outline">{category}</div>
    </div>
    <Link to={`/services/${_id}`} className="btn btn-soft btn-info">Learn More</Link>
  </div>
  
</div>
    );
};

export default ServiceCard;