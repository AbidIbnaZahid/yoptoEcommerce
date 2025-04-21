let count = document.querySelectorAll(".count")
let countArray = Array.from(count)
countArray.map((item) => {
    let count = 0
    function counterUp() {
        count++
        item.innerHTML = count
        if (count == item.dataset.number) {
            clearInterval(stop)
        }
    }
    let stop = setInterval(() => {
        counterUp()
    }, 5)
})
