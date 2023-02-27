package com.signify.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

//This @SpringBootApplication is the annotation which is the entry point of the spring app
//Both annotation @Configuration and @EnableConfiguration are loaded internally are dependent SPring Module

@Configuration
@EnableAutoConfiguration
@ComponentScan("com.signify.*") //This annotation scan all the spring component like Dao,RestController etc
@EnableWebMvc
@SpringBootApplication
public class PracticeSpringProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(PracticeSpringProjectApplication.class, args);
		System.out.println("My First Configure Spring App");
	}

}
