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

console.log('After')
