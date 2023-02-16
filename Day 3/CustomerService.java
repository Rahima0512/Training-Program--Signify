/**
 * 
 */
package com.signify.demo;

import com.signify.bean.Customer;

/**
 * @author ALRAHIMA
 *
 */
public class CustomerService {
	// Declaring the Array for Customer Operation with 3 Record 
		// Custome Array 
		
		  Customer myCustomers[]=new Customer[] {new Customer(), new Customer(), new Customer()};
		
			
		// customer operations 
		
		// Add customer 
		
		//Customer customerOne=new Customer();
		//Customer customerTwo=new Customer();
		
		// implementation of first method here with hard coded object 
		public void createCustomer() {
			
			System.out.println("customer is created ");
			// create the bean class object 
			
		    // Record 1
		/*	customerOne.setCustomerId(101);
			customerOne.setCustomerName("Rahima");
			customerOne.setCiustomerAddress("blore");
			
			// Record 2
			customerTwo.setCustomerId(102);
			customerTwo.setCustomerName("Vijji");
			customerTwo.setCiustomerAddress("delhi");
			*/
			
			// first Record insert in first subscript 
			
			myCustomers[0].setCustomerId(101);
			myCustomers[0].setCustomerName("Rahima");
			myCustomers[0].setCustomerAddress("GZB");
			
			
			// Second Record 
			myCustomers[1].setCustomerId(102);
			myCustomers[1].setCustomerName("Vijji");
			myCustomers[1].setCustomerAddress("blore");
			
			//Third REcord 
			
			myCustomers[2].setCustomerId(102);
			myCustomers[2].setCustomerName("Humaira");
			myCustomers[2].setCustomerAddress("delhi");
	}
	public void deleteCustomer(int customerId)
	{
		System.out.println("deleteCustomer");
	}
	public void updateCustomer(int customerId)
	{
		System.out.println("update");
	}
	public void listCustomer()
	{
//		System.out.println("list");
//		System.out.println("Details of customer-->" +customerOne.getCustomerId() +" - " +customerOne.getCustomerName() +" - " +customerOne.getCustomerAddress());
//		System.out.println("Details of customer-->" +customerTwo.getCustomerId() +" - " +customerTwo.getCustomerName() +" - " +customerTwo.getCustomerAddress());
//		
		// New way to define the loop in java 
			for(Customer customer : myCustomers) {
				
				System.out.println("details list of Customer is -->" +customer.getCustomerId() +"-" +customer.getCustomerName() + "-" +customer.getCustomerAddress());
			}
		
		
		
		
	}
	

}
