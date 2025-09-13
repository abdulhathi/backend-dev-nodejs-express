const p = Promise.resolve(1)

p.then((res) => console.log(res))

const p1 = Promise.reject(new Error('error'))

p1.then((res) => console.log(res)).catch((err) => console.log(err))

const p2 = Promise.reject('Error Message')

p2.then((res) => console.log(res)).catch((err) => console.log(err))
