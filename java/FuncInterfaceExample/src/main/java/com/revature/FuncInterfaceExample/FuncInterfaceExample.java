package com.revature.FuncInterfaceExample;

public class FuncInterfaceExample 
{
	@FunctionalInterface
	interface Printable {
		void print(String s);
	}
	
	public static void main( String[] args )
    {
        Printable printObj = s -> System.out.println(s);
        printObj.print("Test"); // Prints 'Test' to console
    }
}
