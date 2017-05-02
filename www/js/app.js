// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


angular.module('starter', ['ionic','btford.socket-io'])//, 'btford.socket-io'

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//Chaging the state 
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
   .state('login',{
    url: '/login',
    templateUrl: 'templates/login.html'
   })

   .state('chat',{
    url: '/chat/:nickname',
    templateUrl: 'templates/chat.html'
   });

   $urlRouterProvider.otherwise('/login');
})

.factory('Socket', function (socketFactory) {
  var myIoSocket = io.connect('https://tonyc9-tonyc9.c9users.io/');

  mySocket = socketFactory({
    ioSocket: myIoSocket
  });

  return mySocket;
})

.controller('LoginController', function($scope, $state){
  $scope.join = function(nickname){
    if(nickname){
      $state.go('chat', {nickname:nickname});
    }
  }
})


.controller('ChatController', function($scope,$stateParams, Socket){
  
  $scope.messages=[];
  $scope.nickname = $stateParams.nickname;

  Socket.on("connect", function(){
    $scope.socketId = this.id;
    var data = {
      message: "User has joined!", 
      sender: $scope.nickname, 
      socketId: $scope.socketId, 
      isLog:true
    };
    
    Socket.emit("Message", data);
    
  });

  Socket.on("Message", function(data){
    $scope.messages.push(data);
  })

  $scope.sendMessage = function(){
    var newMessage = {sender: '',message:'', socketId:'', isLog:false};
    newMessage.sender=$scope.nickname;
    newMessage.message= $scope.message;
    newMessage.socketId = $scope.socketId;
    newMessage.isLog = false;

    Socket.emit("Message", newMessage);

  }

})