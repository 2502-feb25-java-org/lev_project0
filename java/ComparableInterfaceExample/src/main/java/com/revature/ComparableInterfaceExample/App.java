package com.revature.ComparableInterfaceExample;
import java.util.ArrayList;
import java.util.Collections;

public class App {	
	public static void main(String[] args) {
		ArrayList<Student> students = new ArrayList<Student>();
		
		students.add(new Student("Bob", 68));
		students.add(new Student("Maria", 28));
		students.add(new Student("Elton", 36));
		
		Collections.sort(students);
		
		// Prints students ordered by age
		for (Student student : students) {
			System.out.println(student.name + " " + student.age);
		}
	}
}
