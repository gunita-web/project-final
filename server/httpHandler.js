function getRoot(request,response){
    response.status =200
    response.json({
        name:'gtuu',
        value: 123
    })
}

module.exports ={
    getRoot
}