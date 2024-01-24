function capitalizeWords(str){
  return str
  .toLowerCase()
  .split(' ')
  .map((item)=>{
    return item[0].toUpperCase() + item.substring(1)
  })
  .join(" ")
}

const money = (num) => {
  return `$${num}`
}

export {capitalizeWords, money}