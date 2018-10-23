class Node{
  constructor(data){
    this.data = data
    this.left = null
    this.right = null
}
}
class BST{
    constructor(){
        this.root = null
    } 
    getRoot(){
        return this.root
    }
    insert(data){
      let newNode =  new Node(data)
        if(this.root === null){
              this.root = newNode
        }
        else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.data <= root.data){
             if(root.left === null){
                 root.left =  newNode
             }
             else{
                  this.insertNode(root.left, newNode)
             }
        }
        else {
          if(root.right === null){
             root.right =  newNode
          }
          else{
               this.insertNode(root.right, newNode)
          }
     }
       
    }

    inorderTraversal(node){
          if(node !== null){
              this.inorderTraversal(node.left)
              console.log(node.data)
              this.inorderTraversal(node.right)
          }
    }

    preTraversal(node){
          if(node !== null){
              console.log(node.data)
              this.preTraversal(node.left)
              this.preTraversal(node.right)
          }
    }

    postTraversal(node){
          if(node !== null){
              this.postTraversal(node.left)
              this.postTraversal(node.right)
              console.log(node.data)
          }
    }
    
    findMin(node){
        if(node === null || node.left ===  null){
              return node
        }

        return this.findMin(node.left)
    }

    findMax(node){
        if(node === null || node.right ===  null){
              return node
        }

        return this.findMax(node.right)
    }

    searchNode(node, data){
      if(node === null){
          return false
      }
      
      if(data < node.data){
          return this.searchNode(node.left,data)
      }
      else if(data > node.data){
        return this.searchNode(node.right,data)
      }
      else{
        return true
      }
    }

    deleteNode(node, data){
        if(node === null){
          return 
        }
        if(data < node.data){
            node.left = this.deleteNode(node.left,data)
        }
        else if(data > node.data){
            node.right = this.deleteNode(node.right,data)
        }
        else{
            if(node.left === null && node.right === null){
                node = null
            }
            else if(node.left ===  null){
                node = node.right
            }
            else if(node.right ===  null){
                node = node.left
            }
            else{
                let tempNode = this.findMin(node.right)
                node.data = tempNode.data
                node.right = this.deleteNode(node.right, tempNode.data)

            }
        }

        return
    }
}