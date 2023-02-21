package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
	@Value("${name.value}")
	private String name;
	@GetMapping("/")
	public String homepage() {
        return "Welcome to the Student List "+ name;
}
	@GetMapping("/list")
	public List<Student> getlist(){
	 List<Student> details = new ArrayList<>();
	 details.add(new Student(1,"Deepak",1));
	 details.add(new Student(2,"Ajay",2));
	return details;
	}
}
