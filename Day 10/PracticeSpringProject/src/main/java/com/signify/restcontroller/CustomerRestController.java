/**
 * 
 */
package com.signify.restcontroller;

import javax.ws.rs.core.MediaType;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.signify.bean.Customer1;

/**
 * @author ALRAHIMA
 *
 */
@RestController
public class CustomerRestController {
	
	//This is normal general method generating String
	

	
	@GetMapping("/hello-world")
	public String helloWorld() {
		
		
		return "Hello World";
	}
	

			//This method return the java object convert into JSON
	//This RequestMapping method contain produce value and method
	//@method-GET,POST,PUT and DELETE
	//@PRODUCE AND @CONSUME is the conversion of Object with JSON or XML
	//Value should be URL and UR
	@RequestMapping(produces = MediaType.APPLICATION_JSON, 
		    method = RequestMethod.GET,
		    value = "/details")
		@ResponseBody
	 public Customer1 details(){
		
		Customer1 c1=new Customer1();
		c1.setId (101);
		c1.setName("Rahima");
		c1.setAddress("Ghaziabad");
		
		
			
		
		return c1;

}
}
