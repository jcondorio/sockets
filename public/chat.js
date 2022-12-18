const socket=io()

//dom
let messaje=document.getElementById('messaje');
let username=document.getElementById('username');
let btn=document.getElementById('send');
let output=document.getElementById('output');
let actions=document.getElementById('actions');

btn.addEventListener('click',function(){
    socket.emit('chat:message',{
        messaje: messaje.value,
        username: username.value,

    });
    console.log('click');
});

socket.on('chat:message',function(data){
    output.innerHTML=`<p><strong>${data.username}</strong>:${data.messaje}</p>`;
});