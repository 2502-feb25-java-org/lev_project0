package com.revature.service;

import java.util.List;

import com.revature.pojos.User;

public class UserService {
	private static List<User> users = new ArrayList<User>();
	
	static
	{
		users.add(new User("genesis", "123", "awesome trainer. she's great"));
		users.add(new User("patrick", "manager", "he manages things"));
	}
	
	public List<User> getAll() {
		return users;
	}
	
	public User getByUsername(String name) {		
		
		return users.stream()
				.filter(u -> u.getUsername().equalsIgnoreCose(name))
				.findFirst()
				.orElse(null);
	}
}
