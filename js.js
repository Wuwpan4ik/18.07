$(document).ready(function(){
	// $('.header-burger').click(function(){
	// 	$('.header-burger-list').toggleClass('active');
	// 	alert("Привет");
	// });
	$('.header__burger').click(function(){
		$('.header__wrapper').slideToggle().toggleClass('active');
		$('.header__burger').toggleClass('active');
		$('body').toggleClass('active');
		});
	$('.drop-down-arrow').click(function(){
		$('.header__form').slideToggle().toggleClass('active');
	});
	$('.filter-list').click(function(){
		$(this).next('.filter-list-wrapper').slideToggle();
		$(this).children('.filter-arrow').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
	});
});
ymaps.ready(init);
function init(){
	var map = new ymaps.Map('map',{
		center: [59.94, 30.32],
		zoom: 13,
		controls: ['zoomControl']
	});


	var placemark = new ymaps.Placemark( [59.94, 30.32],{
		hintContent: '<div class="map-hint"> Инвест торги</div><div class="map-hint-text">Закрыто на вход</div>'
	},
	{
		iconLayout: 'default#image',
		iconImageHref: '../img/AIrplanes.png',
		iconImageSize: [20, 25]
	});
	map.geoObjects.add(placemark);
}