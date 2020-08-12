const defaultState={
    projects: [],
    members: [],
    mainPage: "begin",
    messages: [],
    contactName: "",
    contactEmail: "",
    contactMessage: "",
    memberPassword: "",
    memberEmail: ""
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

export function SET_MESSAGES(messages){
    return {
        type: "SET_MESSAGES",
        messages
    }
}

export function SET_MEMBER_PASSWORD(password){
    return {
        type: "SET_MEMBER_PASSWORD",
        password
    }
}

export function SET_MEMBER_EMAIL(email){
    return {
        type: "SET_MEMBER_EMAIL",
        email
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
        case "SET_MESSAGES":
              return {...state, messages: action.messages};
        case "SET_MEMBER_EMAIL":
            return {...state, memberEmail: action.email};
        case "SET_MEMBER_PASSWORD":
            return {...state, memberPassword: action.password}
        default:
            return state;
    }
};


export default reducer;