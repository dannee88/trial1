var planeta = [
		{
			name: "Mars",
			distance: "0.000024155306893301653 Light Years from the Sun",
			feature: " Its really Red",
			image:"img/mars.gif"
		},
		{
			name: "Venus",
			distance: "0.0.000011397222266557821 Light Years Years from the Sun",
			feature: " Earths Sister",
			image:"img/venus.gif"
		},
		{
			name: "Earth",
			distance: "0.00001582002493716235 Light Years Years from the Sun",
			feature: " Its really Pretty but the people suck at keeping it cool",
			image:"img/earth.gif"
		},
		{
			name: "Jupiter",
			distance: "0.00008233217279125351  Light Years Years from the Sun",
			feature: " Its really Red",
			image:"img/jupiter.gif"
		},
		{
			name: "Saturn",
			distance: "0.0001505453985955772 Light Years Years from the Sun",
			feature: " Its really Red",
			image:"img/saturn.gif"
		},
		{
			name: "Uranus",
			distance: "0.0003027918751413869 Light Years Years from the Sun",
			feature: " Its really Red",
			image:"img/uranus.gif"
		},
		{
			name: "Neptune",
			distance: "0.00047460074811487044 Light Years Years from the Sun",
			feature: " Its really Red",
			image:"img/neptune.gif"
		},

]

	var input = document.getElementById('planets')
	var myH1 = document.getElementById('planet')
	var myH4 = document.getElementById('distance')
	var myH2 = document.getElementById('feature')
	var img = document.getElementById('photo')

	function find() {
		for (var i = 0; i < planeta.length; i++) {
			if (input.value == planeta[i].name) 
			{
				myH1.innerText = planeta[i].name
				myH4.innerText = planeta[i].distance
				myH2.innerText = planeta[i].feature
				document.getElementById('photo').src = planeta[i].image

				return
			}
		}
		alert("Go Back to your own galaxy!")
	}