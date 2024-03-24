class Node{
    constructor(num){
        this.value = num || null;
        this.next = null;
    }
}

class linkedList{
    // Constructs the list to be manipulated by the methods you create
    constructor(array){
        this.list = array || null;
        if(array){
            this.len = array.length;
        }else{
            this.len = 0;
        }
    }
    // Methods you can call on the class after you create it.

    // check if the list has a length
    length(){
        return this.len == 0;
    }
}

let newList = new linkedList([2,77]);
console.log(newList.length());