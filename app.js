class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return this.first.value;
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0)
        {
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue(){
        if(!this.first)
        return null;
        this.first = this.first.next;
        if(this.length === 1)
        this.last = null;
        this.length--;
    }
}
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);