const defaultState={
    projects: [],
    members: [],
    mainPage: "begin"
}

export function SET_PROJECTS(projects){
    return {
        type: "SET_PROJECTS",
        projects,
      };
    }

    export function SET_MEMBERS(members){
        return {
            type: "SET_MEMBERS",
            members,
          };
        }

export function SET_MAIN_PAGE(page){
        return {
            type: "SET_MAIN_PAGE",
            payload: page,
           };
         }
    

const reducer = (state=defaultState, action)=> {
    switch (action.type) {
        case "SET_PROJECTS":
            return {...state, projects: action.projects};
        case "SET_MEMBERS":
            return {...state, members: action.members};
        case "SET_MAIN_PAGE":
             return {...state, mainPage: action.payload};
        default:
            return state;
    }
};

export default reducer;