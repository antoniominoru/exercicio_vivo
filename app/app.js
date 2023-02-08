function percentChocolate(value){
    try{
        if (value.toUpperCase() === 'A')
            return ('80%')
        else if (value.toUpperCase() === 'B')
            return ('85%')
        else if (value.toUpperCase() === 'C')
            return ('90%')
        else
            return ('Error')
    }
    catch (error){
        return errorReturn
    }
}

module.exports = percentChocolate

