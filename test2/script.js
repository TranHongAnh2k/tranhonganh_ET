function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const gennerate = () => {
    const input = document.querySelector(".input").value
    if (!input || input == 0) {
        document.querySelector(".result").innerHTML = "Error"
        return
    }
    const arr = []
    while (arr.length < input) {
        arr.push(getRandomInt(+input)+1)
    }
    document.querySelector(".result").innerHTML = JSON.stringify(arr)
    console.log(arr)
}