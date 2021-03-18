// Progressbar js

UIkit.util.ready(function () {

    var bar = document.getElementById('js-progressbar');

    var animate = setInterval(function () {

        bar.value += 10;

        if (bar.value >= bar.max) {
            clearInterval(animate);
        }

    }, 1000);

});

// Validation js

const form = document.getElementById("myForm");

const text = document.getElementById('text');
const textarea = document.getElementById('textarea');
const select = document.getElementById('select');
const file = document.getElementById('file');
const email    = document.getElementById('email');
const price    = document.getElementById('price');
const search = document.getElementById('search');
const logpro = document.getElementById('logpro');
const user    = document.getElementById('user');
const phone    = document.getElementById('phone');
const image    = document.getElementById('image');
const privacy  = document.getElementById('privacy');
const choose    = document.getElementById('choose');

const textError = document.querySelector('#text + span.uk-text-danger');
const textareaError    = document.querySelector('#textarea + span.uk-text-danger');
const selectError  = document.querySelector('#select + span.uk-text-danger');
const fileError  = document.querySelector('#file + span.uk-text-danger');
const emailError    = document.querySelector('#email + span.uk-text-danger');
const priceError  = document.querySelector('#price + span.uk-text-danger');
const searchError  = document.querySelector('#search + span.uk-text-danger');
const logproError = document.querySelector('#logpro + span.uk-text-danger');
const userError    = document.querySelector('#user + span.uk-text-danger');
const phoneError  = document.querySelector('#phone + span.uk-text-danger');
const imageError  = document.querySelector('#image + span.uk-text-danger');
const privacyError  = document.querySelector('#privacy + span.uk-text-danger');
const chooseError  = document.querySelector('#choose + span.uk-text-danger');

text.addEventListener('input', function (event) {
	if (text.validity.valid) {
		textError.innerHTML = '';
		textError.className = 'uk-text-danger';
	}
	else {showError();}
});

textarea.addEventListener('input', function (event) {
	if (textarea.validity.valid) {
		textareaError.innerHTML = '';
		textareaError.className = 'uk-text-danger';
	}
	else {showError();}
});

select.addEventListener('input', function (event) {
	if (select.validity.valid) {
		selectError.innerHTML = '';
		selectError.className = 'uk-text-danger';
	}
	else {showError();}
});

file.addEventListener('input', function (event) {
	if (file.validity.valid) {
		fileError.innerHTML = '';
		fileError.className = 'uk-text-danger';
	}
	else {showError();}
});

email.addEventListener('input', function (event) {
	if (email.validity.valid) {
		emailError.innerHTML = '';
		emailError.className = 'uk-text-danger';
	}
	else {showError();}
});

price.addEventListener('input', function (event) {
	if (price.validity.valid) {
		priceError.innerHTML = '';
		priceError.className = 'uk-text-danger';
	}
	else {showError();}
});

search.addEventListener('input', function (event) {
	if (search.validity.valid) {
		searchError.innerHTML = '';
		searchError.className = 'uk-text-danger';
	}
	else {showError();}
});

logpro.addEventListener('input', function (event) {
	if (logpro.validity.valid) {
		logproError.innerHTML = '';
		logproError.className = 'uk-text-danger';
	}
	else {showError();}
});

user.addEventListener('input', function (event) {
	if (user.validity.valid) {
		userError.innerHTML = '';
		userError.className = 'uk-text-danger';
	}
	else {showError();}
});

phone.addEventListener('input', function (event) {
	if (phone.validity.valid) {
		phoneError.innerHTML = '';
		phoneError.className = 'uk-text-danger';
	}
	else {showError();}
});

image.addEventListener('input', function (event) {
	if (image.validity.valid) {
		imageError.innerHTML = '';
		imageError.className = 'uk-text-danger';
	}
	else {showError();}
});

privacy.addEventListener('change', function (event) {
	if (privacy.validity.valid) {
		privacyError.innerHTML = '';
		privacyError.className = 'uk-text-danger';
	}
	else {showError();}
});

choose.addEventListener('change', function (event) {
	if (choose.validity.valid) {
		chooseError.innerHTML = '';
		chooseError.className = 'uk-text-danger';
	}
	else {showError();}
});


