function Counter() {
    this.count = 0;
    this.up = function () {
        return ++this.count;
    };
    this.down = function () {
        return --this.count;
    };
}
let counter = new Counter();
let counter1 = new Counter();
function switchGame1() {
    if (localStorage.getItem('start') < 2) {
        localStorage.setItem('start', counter.up());
        mainContainer.innerText = `${arrStart[localStorage.getItem('start') - 1]}`;
    } else if (+localStorage.getItem('start') === 2) {
        let a;
        counter1.count = localStorage.getItem('counter1');
        if (!counter1.count) {
            fCount();
        } else {
            a = +prompt('cod',);
            if (cod[+counter1.count - 1] === a) {
                fCount();
            } else {
                counter1.count = localStorage.getItem('counter1');
                mainContainer.innerText = `Задание (${arr[counter1.count - 1]})`;
            }
        }
        function fCount() {
            localStorage.setItem('counter1', counter1.up());
            mainContainer.innerText = `Задание (${arr[counter1.count - 1]})`;
        }
    }
}
mainButton1.addEventListener('click', switchGame1);
mainButton2.addEventListener('click', () => {
    if (counter1.count > 1) {
        localStorage.setItem('counter1', counter1.down());
        mainContainer.innerText = `Задание (${arr[counter1.count - 1]})`;
    }
});
if (!counter.count) {
    switchGame1();
} else {
    mainContainer.innerText = `Задание (${arr[counter1.count - 1]})`;
}
