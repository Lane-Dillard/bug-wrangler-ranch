const { database } = require("./database.js")

const roundup = (herdSize) => {
    let cattleInHerd = ''
    const cattle = []
    const types = database.cattleTypes
    

    for (let counter = 0; counter < herdSize; counter++) {
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType]
        cattle.push(animal)
        if (counter === herdSize - 1) {
            cattleInHerd += `${cattle[counter].breed}`
    
        } else {
            cattleInHerd += `${cattle[counter].breed},`
        }  
    }
    

    return cattleInHerd
}

module.exports = { roundup }