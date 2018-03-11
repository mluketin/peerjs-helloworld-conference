This is a short hello world example on how to achieve conference call.

HTML page needs to be loaded over HTTPS, and your peerjs server also needs to be behind secure connection.

In index.js replace "server.com" and "port" with actual values. 

I used peerjs-server (https://github.com/peers/peerjs-server) as a server and nodejs for serving html and javascript files.

When you open index.html, input your name.
After another user registers, you can input that user's name and you will be connected with that user.