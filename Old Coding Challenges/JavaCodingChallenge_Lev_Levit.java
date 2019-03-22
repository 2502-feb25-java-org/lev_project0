package com.revature.JavaCodingChallenge_Lev_Levit;

import java.util.ArrayList;
import java.util.Arrays;

public class JavaCodingChallenge_Lev_Levit 
{
	public static void main( String[] args )
    {
		ArrayList<String> words = new ArrayList<String>(Arrays.asList(
				"karan", "madam", "tom", "civic", "radar", "sexes", "jimmy", "kayak", "john", "refer", "billy", "did"));
		
		ArrayList<String> polindromes = new ArrayList<String>();
			
		for (String word : words) {
			String reverse = "";
			for (char c : word.toCharArray()) {
				reverse = c + reverse;
			}
			
			if (word.equalsIgnoreCase(reverse))
					polindromes.add(word);				
		}
		
		System.out.println(polindromes.toString());
    }
}
