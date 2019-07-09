const dog    = document.getElementById('dog')
const button = document.getElementById('dog-button')
const loader = document.getElementById('loader')
const dots   = document.querySelector('#loader span')

const switchDog = () => {

    // create a request object
    const request = new XMLHttpRequest()
    request.open('GET', 'https://dog.ceo/api/breeds/image/random')

    // hide the current dog
    dog.classList.toggle('hide')

    // show the loader
    loader.classList.toggle('hide')

    // listen for the load event for the request
    request.onload = ({ target }) => {
        const { response } = target
        const { message } = JSON.parse(response)
        dog.src = message

        // listen for the load event of the dog image
        dog.onload = () => {

            // hide the loader
            loader.classList.toggle('hide')

            // show the dog
            dog.classList.toggle('hide')
        }

        dog.src = message
    }

    // send the request
    request.send()
}

button.addEventListener('click', switchDog)

