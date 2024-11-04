// Do triverse operation
// Do dletion
// insertion


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

    deleteNode = (index) => {
        let counter = 1;
        let lead = this.head;
        if (index === 1) {
            lead = this.head.next;
        };
        while (counter < index - 1) {
            lead = lead.next;
            counter++
        };
        let nextNode = lead.next.next;
        lead.next = nextNode;
    };
    insertNode = (index, value) => {
        let currentIndex = 1;
        let currentNode = this.head;
        if (index === 1) {
            this.head = {
                value: value,
                next: currentNode.next
            }
        }
        while (currentIndex < index) {
            currentIndex++;
            currentNode = currentNode.next;
        };
        let nextNode = currentNode.next;
        console.log(nextNode);
        currentNode.next = {
            value: value,
            next: nextNode
        };
        this.size++
    };
};

let linkedLists = new linkedList(10)
linkedLists.appendNode(20)
linkedLists.appendNode(30)
linkedLists.appendNode(40)
// linkedLists.deleteNode()
linkedLists.insertNode(2, 666);
linkedLists.insertNode(1, 111);
console.log(linkedLists)