// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let prev = linkedList;
  let cur = linkedList.next;
  while (cur) {
    if (prev.value === cur.value) {
      prev.next = cur.next;
      cur = cur.next;
    } else {
      prev = prev.next;
      cur = cur.next;
    }
  }
  return linkedList;
}

//O(N) Time, O(1) Space
