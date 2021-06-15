const { EventEmitter } = require('events');
const event_emitter = new EventEmitter();

event_emitter.on('my_event', (payload)=> {
    console.log('1', payload);
});

event_emitter.on('my_event', (payload)=> {
    console.log('2', payload);

});


event_emitter.emit('my_event', {a:1});