import { Map } from 'immutable';

function Immutable(){
    let obj=Map({
        name:"Praneeth"
    });
    function publish(){
        return obj.set("areUFine",true);
    }
    obj=publish();
    console.log(obj);
} 
export default Immutable;
