const h1 = document.querySelector('h1')

const colorChange = (e) => {
    const x = e.clientX
    const y = e.clientY
    const width = window.innerWidth
    const height = window.innerHeight
    const red = x / width * 100
    const blue = y / height * 100
    const green = ((x / width * 100) + (y / height * 100)) / 2

    h1.textContent = `${x}, ${y}`
    document.body.style.backgroundColor = `rgb(${red}%, ${green}%,${blue}%)`

}

document.body.addEventListener('mousemove', colorChange)