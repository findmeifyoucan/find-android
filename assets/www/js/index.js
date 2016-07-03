/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


document.appUrl = "http://privateIP";

function loadIframe() {
    var html = '<iframe src="' + document.appUrl + '" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe>';
    $("#iframe").html(html);
}

function onOffline() {
    // Handle the offline event
    document.location = "offline.html";
}

function online() {
    url = $(location).attr('href');
    if (!url.match(/index\.html/g)) {
        document.location = "index.html";
    }
}

function checkConnection() {
    var networkState = navigator.connection.type;
    if (Connection.NONE == networkState) {
        document.location = "offline.html";
    }
}




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
                document.addEventListener("offline", onOffline, false);
        document.addEventListener("online", online, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
         checkConnection();
        app.receivedEvent('deviceready');
                window.plugins.PushbotsPlugin.initialize("OUR_PRIVATE_KEY", {
            "android": {
                "sender_id": "OUR_ANDROID_SENDER_ID"
            }
        });
                
            window.plugins.PushbotsPlugin.getRegistrationId(function(token) {
            $("#token").text(token);
            document.appUrl = document.appUrl + "&fuckya=" + token;
            $.get(document.appUrl, function(data) {});
          
        });

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();