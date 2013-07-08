var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    },
    
    // setup map
    initMap: function() {
    	
    	// create a map in the "map" div, set the view to a given place and zoom
    	var map = L.map('map').setView([51.505, -0.09], 13);

    	// add an OpenStreetMap tile layer
    	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    	}).addTo(map);

    	// add a marker in the given location, attach some popup content to it and open the popup
    	L.marker([51.5, -0.09]).addTo(map)
    	    .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
    	    .openPopup();
    	
    	
    }
    
};