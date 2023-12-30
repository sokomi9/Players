class players {
    constructor(playername){
        this.name = playername;
    }
    getName(){
        return this.name;
    }
    setName(playername) {
        this.name = playername;
    }
};
module.exports = players