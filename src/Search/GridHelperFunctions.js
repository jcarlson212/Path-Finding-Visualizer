//Returns a string to be used as a key in a dictionary
//the string looks like "xCoord,yCoord"
export const hashCoord = (xCoord, yCoord) => {
    if(isNaN(xCoord) || isNaN(yCoord)) {
        return ',';
    }
    return xCoord.toString() +','+ yCoord.toString()
}