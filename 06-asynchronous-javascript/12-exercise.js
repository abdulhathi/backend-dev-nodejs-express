customers = [
  { id: 1, name: 'Abdul Hathi', membership: 'Gold', email: 'abdulhahti@gmail.com' },
  { id: 2, name: 'Mohamed', membership: 'Bronze', email: 'abdulhahtidev@gmail.com' },
  { id: 3, name: 'Haji', membership: 'Silver', email: 'ayshaji2010@gmail.com' },
]

movies = [
  { plan: 'Gold', movies: ['movie1', 'movie2'] },
  { plan: 'Silver', movies: ['movie3', 'movie5'] },
  { plan: 'Bronze', movies: ['movie4', 'movie6'] },
]

function getCustomer(customerId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const customer = customers.find((c) => c.id === customerId)
      resolve(customer)
    }, 2000)
  })
}

function getMovies(plan) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      moviesByPlan = movies.find((movie) => movie.plan === plan)
      resolve(moviesByPlan)
    }, 2000)
  })
}

function sentEmail(customerName, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Email sent to customer '${customerName}' about the movies [${movies.join(',')}] available to his plan.`)
    }, 2000)
  })
}

async function displayCustomerPlanMovies(customerId) {
  try {
    const customer = await getCustomer(customerId)
    console.log(customer)
    const movies = await getMovies(customer.membership)
    console.log(movies)
    const email = await sentEmail(customer.name, movies.movies)
    console.log(email)
  } catch (error) {}
}

displayCustomerPlanMovies(1)