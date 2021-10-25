const butt = document.querySelector('button')
butt.addEventListener('click',function () {
const a = document.getElementById('a')
const b = document.getElementById('b')
const c = document.getElementById('c')
    const discriminant = b.value * b.value - 4 * a.value * c.value
document.getElementById('disc').insertAdjacentHTML('beforeend',`${b.value}<sup>2</sup>-4*${a.value}*${c.value}=${discriminant}`)
})