# Global Free Chat
Developer: Anthony A. Castor

This Source does not give any warranty please use at your own risk </br>

Global Free Chat is an online chat application... :D </br>

This application is free of virus or malware </br>

<h3>Software Requirment </h3>
nodejs<br/>
ionic v1<br/>
cloud 9<br/>
angular<br/>
bower<br/>

install</br>
bower install angular-socket-io</br>


<h3>Online Application</h3>
Distribution itch(Web and Desktop): https://goo.gl/Wq1nuD </br>
Distribution Google Play: https://goo.gl/uKIIr4 </br>
Distribution Itunes AppStore: https://goo.gl/54yJPi </br>
Distribution Amazon Store: https://goo.gl/RUp1Od </br>
Distribution Windows Store: https://goo.gl/rCxsH6   (No Direct link to Dev Page) </br>
Distribution WearVR: https://goo.gl/y0X1nR  (No Direct link to Dev Page) </br>

<h3>More Information and Demo Videos </h3>
Facebook: https://goo.gl/vvDSIL </br>
Linkedin: https://goo.gl/c9Fh6n </br>
YouTube: https://goo.gl/BFZ7C5 </br>
StackOverFlow: https://goo.gl/J1hFqL </br>
Github: https://goo.gl/jPHFPe </br>

Run </br>
$ nmp install</br>
$ ionic serve</br>
$ ionic serve --l</br>
then got to URL: http://localhost:8100/ionic-lab

add platform</br>
$ ionic platform add ios</br>
$ ionic platform add android</br>
// new version of android SDK in not compatible with cordova</br>
// try to run this if the you get error</br>
$ cordova platform rm android</br>
$ ionic platform add android@6.2.2</br>

build and test</br>
Just to make sure the default project worked, try building and running the project (substitute ios for android to build for Android instead):</br>
$ ionic build ios</br>
$ ionic emulate ios</br>

Test</br>
$ ionic run android</br>

Publishing your app to AppStore or Google play you need to use Xcode or Android studio. i know there is a command for that. but i like to use the editor to build and submit to the online store.</br>

Ionic Creating a page</br>
$ ionic g page myPage</br>

Note</br>
Creating ionic version 1</br>
$ ionic start Projectname blank --v1</br>

//If you get a JVM Error try to change the configuration of this file</br>
platforms\android\cordova\lib\builders\GradleBuilder.js </br>
Change argument -Xmx20484m to 1024 or 512 at line:args.push('-Dorg.gradle.jvmargs=-Xmx1024m'); in your project file </br>

//Git undo where [revision] is the commit hash (for example: 12345678901234567890123456789012345678ab)</br>
$ git checkout [revision] .</br>

//Or Undo this by</br>
$ git reset --hard; </br>

