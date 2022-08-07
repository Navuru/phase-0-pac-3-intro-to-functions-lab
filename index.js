function shout(string){
    return string.toUpperCase();
}
// console.log(shout("helllo!"));

function whisper(string){
    return string.toLowerCase();
}
// console.log(whisper("heyy!"))

function logShout(string){

    console.log(string.toUpperCase())

}

function logWhisper(string) {
    console.log(string.toLowerCase())

}

function sayHiToHeadphonedRoommate(string){

    let upperCaseVersion = string.toUpperCase();
    let lowerCaseVersion = string.toLowerCase()

    
    if(string === lowerCaseVersion ){
        return "I can't hear you!"
    }else if(string === upperCaseVersion){
        return "YES INDEED!"
    }else if(string === "Let's have dinner together!"){
        return "I would love to!"
    }
gi
}