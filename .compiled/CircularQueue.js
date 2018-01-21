"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CircularQueue = exports.CircularQueue = function () {
  function CircularQueue(capacity) {
    _classCallCheck(this, CircularQueue);

    this.queue = [];
    this.front = -1;
    this.rear = -1;
    this.size = 0;
    this.capacity = capacity;
  }

  _createClass(CircularQueue, [{
    key: "getSize",
    value: function getSize() {
      return (this.capacity - this.front + this.rear + 1) % this.capacity;
    }
  }, {
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
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }

      var data = this.queue[this.front];
      delete this.queue[this.front];
      this.front = (this.front + 1) % this.capacity;
      this.size--;
      return data;
    }
  }]);

  return CircularQueue;
}();
//# sourceMappingURL=CircularQueue.js.map