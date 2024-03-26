class Node {
    constructor(num,next){
        this.num = num || null
        this.next = next || null
    }
}

class linkedList{
    constructor(){
        this.list = null
        this.len = 0
    }

    // Methods below
    size(){
        // This method will return the this.len property to get the size of the list anytime.
        return this.len;
    }

    isList(){
        // This method returns true or false true if it is a list and false if it is null
        return this.len > 0;
    }

    head(){
        // Gets the first node in the list and returns it.
        if(this.list != null){
            return this.list[0];
        }else{ 
            return null;
        }
    }

    tail(){
        // This will return the node that is last in line before null.
        if(this.len > 0){
            //console.log(start);
            for(let i = 0; i < this.len; i++){
                let counter = i;
                let start = this.list[counter];
                if(start.next == null){
                    return start;
                }else{
                    counter++;
                }
            }
        }
    }

    prepend(val){
        // This adds a new node to the front of the list essentially making it the new head.
        const newNode = new Node(val);
            if(this.size() > 0){
                const currNode = this.list[0];
                newNode.next = currNode;
                this.list.unshift(newNode);
                this.len++; 
                return 'prepend successful!';
            }else{
                this.list = [];
                this.list.unshift(newNode);
                this.len++;
                return 'prepend successful!';
            }
    }
}

const newList = new linkedList();
newList.prepend(7);
newList.prepend(13);
newList.prepend(17);
newList.prepend(133);
console.log(newList.tail());
//console.log(newList.size());
//console.log(newList.head());