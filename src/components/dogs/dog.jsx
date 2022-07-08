import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDog, renameDog, changeImage } from "../../redux/dogs/action";

const Dog = (dog) => {

    const { message, name, status, id } = dog;
    const dispatch = useDispatch();
    const [isReadOnly, setIsReadOnly] = useState(true);
    const [dogName, setDogName] = useState(name);
    const loading = useSelector(state => state.dogs.dogs.loading);

    const handleChangeName = () => {
        dispatch(renameDog({
            ...dog,
            name: dogName
        }))
        setIsReadOnly(true)
    };
    const cancelRenameDog = () => {
        setIsReadOnly(true)
        setDogName(name)
    };
    const handleChangeImage = () => {
        dispatch(changeImage(dog))
    };

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <button disabled={loading} onClick={handleChangeImage} style={{ margin: "5px" }}>CHANGE IMG</button>
            <img src={message} style={{ width: "200px", height: "200px" }} />
            <span>{`STATUS:${status}`}</span>
            <label>{`Name this DOG: "${name}"`}</label>
            <input type="text" value={dogName} readOnly={isReadOnly} onChange={(event) => setDogName(event.target.value)} />
            {
                isReadOnly
                    ? (
                        <button style={{ margin: "5px" }} onClick={() => setIsReadOnly(false)}>RENAME DOG</button>
                    )
                    : (<>
                        <button style={{ margin: "5px" }} onClick={handleChangeName}>OK</button>
                        <button style={{ margin: "5px" }} onClick={cancelRenameDog}>BACK</button>
                    </>)
            }

            <button onClick={() => dispatch(deleteDog(id))}>DELETE THIS DOG</button>
        </div>
    )
};

export default Dog;