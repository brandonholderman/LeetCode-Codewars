let Node = function(data) {
    this.data = data
    this.next = null
}

let LinkedList = function() {
    this.head = null
    return {
        append(data) {
            let newNode = new Node(data)
            if (!this.head) {
                this.head = newNode
                return
            }
            
            let current = this.head
            while(current.next) {
                current = current.next
            }

            current.next = newNode
        }
    }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list)