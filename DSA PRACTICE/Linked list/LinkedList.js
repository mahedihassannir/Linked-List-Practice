class linkedList {
    constructor(data) {

        this.head = {
            value: data,
            next: null
        };
        this.tail = this.head;
        this.size = 1;
    };

    appendNode = (value) => {
        let newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++
    };

};

let linkedLists = new linkedList(10)
linkedLists.appendNode(20)
linkedLists.appendNode(30)
linkedLists.appendNode(40)
console.log(linkedLists)