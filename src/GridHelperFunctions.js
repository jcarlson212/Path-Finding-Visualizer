

//Returns a string to be used as a key in a dictionary
//the string looks like "xCoord,yCoord"
export const hashCoord = (xCoord, yCoord) => {
    return xCoord.toString() +','+ yCoord.toString()
}