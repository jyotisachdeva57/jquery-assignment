
$(document).ready(function () {


    $('#myform').validate({

  errorClass: "error",
  errorElement: "span",

     // initialize the plugin
        rules: {
        	userGender:{
      required: function() {
        return $('[name="userGender"]:checked').length; 
      }
    },
        	 
   
       phone: { number: true,minlength:10, maxlength:10,required:true},

            field1: {
                required: true,
               
            },
            email: {
                   required: true,
                 email: true
           }
           ,
            cemail: {
         	required:true,
      equalTo: "#email"
    }
        } ,



    errorPlacement: function(error, element) {
            if (element.attr("type") == "radio") {
                error.insertBefore(element);
            } else {
                error.insertAfter(element);
            }
        },
  


 messages :{
 	 userGender: {
      required: "Select a gender"
    },
        field1 : {
            required : 'First Name is required'
        },
         cemail:{
         	required:'re-enter email',
        	equalTo:'addresses dont match'
        },
        phone:{
        	required:'phone required',
        	number:'enter valid phone no',
        	minlength:'enter 10 digit number'
        }
        ,
        email:{
        	required: 'email is required',
        	email:'enter valid email'
        }
       
    }
       
 

    });

});


