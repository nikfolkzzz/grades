const str = 'background-color-jojo';

const camelize = (str) => {
    const arr = str.split('')
    arr.map((item,index,arr)=>{
        if(item ==='-'){
            arr.splice(index,1)
            const upLet= arr[index].toUpperCase()
            arr.splice(index,1,upLet)
        }
    })
    console.log(arr.join(''))
}

camelize(str)