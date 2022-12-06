import "./style.css";
exports.Button = function(type){
if(type=="primary"){
    return(
        `<button className="primarybutton">${type}<button>`
    )
}
else if(type=="dashed"){
    return(
        `<button className="dashedbutton">${type}<button>`
    )
}
else if(type=="text"){
    return(
        `<button className="textbutton">${type}<button>`
    )  
}
else if(type=="link"){
    return(
        `<button className="linkbutton">${type}<button>`
    ) 
}
else if(type=="default"){
    return(
        `<button className="defaultbutton">${type}<button>`
    ) 
}
};