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

    append(val){
        // This adds a new Node to the end of the list replacing the last node as the pointer to null.
        const newNode = new Node(val);
            if(this.size() > 0){
                this.tail().next = newNode;
                this.list.push(newNode);
                this.len++;
                return 'Append Successful!';
            }else{
                this.list = [];
                this.list.push(newNode);
                this.len++;
                return 'Append Successful!';
            }
    }

    at(idx){
        // This method will check for a node at the given index 
        if(this.len > 0){
            if(idx <= this.len -1 && idx >= 0){
                return this.list[idx];
            }else{
                return 'Index invalid!'
            }
        }else{
            return 'List not found!';
        }
    }

    pop(){
        // This method removes the last element from the list and returns it.
        if(this.len > 0){
            let newEnd = this.list[this.len-2];
            newEnd.next = null;
            this.len--;
            return this.list.pop();
        }else{
            return 'List not found!'
        }
    }

    contains(val){
        // This method checks if the value passed is in the list if so returns true else returns false.
        if(this.len > 0){
            for(let i = 0; i < this.len;i++){
                let start = this.list[i];
                if(start.num == val){
                    return true
                }
            }
            return false;
        }else{
            return 'List not found!'
        }
    }

    find(val){
        // This method returns the index the val is at if its in the list else it returns a string saying not found in list.
        if(this.len > 0){
            for(let i = 0; i < this.len ; i++){
                let start = this.list[i];
                if(start.num == val){
                    return i;
                }
            }
            return 'Value not in list!';
        }else{
            return 'List not found!'
        }
    }

    show(){
        // This method will return the linked list as a string something like this (value) -> (value) -> null
        if(this.len > 0){
            let list = '';
            for(let i = 0; i < this.len; i++){
                let start = this.list[i];
                if(start.next == null){
                    return console.log(list + ` ( ${start.num} ) -> ( Null )`);
                }else{
                    list = list + ` ( ${start.num} ) ->`;
                }
            }
        }else{
            return 'List not found!'
        }
    }

    // These are the extra credit methods below!
    inAt(val, idx){
        // This method will insert the value given at the index given in the list.
        if(this.len > 0){
            if(idx > this.len){
                return console.log('Index number to high for the inAt Method! List modification failure occured!');
            }else{
                let left = this.list.splice(0,idx);
                let right = this.list;
                let newNode = new Node(val);
                let lNode = left[left.length-1];
                let rNode;
                if(right.length == 0){
                    rNode = null;
                }else{
                    rNode = right[0];
                }

                if(left.length == 0){
                    newNode.next = rNode;
                    right.unshift(newNode);
                }else{
                    lNode.next = newNode;
                    newNode.next = rNode;
                    right.unshift(newNode);
                }      
                this.list = left.concat(right);
                this.len++;
                return console.log('Insertion completed!')
            }           
        }else{
            return 'List not found!'
        }
    }

    removeAt(idx){
        // This method will remove the node at a given idx if it exists.
        if(this.len > 0){
            if(idx > this.len){
                return console.log('Index given was unavailable in the list! List modifcation failure occured!')
            }else{
                let before = this.list[idx-2];
                let after = this.list[idx];
                let deletion = this.list[idx-1];
                before.next = after;
                this.list.splice(idx,1);
                this.len--;
                return console.log('Deletion Completed!')
            }
        }else{
            return console.log('List was not found!');
        }
    }
}

const newList = new linkedList();
newList.prepend(7);
newList.prepend(13);
newList.prepend(177);
newList.append(15);
newList.append(17);
//console.log(newList.tail());
//console.log(newList.size());
//console.log(newList.head());
//console.log(newList);
//console.log(newList.at(4));
//console.log(newList.pop());
//console.log(newList);
//console.log(newList.contains(17));
//console.log(newList.find(1777))
//newList.show();
//newList.inAt(33,3);
//newList.removeAt(2);
//newList.show();
//console.log(newList.size())
//console.log(newList)
