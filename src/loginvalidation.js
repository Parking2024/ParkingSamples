function Validation(values){
    let error={}

    const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    //const password_pattren= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    if(values.email === ''){
        error.email='Name should not empty'
    }
    else if(!email_pattern.test(values.email)){
        error.email='Email did not match'
    }else {
        error.email=''
    }
    if(values.password === ''){
        error.password='Name should not empty'
    }
    
    return error;
} export default Validation