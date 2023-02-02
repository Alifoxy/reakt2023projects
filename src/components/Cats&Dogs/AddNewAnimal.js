import {useReducer} from "react";

const AddNewAnimal = () =>{
    const reducer = (state, action) =>{
        switch (action.type) {
            case 'AddCat':
                return {...state,cats:state.cats + {cat}}
            case 'RemoveCat':
                return {...state,cats:state.cats - {cat}}
            case 'AddDog':
                return {...state,dogs:state.dogs + {dog}}
            case 'RemoveDog':
                return {...state,dogs:state.dogs - {dog}}
            default:
                return {...state}
        }
    }

    const initValue = () => (
        {cats: [], dogs:[]}
    );

    const cat = () => (
        { name:{cat_name},
          breed:{cat_breed}}
    );

    const dog = () => (
        { name:{dog_name},
          breed:{dog_breed}}
    );

    const[state,dispatch] = useReducer(reducer,null,initValue)
    return(
        <div>
            <div>Cats: {state.cats}</div>
            <button onClick={()=>dispatch({type:'RemoveCat'})}>Remove cat</button>
            <hr/>
            <div>Dogs: {state.dogs}</div>
            <button onClick={()=>dispatch({type:'RemoveDog'})}>Remove dog</button>
            <hr/>
        </div>
    )
};

