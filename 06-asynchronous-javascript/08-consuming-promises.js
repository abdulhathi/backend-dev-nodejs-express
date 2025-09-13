console.log('Before')
getUser(100)
  .then((user) => getRepos(user.userName))
  .then((repos) => getCommits(repos))
  .then((commits) => displayCommits(commits))
  .catch((error) => console.log(error))

function displayCommits(commits) {
  setTimeout(() => {
    console.log(commits)
  }, 2000)
}

function getUser(userId, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Get github api')
      const user = { id: userId, name: 'abdulhathi' }
      resolve(user)
    }, 2000)
  })
}

function getRepos(userName, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Get repos')
      const repos = ['repo1', 'repo2', 'repo3']
      resolve(repos)
    }, 2000)
  })
}

function getCommits(repos, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Get commits')
      const repo = repos[0]
      resolve(repo)
    }, 2000)
  })
}

console.log('After')
