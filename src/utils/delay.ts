export const delay = (time = 1000) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(null),time)
    })
}