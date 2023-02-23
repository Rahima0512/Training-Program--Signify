/**
 * 
 */
package com.signify.exception;

/**
 * @author ALRAHIMA
 *
 */
public class DemoException {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
		int a=10,b=0,c;
		
		c=a/b;
		System.out.println("Value of c: "+c);
		
		
		}
		catch(Exception ex)
		{
			System.out.println("Exception raised because of arithematic operation"+ex.getMessage());
		}

	}

}