window.addEventListener("load", function() {

	function sendData() {
		const XHR = new XMLHttpRequest();
		const FD = new FormData(form); //  I drop the FormData object on the form element

		XHR.onreadystatechange = function () {
			var result = document.getElementById("result"); // Recovery id alert
			if (XHR.readyState === 1 || XHR.readyState === 2 || XHR.readyState === 3) {

				result.innerHTML = "<div class=\"uk-animation-slide-bottom-medium\" uk-alert>Sending in progress...</div>";
			}

			if (XHR.readyState === 4 && XHR.status === 200) {
				// var result = document.getElementById("result");
				result.innerHTML = "<div class=\"uk-alert uk-alert-success uk-animation-slide-bottom-medium\" uk-alert><a class=\"uk-alert-close\" uk-close></a>Message sent!</div>";
			}
			else if(XHR.readyState === 4 && XHR.status === 404) {
				//var result = document.getElementById("result");
				result.innerHTML = "<div class=\"uk-alert uk-alert-warning uk-animation-slide-bottom-medium\" uk-alert><a class=\"uk-alert-close\" uk-close></a>Fill in the form correctly!</div>";
			}
			else if(XHR.readyState === 4 && XHR.status !== 200 || XHR.readyState === 4 && XHR.status !== 404) {
				var result = document.getElementById("result");
				document.querySelector('.message').innerHTML = "<div class=\"uk-alert uk-alert-danger uk-animation-slide-bottom-medium\" uk-alert><a class=\"uk-alert-close\" uk-close></a>An error has occurred!</div>";
			}
		};

		XHR.open("POST", "your-form.php"); // I set the request to the server
		XHR.send(FD); // Send the data that the user has entered in the form
	}
	const form = document.getElementById("myForm");

	form.addEventListener("submit", function (event) {
		if(!text.validity.valid) {showError();}
		if(!textarea.validity.valid) {showError();}
		if(!select.validity.valid) {showError();}
		if(!file.validity.valid) {showError();}
        if(!email.validity.valid) {showError();}
		if(!price.validity.valid) {showError();}
        if(!search.validity.valid) {showError();}
		if(!logpro.validity.valid) {showError();}
        if(!user.validity.valid) {showError();}
		if(!phone.validity.valid) {showError();}
        if(!image.validity.valid) {showError();}
		if(!privacy.validity.valid) {showError();}
        if(!choose.validity.valid) {showError();}

		event.preventDefault();
		sendData();
	});
});

function showError() {

    	// Text
	if(text.validity.valueMissing) {
		textError.textContent = 'Required field';
	}
	else if(text.validity.tooLong) {
		textError.textContent = `The field must contain minimum ${text.maxLength} characters; you have inserted ${text.value.length}.`;
	}

    	// Textarea
	if(textarea.validity.valueMissing) {
		textareaError.textContent = 'Required field';
	}
	else if(textarea.validity.tooLong) {
		textareaError.textContent = `The field must contain minimum ${textarea.maxLength} characters; you have inserted ${textarea.value.length}.`;
	}

    // SELECT
	if(! select.checked) {
		selectError.textContent = 'Required field';
	}

    // SELECT FILE
	if(! file.checked) {
		fileError.textContent = 'Required field';
	}

    // E-MAIL
	if(email.validity.valueMissing) {
		emailError.textContent = 'Required field';
	}
	else if(email.validity.typeMismatch || email.validity.patternMismatch) {
		emailError.textContent = 'The field must contain a valid e-mail address';
	}

    // PRICE
	if(! price.checked) {
		priceError.textContent = 'Required field';
	}

    // SEARCH
	if(! search.checked) {
		searchError.textContent = 'Required field';
	}

    // LOGPRO
	if(! logpro.checked) {
		logproError.textContent = 'Required field';
	}

    // USER
	if(! user.checked) {
		userError.textContent = 'Required field';
	}

    // PHONE
	if(! phone.checked) {
		phoneError.textContent = 'Required field';
	}

    // image
	if(! image.checked) {
		imageError.textContent = 'Required field';
	}

    // PRIVACY
	if(! privacy.checked) {
		privacyError.textContent = 'Required field';
	}

	// CHOOSE
	if(! choose.checked) {
		chooseError.textContent = 'Required field';
	}

	// I add the class to show the error
	textError.className = 'uk-text-danger uk-text-small';
	textareaError.className    = 'uk-text-danger uk-text-small';
	selectError.className  = 'uk-text-danger uk-text-small';
	fileError.className  = 'uk-text-danger uk-text-small';
    emailError.className = 'uk-text-danger uk-text-small';
	priceError.className    = 'uk-text-danger uk-text-small';
	searchError.className  = 'uk-text-danger uk-text-small';
	logproError.className  = 'uk-text-danger uk-text-small';
    userError.className = 'uk-text-danger uk-text-small';
	phoneError.className    = 'uk-text-danger uk-text-small';
	imageError.className  = 'uk-text-danger uk-text-small';
	privacyError.className  = 'uk-text-danger uk-text-small';
    chooseError.className  = 'uk-text-danger uk-text-small';
}


// SendRequest js


const btn = document.querySelector('button');

function sendData( data ) {
  console.log( 'Sending data' );

  const XHR = new XMLHttpRequest();

  let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

  // Turn the data object into an array of URL-encoded key/value pairs.
  for( name in data ) {
    urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behavior of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

  // Define what happens on successful data submission
  XHR.addEventListener( 'load', function(event) {
    alert( 'Yeah! Data sent and response loaded.' );
  } );

  // Define what happens in case of error
  XHR.addEventListener( 'error', function(event) {
    alert( 'Oops! Something went wrong.' );
  } );

  // Set up our request
  XHR.open( 'POST', 'http://webintelligence.de/wp-json/' );

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

  // Finally, send our data.
  XHR.send( urlEncodedData );
}

btn.addEventListener( 'click', function() {
  sendData( {test:'ok'} );
} )