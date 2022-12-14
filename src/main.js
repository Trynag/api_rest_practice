const axios_api = axios.create({
    baseURl: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf8',
    },
    params: {
        'api_key': API_KEY,
    },
})

async function getTrendingPreview() {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    const trendingPreviewsMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
    const data = await response.json();    

    data.results.forEach( movie => {
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt', movie.title)
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`)

        movieContainer.appendChild(movieImg)
        trendingPreviewsMoviesContainer.appendChild(movieContainer)
    })
}

async  function getCategoriesPreview() {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)

    // const { data2 } = await axios_api.get('genre/movie/list')

    const previewCategoryContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
    
    const data = await response.json();
    data.genres.forEach( category => {
        const categoryContainer = document.createElement('div')
        categoryContainer.classList.add('category-container')

        const categoryTitle = document.createElement('h3')
        categoryTitle.classList.add('category-title')
        categoryTitle.setAttribute('id', `id${category.id}`)

        const categoryTitleText = document.createTextNode(category.name)
        categoryTitle.appendChild(categoryTitleText)
        categoryContainer.appendChild(categoryTitle)
        previewCategoryContainer.appendChild(categoryContainer)
    })
}

getTrendingPreview()
getCategoriesPreview()