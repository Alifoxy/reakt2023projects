export const Cat = ({cat,dispatch}) => {
    const {id, name, breed} = cat;

    return (
        <div>
            <div>catID:{id}</div>
            <div>name:{name}</div>
            <div>breed:{breed}</div>
            <button onClick={()=>dispatch({type:'REMOVE_CAT', payload:id})}>delete</button>
        </div>
    );
};

