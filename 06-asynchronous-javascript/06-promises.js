const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 2000)
})
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error Message'))
  }, 2000)
})

p.then((res) => console.log(res))
p1.then((res) => console.log(res)).catch((err) => console.log(err.message))
