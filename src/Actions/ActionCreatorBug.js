import * as actions from './actionTypes'
export function  add(desc){
    const type={
        type:actions.BUG_ADDED,
        payload:{
            description:"Bug"+desc
        }
    };
    return type;
}
export  function remove(id){
    const type={
        type:actions.BUG_REMOVED,
        payload:{
            id:id
        }
    }
    return type;
}
export  function resolve(id){
   const type={
        type:actions.BUG_RESOLVED,
        payload:{
            id:id
        }
    }
    return type;
}