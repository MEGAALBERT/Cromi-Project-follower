const defaultState={
    projects: [],
}

export function SET_PROJECTS(projects){
    return {
        type: "SET_LOCATIONS",
        projects,
      };
    }


const reducer = (state=defaultState, action)=> {
    switch (action.type) {
        case "SET_PROJECTS":
            return {...state, projects: action.projects};
        default:
            return state;
    }
};

export default reducer;