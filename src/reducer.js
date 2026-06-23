import * as actions from './Actions/actionTypes';
export default function reducer(state=[],action){
    let lastId=0;
    switch(action.type){
        case actions.BUG_ADDED:{
            const val=[
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
            // console.log(val);
            return val; 
            }
        case actions.BUG_REMOVED:{
            return state.filter(bug=>bug.id!=action.payload.id);
            }
        case actions.BUG_RESOLVED:{
            return state.filter(bug=>bug.id===action.payload.id)
                        .map(bug=>bug = {...bug,resolved:true});
        }
        default: return state;       
    }
}