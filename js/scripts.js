// jQuery

$( document ).ready(function() {

		$.ajax({
			type: 'GET',
			url: 'http://safraninsound.com/wp/api/get_posts',
			dataType: 'jsonp',
			async: false,
			jsonpCallback: 'jsonCallback',
			success: function(data){
				var jsonobj = eval(data);
				var posts = jsonobj.posts;
				
				$( posts ).each(function( index, value ) {
					var media = value.attachments[0].images.full.url;
					var tag = value.tags[0].title;
					$('.list').append('<div class="row albums">' +
						'<div class="col m4 l4 s12 album-cover">' +
							'<img class="card-panel" src="' + media + '" />' +
						'</div>' +
						'<div class="col m8 l8 s12 album-details">' +
							'<h4>' + tag + '</h4>' +
							'<h2>' + value.title + '</h2>' +
							'<div>' + value.content + '</div>' +
						'</div>' +
					'</div>' 
					);
				});
			}
		});

});