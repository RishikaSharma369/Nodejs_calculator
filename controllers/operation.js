const add = (input) => {
  const n = input.reduce((a,b)=>a+b)
  return n
}

const sub = (input) => {
  const n=input.reduce((a, b) => a-b)
  return n  
}
 
const multi = (input) => {
  const n=input.reduce((a, b) => a*b)
  return n  
}

const div = (a,b) => (a/b)
  

module.exports={add,sub,multi,div}  