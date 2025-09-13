console.log('Before')
getUser(100, getReposForCallback)

//^ Named functions
function getReposForCallback(user) {
  console.log(user)
  getRepos(user.name, getCommitsForCallback)
}

function getCommitsForCallback(repos) {
  console.log(repos)
  getCommits(repos, displayCommitsForCallback)
}

function displayCommitsForCallback(commits) {
  console.log(commits)
}

function getUser(userId, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: userId, name: 'abdulhathi' }
      resolve(user)
    }, 2000)
  })
}

function getRepos(userName, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const repos = ['repo1', 'repo2', 'repo3']
      resolve(repos)
    }, 2000)
  })
}

function getCommits(repos, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const repo = repos[0]
      resolve(repo)
    }, 2000)
  })
}

console.log('After')
