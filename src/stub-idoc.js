export function get_idocData(idocNum){
    return fetch("https://fg.johnflaboe.com" + "?idoc=" + idocNum);
}