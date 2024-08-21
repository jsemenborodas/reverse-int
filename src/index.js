module.exports = function reverse (n) {
  n = String(Math.abs(n));
  let n2 = '';
  for(let i = n.length-1; i >= 0; i--){
    n2 += n[i];
  }
  return(Number(n2));
}
