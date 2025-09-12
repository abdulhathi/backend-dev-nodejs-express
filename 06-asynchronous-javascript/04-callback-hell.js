console.log('Before')
getUser(100, (user) => {
  console.log(user)

  getRepos(user.name, (repos) => {
    console.log(repos)

    getCommits(repos, displayCommits)
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
    const repos = ['repo1', 'repo2', 'repo3']
    callback(repos)
  }, 2000)
}

function getCommits(repos, callback) {
  setTimeout(() => {
    const repo = repos[0]
    callback(repo)
  }, 2000)
}

function displayCommits(commits) {
  console.log(commits)
}

console.log('After')
