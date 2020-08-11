const defaultState={
    projects: [],
    members: [],
}

export function SET_PROJECTS(projects){
    return {
        type: "SET_PROJECTS",
        projects,
      };
    }

    export function SET_MEMBERS(members){
        return {
            type: "SET_PROJECTS",
            members,
          };
        }
    

const reducer = (state=defaultState, action)=> {
    switch (action.type) {
        case "SET_PROJECTS":
            return {...state, projects: action.projects};
        case "SET_MEMBERS":
            return {...state, projects: action.members};
        default:
            return state;
    }
};

export default reducer;