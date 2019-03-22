package com.revature.FuncInterfaceExample;

public class FuncInterfaceExample 
{
	@FunctionalInterface
	interface Printable {
		int print(int x);
	}
	
	public static void main( String[] args )
    {
        Printable printObj = x -> x + x;
        Printable printObj2 = x -> x * x;
        System.out.println(printObj.print(5)); // Prints 'Test' to console
        System.out.println(printObj2.print(5));
    }
}
