

export function checkUserConnect(){
    const userToken = localStorage.getItem("userToken");
    const email = localStorage.getItem("email");
    return (userToken !== undefined && userToken !== null && userToken !== "") 
            && (email !== undefined && email !== null && email !== "")
}


export function removeUser(){
    localStorage.removeItem("userToken")
    localStorage.removeItem("email")
}