const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 1...')
    resolve(1)
  }, 2000)
})

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 2...')
    resolve(2)
  }, 2000)
})

Promise.all([p1, p2]).then((res) => console.log(res))

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async operation 3...')
    reject('Error in p3')
  }, 2000)
})

const p4 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 4...')
    resolve(4)
  }, 2000)
})

Promise.all([p3, p4])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))


const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async operation 5...')
    resolve(5)
  }, 2000)
})

const p6 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 6...')
    resolve(6)
  }, 1000)
})

Promise.race([p5, p6])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
