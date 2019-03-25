package com.revature;

//also contains a method to convert decimal into hexadecimal (at the bottom)
public class Driver {
	public static void main(String args[]){
		//tests my LinkedList class
		testLinkedList();
		
		//tests the decimal to integer conversion
		System.out.println(intToHex(111));
	}
	
	public static void testLinkedList() {
		LinkedList<String> list = new LinkedList<String>("First");
		list.addTail("Second");
		list.addTail("Third");
		list.removeTail();
		list.removeTail();	
		list.addHead("Forth");
		System.out.println(list);
	}
	
	public static String intToHex(int decimal) {
		String hex = "";
		int result;
		do {
			result = decimal / 16;
			int remainder = decimal % 16;			
			if (remainder < 10)
				hex = remainder + hex;
			else
				hex = (char)(remainder + 55) + hex;			
			decimal = result;		
		} while (result != 0);	
		return hex;
	}
}
