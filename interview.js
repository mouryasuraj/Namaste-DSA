const arr = [2,7,11,15]
const target = 17

function twoSum() {
    const map = new Map()
    
    for (let i = 0; i < arr.length; i++) {
        
        const compliment = target - arr[i]
        if(map.has(compliment)){
            return [map.get(compliment),i]
        }

        map.set(arr[i], i)
    }
    return -1
}

console.log(twoSum())
