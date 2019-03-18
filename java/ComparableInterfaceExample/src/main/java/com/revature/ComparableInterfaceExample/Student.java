package com.revature.ComparableInterfaceExample;

public class Student implements Comparable<Student> {
	String name;
	int age;

	Student(String name, int age) {
		this.name = name;
		this.age = age;
	}
	
	@Override
	public int compareTo(Student otherStudent) {
		if (this.age == otherStudent.age)
			return 0;
		else if (this.age > otherStudent.age)
			return 1;
		else
			return -1;
	}
}
