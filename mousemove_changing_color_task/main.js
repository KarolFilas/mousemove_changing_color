document.body.addEventListener('click', function (e) {
    console.log(e.clientX, e.clientY);
    console.log(e);
    if (e.clientX % 2 === 0 && e.clientY % 2 === 0) {
        console.log('obie parzyste');
        document.body.style.backgroundColor = 'red'
    } else if (e.clientX % 2 === 1 && e.clientY % 2 === 1) {
        console.log('obie nieparzyste');
        document.body.style.backgroundColor = 'blue'

    } else {
        console.log('jedna przysta a druga nieparzysta');
        document.body.style.backgroundColor = 'green'
    }
})
