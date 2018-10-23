class Node{
  constructor(data){
    this.data = data
    this.next =  null
  }
}
class LinkedList{
    constructor(){
        this.head =  null
    }

    insertNode(data){
        if(this.head === null){
            this.head = new Node(data)
        }
        else{
          let currentNode =  this.head
            while(currentNode.next !== null){
                  currentNode = currentNode.next
            }

            currentNode.next = new Node(data)
        }
        return this.head
    }

    searchNode(value){
        let currentNode = this.head

        if(currentNode.data == value){
          return currentNode
        }

        while(currentNode.next){
            if(currentNode.data ==  value){
              return currentNode
            }
            currentNode = currentNode.next
        }
    }

    removeNode(position){
      let currentNode =  this.head
      let previousNode = null

      if(currentNode.data == position ){
          this.head = currentNode.next
          return currentNode
      }

      while(currentNode.next || currentNode.data == position){
        if(currentNode.data == position){
          previousNode.next = currentNode.next
          return currentNode
        }
        previousNode = currentNode
        currentNode = currentNode.next
      }
    }
}