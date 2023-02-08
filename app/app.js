class Component{
    constructor(id){
        this.id = id;
    }

    getPercentSignal(){
        return '%';
    }
}

class Type extends Component{
    constructor(id, per){
        super(id);
        this._id = id;
        this.per = per;
    }
    getPercentChocolate() {
        return this.per + super.getPercentSignal();
      }
}



function percentChocolate(value){
    try{
        const firstType = new Type('A', '80');
        const secondType = new Type('B', '85');
        const thirdType = new Type('C', '90');


        if (value.toUpperCase() === firstType.id)
            return (firstType.getPercentChocolate())
        else if (value.toUpperCase() === secondType.id)
            return (secondType.getPercentChocolate())
        else if (value.toUpperCase() === thirdType.id)
            return (thirdType.getPercentChocolate())
        else
            return ('Error')
    }
    catch (error){
        return errorReturn
    }
}

module.exports = percentChocolate

