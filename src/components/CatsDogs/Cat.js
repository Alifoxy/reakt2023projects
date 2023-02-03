export const Cat = ({cat,dispatch}) => {
    const {id, name, breed} = cat;

    return (
        <div>
            {id}) {name} {breed}
            <button onClick={()=>dispatch({type:'REMOVE_CAT', payload:id})}>delete</button>
        </div>
    );
};

