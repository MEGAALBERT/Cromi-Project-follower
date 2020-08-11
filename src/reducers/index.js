const defaultState={
    projects: [],
    members: [],
    mainPage: "begin",
    contactName: "",
    contactEmail: "",
    contactMessage: ""
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
    
export function SET_CONTACT_NAME(name){
    return {
        type: "SET_CONTACT_NAME",
        payload: name
    }
}   

export function SET_CONTACT_EMAIL(email){
    return {
        type: "SET_CONTACT_EMAIL",
        payload: email
    }
} 

export function SET_CONTACT_MESSAGE(message){
    return {
        type: "SET_CONTACT_MESSAGE",
        payload: message
    }
} 

const reducer = (state=defaultState, action)=> {
    switch (action.type) {
        case "SET_PROJECTS":
            return {...state, projects: action.projects};
        case "SET_MEMBERS":
            return {...state, members: action.members};
        case "SET_MAIN_PAGE":
             return {...state, mainPage: action.payload};
        case "SET_CONTACT_NAME":
             return {...state, contactName: action.payload};
        case "SET_CONTACT_EMAIL":
             return {...state, contactEmail: action.payload};
        case "SET_CONTACT_MESSAGE":
              return {...state, contactMessage: action.payload};
        default:
            return state;
    }
};


export default reducer;