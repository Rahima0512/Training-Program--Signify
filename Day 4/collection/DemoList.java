/**
 * 
 */
package com.signify.collection;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * @author ALRAHIMA
 *
 */
public class DemoList {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<String> al = new ArrayList<String>();
		   
		   
		// First print the Size of List 
		   
		   // before adding 
		   System.out.println("Initial size of al: " + al.size());
	//It is Creating 
	        al.add("mumbai");
	        al.add("MALE");
	        al.add("NEW YORK");
	        al.add("COLOMBO");
	        al.add("Pune");
	        al.add("Pune");
	        //al.add(32);
	        // After adding the element
	        System.out.println("After Adding  size of al: " + al.size());
	        
	        
	       // remove the collection here 
	        
	        al.remove("COLOMBO");
	        //  al.remove(2);
	          System.out.println("Size of al after deletions: " + al.size());
	          System.out.println("Contents of al: " + al);
	        
	        // Iterable interface 
	          
	          // Iterator is interface which is using to iterate the Collection
	          Iterator<String> i=al.iterator();
	          while(i.hasNext()){
	        	  
	        	  String test=i.next();
	        	  System.out.println("detals of Capital------>" +test);
	          }
		
	          
	    
	          // Another way to iterate the collection using for loop 
	          
	       // Loop through elements.
	             for (String value : al) {
	         	    
	         	    System.out.println("Element: " + value);
	         	}
	          
	}

}
