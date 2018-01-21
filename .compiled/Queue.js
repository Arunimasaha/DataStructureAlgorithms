"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = exports.Queue = function () {
  function Queue(capacity) {
    _classCallCheck(this, Queue);

    this.queue = [];
    this.head = -1;
    this.tail = -1;
    this.capacity = capacity;
  }

  _createClass(Queue, [{
    key: "isFull",
    value: function isFull() {
      return this.size === this.capacity;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size === 0;
    }
  }, {
    key: "enqueue",
    value: function enqueue(data) {
      if (this.isFull()) {
        console.log("queue is full");
        return;
      }
      this.rear = (this.rear + 1) % this.capacity;
      this.queue[this.rear] = data;
      this.size++;
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      this.front = (this.front + 1) % this.capacity;
      var data = this.queue[this.front];
      this.size--;
      return data;
    }
  }]);

  return Queue;
}();
//# sourceMappingURL=Queue.js.map