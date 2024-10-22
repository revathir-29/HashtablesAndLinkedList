//Create hash table
class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size);
    }

//create hash function    
    _hashFunction(key) {
        let sum =0

        const PRIME_NUMBER = 31;

        for(let i =0; i<Math.min(key.length, 100); i++) {
            const charCode = key.charCodeAt(0) - 96;
            sum = (sum * PRIME_NUMBER +charCode) % this.keyMap.length;
        }
        return sum;
    }

    set(key, value) {
        const index = this._hashFunction(key);
        //console.log('-------------',index);
        //console.log(!this.key.keyMap[index]);

       if(!this.keyMap[index]) this.keyMap[index] = [];
       this.keyMap[index].push([key, value]);
       return this;
    }
}
const phoneBook = new HashTable();
phoneBook.set('John' , '1234567890');