 'use strict';

class BinaryTree {
	constructor() {	
		this.root = null;

	}

	insert(data) {
		this.newNode = new Node();
		this.newNode.data = data;
		if(this.root == null){
			this.root = this.newNode;
		}
		else{
			this.current = this.root;
			this.parent = null;
			while(true){
				this.parent = this.current;
				if(data < this.current.data){
					this.current = this.current.left;
					if(this.current == null){
						this.parent.left = this.newNode;
						return;
					} 
				}
				else{
					this.current = this.current.right;
					if(this.current == null){
						this.parent.right = this.newNode;
						return;
					}
				}
			}
		}
	}

	contains(data) {
		this.current = this.root;
		while(this.current.data != data){
			if (data < this.current.data){
				this.current = this.current.left;
			}
			else{
				this.current = this.current.right;
			}
			if(this.current == null){
				return false;
			}
		}
		return true;
	}

	remove(data) {
		this.current = this.root;
		this.parent = this.root;
		this.isLeft = true;
		while(this.current.data != data){
			this.parent = this.current;
			if(data < this.current.data){
				this.isLeft = true;
				this.current = this.current.left;
			}
			else{
				this.isLeft = false;
				this.current = this.current.right;
			}
			if(this.current == null){
				return false;
			}
		}

		if(this.current.left == null && this.current.right == null){
			if(this.current == this.root){
				this.root=null;
			}
			else if(this.isLeft){
				this.parent.left = null;
			}
			else{
				this.parent.right = null;
			}
		}

		else if(this.current.right == null){
			if(this.current == this.root){
				this.root = this.current.left;
			}
			else if(this.isLeft){
				this.parent.left = this.current.left;
			}
			else{
				this.parent.right = this.current.left;
			}
		}

		else if(current.left == null){
			if(this.current == this.root){
				this.root = this.current.right;
			}
			else if(this.isLeft){
				this.parent.left = this.current.right;
			}
			else{
				this.parent.right = this.current.right;
			}
		}

		else{

		}


	}

	size() {

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
		this.successorParent = toRemove;
		this.successor = toRemove;
		this.current = toRemove.right;
		while(this.current != null){
			this.successorParent 
		}
	}
}
