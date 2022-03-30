/**
 * True or False
 * @param {Array} names
 */
export const ToF = (names = ['是','否'])=>{
    return [
        {
            name:names[0],value:true
        },
        {
            name:names[1],value:false
        },
    ]
}
