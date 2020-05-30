let user = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: {
        key41: '',
        key42: false
    },
    key5: []
}

let keys = [];
keys = Object.keys(user.key4);
console.log(keys);

