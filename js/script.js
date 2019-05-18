// variables

var btn = document.querySelector("button");
var email = document.querySelector("input");
var desktopError = document.querySelector(".error2");
var mobileError = document.querySelector(".error1");


	//show error of empty field

	function showError() {
	   
	   
	
		email.classList.add("active");
	
	// add .error1 (for desktop screen), .error2 (for mobile screen)
		
		if (screen.width > 377) {
		
		
			desktopError.style.display = "block";
		
			
			}else {
				
				mobileError.style.display = "block";
				
			}
		
	   }
		

	 btn.addEventListener("click", function() {
		 
		 //check the value of input
		 
		 if (document.forms["submit-your-email"].email.value === "") {
			 
			 showError();
			 
		 }
		 
	 });	


  
   
   
   