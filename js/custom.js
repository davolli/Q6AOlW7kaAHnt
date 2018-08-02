(function($) { "use strict"; 
	// Nav Menu Hover Script
	$('ul.nav li.dropdown').on('hover', function() {
	  $(this).find('.dropdown-menu').stop(true, true).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).fadeOut(500);
	});


	// hamburger menu icons
	$('.navbar-toggler').on('click', function(){
	   $(this).toggleClass('active');
	});


 // Initialize Firebase
 var config = {
	 apiKey: "AIzaSyCSoKIgYnU--pJ4yuuIZTRXmr6rAtP12Hs",
	 authDomain: "nauru-3732.firebaseapp.com",
	 databaseURL: "https://nauru-3732.firebaseio.com",
	 projectId: "nauru-3732",
	 storageBucket: "nauru-3732.appspot.com",
	 messagingSenderId: "1022746095510"
 };
 firebase.initializeApp(config);

 function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function fazerPedido(){
	//TogglePublicar()
	//let nomeSite = $("#inputnome").val()
	var pedido = {
		cod : $("#inputcod").val(),
		nome : $("#inputnome").val(),
		email : $("#inputemail").val(),
		dados : $("#inputdados").val(),
	}
	var uid = new ShortUniqueId()
	let geUid = uid.randomUUID(13)
	$(".details-right").css('display', 'none')
	$("#facapedido").text('enviando...')
	firebase.database().ref('v1/pedidos/capas/' + geUid ).set(pedido)
	.then(function (){
		//$("#publicado").toggleClass('displayNone')
		//$("#progressPublicar").toggleClass('displayNone')
		$("#facapedido").text('Pedido enviado, aguarde!')

	})
}

$('#enviarPedido').on('click', function(){
	fazerPedido();
});

	
})(jQuery);