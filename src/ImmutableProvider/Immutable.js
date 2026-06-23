import { Map } from 'immutable';

function Immutable(){
    let obj=Map({
        name:"Praneeth"
    });
    function publish(obj1){
        return obj1.set("areUFine",true);
    }
    const obj2=publish(obj);
    console.log(JSON.stringify(obj2));
    console.log(JSON.stringify(obj));
} 
export default Immutable;
