/*the lines below are to prevent false errors from jslint or eslint in Brackets*/

/*eslint-disable no-unused-vars*/
/*global $, document, alert, window*/
/*jshint browser: true, unused: false, no-unused-vars: true*/
/*jslint devel: true, node: true, vars: true*/
"use strict"; // required by jslint

/*
File Name: week8.js
Date: 11/17/18
Programmer: Illya King
*/

// The line below is to test your link to the .js file. Please comment it out when it works.
//alert("the link to the .js file is correct!");

// The line below is to test your link to the jquery.min.js file. Please comment it out when it works.
//if (window.jQuery) {alert("the link to the jQuery file is correct!"); }

// Enter your jQuery code below this line (put a blank line first).
$(document).ready(function() {

    //alert("jQuery Code is running");

    var imageFolder = "images/";
    var imageSource 
    var photoCaption 
    
    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").show();
    
    $("h1").text("jQuery Photo Gallery and Menu");
    $("h2").text("Illya King");
    
    $("#bigPhoto").attr("src", imageFolder + "Downtown_Vancouver.jpg");
    
    var thumbNames = ["Downtown_Vancouver_small.jpg", "Esther_Smalls_House_small.jpg", "Fort_Vancouver_small.jpg", "Metal_Statue_small.jpg", "My_House_small.jpg", "The_Kiggins_small.jpg", "Vancouver_Police_small.jpg", "Wacky_Wiener_Man_small.jpg"];
    
    //$.each(thumbNames, function (i) {
    //alert(thumbNames[i]);
    //});
    
    $("img.thumbnail-inner").each(function(i) {
        (this).src = imageFolder + thumbNames[i];
    });
    
    //$('img.thumbnail-inner').on("click", function() {
        //alert("You clicked an image!");
    //});
    
    $("img.thumbnail-inner").on("click", function() {
        $("img").css("opacity", "1");
        $(this).css("opacity",".5"); 
        var imageSource = $(this).attr("src");
        //alert(imageSource);
        imageSource = imageSource.replace("_small", "")
        $("#bigPhoto").attr("src", imageSource);
        var photoCaption = imageSource.replace("images/", "").replace("_", " ").replace("_", " ").replace(".jpg", "");
        $("#caption").text(photoCaption);
    });
    
    $(".cross").on("click", function() {
        $(".menu").slideToggle("slow");
        $(".cross").hide();
        $(".hamburger").show();
    });
    
    $(".hamburger").on("click", function() {
        $(".menu").slideToggle("slow");
        $(".hamburger").hide();
        $(".cross").show();
    });
    
});