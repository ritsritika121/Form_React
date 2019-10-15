
export function DeleteData(i){
    return{
        type: 'DELETE_DATA',
        index: i
    }
}

export const AddData = (name, email) => {
    return {
        type: 'ADD_DATA',
        payload: {
            Name: name,
            Email: email
        }
    };
};

export function Editdata(newName, newEmail,i){
    return {
        type: 'EDIT_DATA',
        payload: {
            NewName:newName,
            NewEmail:newEmail,
            index: i
        }
    }
}

export const EditDetails = (details, i) => {
    return {
        type: "EDIT_DETAILS",
        payload:{
            Details:details,
            index:i
        }
    }
}




