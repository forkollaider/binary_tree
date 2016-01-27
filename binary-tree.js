 'use strict';

class BinaryTree {
	constructor() {	
		this.root = null;
	}

	insert(data) {
		var newNode = new Node();
		newNode.data = data;
		if(this.root == null){
			this.root = newNode;
		}
		else{
			var current = this.root;
			var parent = null;
			while(true){
				parent = current;
				if(data < current.data){
					current = current.left;
					if(current == null){
						parent.left = newNode;
						return;
					} 
				}
				else{
					current = current.right;
					if(current == null){
						parent.right = newNode;
						return;
					}
				}
			}
		}
	}

	contains(data) {
		var current = this.root;
		while(current.data != data){
			if (data < current.data){
				current = current.left;
			}
			else{
				current = current.right;
			}
			if(current == null){
				return false;
			}
		}
		return true;
	}

	remove(data) {
		var current = this.root;
		var parent = this.root;
		var isLeft = true;
		while(current.data != data){
			parent = current;
			if(data < current.data){
				isLeft = true;
				current = current.left;
			}
			else{
				isLeft = false;
				current = current.right;
			}
			if(current == null){
				return;
			}
		}

		if(current.left == null && current.right == null){
			if(current == this.root){
				this.root=null;
			}
			else if(isLeft){
				parent.left = null;
			}
			else{
				parent.right = null;
			}
		}

		else if(current.right == null){
			if(current == this.root){
				this.root = current.left;
			}
			else if(isLeft){
				parent.left = current.left;
			}
			else{
				parent.right = current.left;
			}
		}

		else if(current.left == null){
			if(current == this.root){
				this.root = current.right;
			}
			else if(isLeft){
				parent.left = current.right;
			}
			else{
				parent.right = current.right;
			}
		}

		else{
			var successor = this.getSuccessor(current);

			if (current == this.root){
				this.root = successor;
			}
			else if(isLeft){
				parent.left = successor;
			}
			else{
				successor.left = parent.right.left;
				parent.right = successor;
			}
		}

		return true;
	}

	size() {
		var number = 0;
		if(this.root != null){
			return this.mySize(this.root);			
	    }	
		return number;
	}
	
	mySize(data){
		var tempLeft, tempRight;
		if (data.left == null && data.right == null){
			return 1;
		}
		if(data.left != null){
			 tempLeft = this.mySize(data.left);
		}
		else{
			tempLeft = 0;
		}
		if(data.right != null){
			tempRight = this.mySize(data.right);
		}
		else{
			tempRight = 0;
		}
		return tempLeft + tempRight + 1;
	}

	isEmpty() {
		if(this.root == null){
			return true;
		}
		else{
			return false;
		}
	}

	getSuccessor(toRemove){
		var successorParent = toRemove;
		var successor = toRemove;
		var current = toRemove.right;
		while(current != null){
			successorParent = successor;
			successor = current;
			current = current.left; 
		}

		if(successor != toRemove.right){
			successorParent.left = successor.right;
			successor.right = toRemove.right;
		}
		return successor;
	}	
}
