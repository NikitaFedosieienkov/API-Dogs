import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDog } from "../../redux/dogs/action";
import Dog from "./dog";

const DogBox = (props) => {

    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs.dogs.items);
    const loading = useSelector(state => state.dogs.dogs.loading);

    return (<div>
        <button disabled={loading} onClick={() => dispatch(addDog())} style={{ margin: "5px auto", display: "block", padding: "10px" }}>GET DOG</button>
        <div>
            {dogs.map(dog => {
                return <Dog {...dog} key={dog.id} />
            })}
        </div>
    </div>)
}

export default DogBox;