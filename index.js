function index(...classnames){
    let finalClass = ''
    classnames.forEach(cls =>{
        if( typeof cls === "string"){
            finalClass= finalClass + " " + cls
        }
    })
    return finalClass
}


module.exports = index;