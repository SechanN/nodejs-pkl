import {EventEmitter} from 'events';

const emmiter = new EventEmitter();

emmiter.addListener("Hai", (name) => {
    console.log(`Hello ${name}`)
})

emmiter.addListener("Halo Juga", (name) => {
    console.log(`Helo Nama kamu ${name}`)
})

emmiter.emit("Helo", "Rayhan")