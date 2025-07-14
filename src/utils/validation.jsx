export const checkvalidation = (email,password,name)=>{

    const isemailvalid = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isname = /^[a-z ,.'-]+$/.test(name)

    if (!isemailvalid) return "Email is not valid";
    if(!isPassword) return "Password is not valid";
    if(!isname) return "Name is not valid"

    return null;

}
