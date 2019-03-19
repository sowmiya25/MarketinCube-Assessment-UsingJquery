$(document).ready(function () {
// Contact Form Validation
    $('#contact-form').validate({ 
        rules: {
            fname: {
                required: true,
                lettersonly: true,
                minlength: 2
            },
            lname: {
                required: true,
                lettersonly: true,
                minlength: 2,
            },
            email: {
                required: true,
                email: true
            },
            state: {
                required: true
            },
            onsubmit: false
        },
        submitHandler: function(form) {
            $('#contact-form').append('<div class="alert alert-primary confirmation-message" role="alert">You details have been submitted successfully. Thank You</div>')
            $('.confirmation-message').delay(3000).fadeOut('fast');
            form.reset();
            return false;
            
        },
    });

    //Function to check only letters entered
    jQuery.validator.addMethod("lettersonly", function(value, element) {
	  return this.optional(element) || /^[a-z]+$/i.test(value);
	}, "Please enter only letters"); 

});