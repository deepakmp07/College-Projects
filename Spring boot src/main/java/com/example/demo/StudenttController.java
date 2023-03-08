package com.example.demo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class StudenttController {

	@Autowired
	private StudentRepository employeeRepository;
	
	// get all employees
	@GetMapping("/")
	public List<StudentModel> getAllEmployees(){
		return employeeRepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/")
	public StudentModel createEmployee(@RequestBody StudentModel employee) {
		return employeeRepository.save(employee);
	}
	
	// get employee by id rest api
	@GetMapping("/{id}")
	public ResponseEntity<StudentModel> getEmployeeById(@PathVariable Long id) {
		StudentModel employee = employeeRepository.findById(id)
				.orElseThrow(() -> new StudentService("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}
	
	// update employee rest api
	
	@PutMapping("/{id}")
	public ResponseEntity<StudentModel> updateEmployee(@PathVariable Long id, @RequestBody StudentModel employeeDetails){
		StudentModel employee = employeeRepository.findById(id)
				.orElseThrow(() -> new StudentService("Employee not exist with id :" + id));
		
		employee.setBookName(employeeDetails.getBookName());
		employee.setAuthorName(employeeDetails.getAuthorName());
		employee.setPrice(employeeDetails.getPrice());
		employee.setImg(employeeDetails.getImg());
		
		StudentModel updatedEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}
	
	// delete employee rest api
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		StudentModel employee = employeeRepository.findById(id)
				.orElseThrow(() -> new StudentService("Employee not exist with id :" + id));
		
		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
