var peer;
var myStream;

function register() {
	var name = document.getElementById('name').value;

    try {
        peer = new Peer(name, {host: "server.com", port: "port"});   
        navigator.getUserMedia({video: true, audio: true}, function(stream) {
            myStream = stream;
            document.getElementById('register').style.display = 'none';
            document.getElementById('userAdd').style.display = 'block';

            peer.on('call', function(call) {
                call.answer(myStream); 
                call.on('stream', function(remoteStream) {
                    createVideo(remoteStream);
                });
            });

        }, function(err) {
            console.log('Failed to get local stream' ,err);
        });

    } catch (error) {
        console.error(error);
    }
}
    
function addUser(){
    try {
        var name = document.getElementById('add').value;
        document.getElementById('add').value = "";    

        var call = peer.call(name, myStream);
        call.on('stream', function(remoteStream) {
            createVideo(remoteStream);
        });    
    } catch (error) {
        console.error(error);
    }
}

function createVideo(stream) {
    try {
        var container = document.createElement('div');
        var video = document.createElement('video');

        container.appendChild(video);
        document.getElementById('participants').appendChild(container);
        
        video.autoplay = true;
        video.controls = false;
        video.src = URL.createObjectURL(stream);
    } catch (error) {
        console.error(error);
    }
}
