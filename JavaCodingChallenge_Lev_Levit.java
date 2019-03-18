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
			StringBuilder wordSB = new StringBuilder(word);
			if (word.equalsIgnoreCase(wordSB.reverse().toString()))
					polindromes.add(word);				
		}
		
		System.out.println(polindromes.toString());
    }
}
