/**
 * 
 */
package com.signify.array;

/**
 * @author ALRAHIMA
 *
 */
public class DemoArray {
	//Data type array:
	int arrayOfInt[] = new int[] {2, 3, 5};
    for (int i = 0; i < arrayOfInt.length; i++) {
     System.out.println("The " + i + " element has value  : " + arrayOfInt[i]);
    }
 
    //other syntax 
    
    int arrayOfSalaries[] = null;
    
    arrayOfSalaries = new int[5];
    arrayOfSalaries[0] = 50000;
    arrayOfSalaries[1] = 20000;
    arrayOfSalaries[2] = 30000;
    for (int i = 0; i < arrayOfSalaries.length; i++) {
     System.out.println("The " + i + " salary has value  : " + arrayOfSalaries[i]);
     }
    String names[] = new String[] {"Shakir", "Priyanka", "Sumeet"};
    
    for (int i = 0; i < names.length; i++) {
      System.out.println("The " + i + " name is : " + names[i]);
    }
	
	//Primitive type array
	
	//

}
