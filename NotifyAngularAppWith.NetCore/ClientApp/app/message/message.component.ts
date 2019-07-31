import { Component, OnInit } from '@angular/core';
//import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import Speech from "speak-tts";


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    //private _hubConnection: HubConnection;
    public msgs: string;
    constructor() { }

    ngOnInit(): void {
        const speech = new Speech();
        speech
            .init({
                volume: 1,
                lang: "hi-IN",//"en-GB",
                rate: 1,
                pitch: 1,
                //'voice':'Google UK English FeMale',
                //'splitSentences': false,
               
            })
            .then(data => {
                console.log("Speech is ready", data);
               
            })
            .catch(e => {
                console.error("An error occured while initializing : ", e);
            });


        //signalR logic
        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl("http://localhost:8840/notify")
            .build();

        connection.start().then(function () {
            console.log('Connected!');
        }).catch(function (err) {
            return console.error(err.toString());
        });

        connection.on("BroadcastMessage", (message: string) => {
            this.msgs = 'Broadcast Name is ' + message;
            speackMessage(speech, this.msgs);

        });
    }
    //ngOnInit(): void {
    //    this._hubConnection = new HubConnection('http://localhost:8840/notify');
    //    this._hubConnection
    //        .start()
    //        .then(() => console.log('Connection started!'))
    //        .catch(err => console.log('Error while establishing connection :('));

    //    this._hubConnection.on('BroadcastMessage', (message: string) => {
    //        this.msgs=message;
    //    });
    //}

}

function speackMessage(speech,message) {
   
    speech.speak({
        text: message,
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e)
    })
}