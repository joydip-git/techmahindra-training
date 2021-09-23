class Trainer {
    constructor() {
        this.assistant = new Assistant()
    }
    training() {

    }
    needAssistnace() {
        this.assistant.assist(Utility.getMarker)
        //Utility.getMarker()
    }
}

class Assistant {
    assist(utilityFn) {
        utilityFn()
    }
}

class Utility {
    static getMarker() {

    }
    static getRemote() {

    }
}