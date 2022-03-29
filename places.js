const output = document.querySelector('.output');
console.log(output);
const url = 'places.json';
let mylist = [];
let localData = localStorage.getItem('mylist');
console.log(localData);
mylist = JSON.parse(localStorage.getItem('mylist'));
console.log(mylist);

function jsloader(value) {
    console.log(value)
    fetch(url).then(rep => rep.json())
    .then((data) => {
        mylist = data;
        maker(mylist[value]);
        savetoStorage();
    })
};

function maker(item) {
    output.innerHTML = '';
    makelist(item);
};

function makelist(item) {
    output.innerHTML = `${item.name}`;
    output.innerHTML = `${item.address}`;
    output.innerHTML = `<iframe src= ${item.map} width="350" height="350"> </iframe>`;
    savetoStorage();
};

function savetoStorage() {
    console.log(mylist);
    localStorage.setItem('mylist', JSON.stringify(mylist));
};