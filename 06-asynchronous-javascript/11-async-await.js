console.log('Before')

async function printCommits() {
  try {
    const user = await getUser(100)
    const repos = await getRepos(user.userName)
    const commits = await getCommits(repos)
    displayCommits(commits)
  } catch (error) {

  }
}

printCommits()

function displayCommits(commits) {
  setTimeout(() => {
    console.log(commits)
  }, 2000)
}

function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Get github api')
      const user = { id: userId, name: 'abdulhathi' }
      resolve(user)
    }, 2000)
  })
}

function getRepos(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Get repos')
      const repos = ['repo1', 'repo2', 'repo3']
      resolve(repos)
    }, 2000)
  })
}

function getCommits(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Get commits')
      const repo = repos[0]
      resolve(repo)
    }, 2000)
  })
}

console.log('After')
