package com.revature;

class Node<T> {
	T item;
	Node<T> next;
	
	Node() {
		item = null;
		next = null;
	}
	
	Node(T item) {
		this.item = item;
		next = null;
	}
}

public class LinkedList<T> {
	private Node<T> head;
	
	public LinkedList() {
		head = null;	
	}
	
	public LinkedList(T item) {
		head = new Node<T>(item);
	}
	
	public void addHead(T item) {
		Node<T> next = head;
		head = new Node<T>(item);
		head.next = next;
	}
	
	public void removeHead() {
		head = head.next;
	}
	
	public void addTail(T item) {
		Node<T> node = head;
		Node<T> tail = new Node<T>(item);
		while (node.next != null) {
			node = node.next;
		}
		node.next = tail;
	}
	
	public void removeTail() {
		Node<T> node = head;
		while (node.next.next != null) {
			node = node.next;
		}
		node.next = null;
	}
	
	public String toString() {
		Node<T> node = head;
		String string = "";
		while (node != null) {
			string += node.item.toString() + " ";
			node = node.next;
		}
		return string;
	}
}
