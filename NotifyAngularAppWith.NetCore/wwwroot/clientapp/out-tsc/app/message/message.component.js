var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
//import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import Speech from "speak-tts";
var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var speech = new Speech();
        speech
            .init({
            volume: 0.5,
            lang: "en-GB",
            rate: 1,
            pitch: 1,
            'voice': 'Google UK English Male',
        })
            .then(function (data) {
            console.log("Speech is ready", data);
        })
            .catch(function (e) {
            console.error("An error occured while initializing : ", e);
        });
        //signalR logic
        var connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl("http://localhost:8840/notify")
            .build();
        connection.start().then(function () {
            console.log('Connected!');
        }).catch(function (err) {
            return console.error(err.toString());
        });
        connection.on("BroadcastMessage", function (message) {
            _this.msgs = 'Broadcast Name is ' + message;
            speackMessage(speech, _this.msgs);
        });
    };
    MessageComponent = __decorate([
        Component({
            selector: 'app-message',
            templateUrl: './message.component.html',
            styleUrls: ['./message.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());
export { MessageComponent };
function speackMessage(speech, message) {
    speech.speak({
        text: message,
    }).then(function () {
        console.log("Success !");
    }).catch(function (e) {
        console.error("An error occurred :", e);
    });
}
//# sourceMappingURL=message.component.js.map