class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        } else {
            this.minStack.push(this.minStack[this.minStack.length - 1]);
        }
    }

    pop() {
        if (!this.stack.length) return null;
        this.minStack.pop();
        return this.stack.pop();
    }

    top() {
        return this.stack.length ? this.stack[this.stack.length - 1] : null;
    }

    getMin() {
        return this.minStack.length ? this.minStack[this.minStack.length - 1] : null;
    }
}
