console.log('Before')
getUser(100, (user) => {
  console.log(user)
  getRepos(user.name, (repos) => {
    console.log(repos)
  })
})

function getUser(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, name: 'abdulhathi' }
    callback(user)
  }, 2000)
}

function getRepos(userName, callback) {
  setTimeout(() => {
    console.log('Getting git hub API')
    callback(['repo1','repo2','repo3'])
  }, 2000)
}

console.log('After')