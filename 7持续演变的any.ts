/**
 * any类型时持续演进的，赋值之后原先是any的地方以后可能就不是any了
 * 但是这个只对隐式的any有效，一旦一个值被显式的声明为any之后，就会一直是any
 */
function range(start: number, limit: number) {
  const out = []
  if (start === limit) {
    // 一个变量如果还是隐式的any，最好不要对其读值，这样会报一个错
    return out
  }

  for (let i = start; i < limit; i++) {
    out.push(i)
  }

  return out
}