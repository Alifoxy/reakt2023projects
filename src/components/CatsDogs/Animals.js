import {Cat} from './Cat';
import {Dog} from './Dog';

export const Cats = ({cats,dispatch}) => {
    return (
        <div>
            {cats.map(cat=><Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export const Dogs = ({dogs,dispatch}) => {
    return (
        <div>
            {dogs.map(dog=><Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};



