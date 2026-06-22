import { produce } from "immer";
function Immer(){
    let obj={
        name:"Sai"
    }
    const publish=(book)=>{
        return produce(book,draftBook=>{
            draftBook.age=20;
        });
    }
    console.log("Original",obj);
    console.log("Duplicate",publish(obj));
}
export default Immer;