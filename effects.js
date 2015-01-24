var mSecs = 599;
var mm = 69; 
var fadyTo = 100;
var opo = 0.19;
var reg = 1;
var bKfO = 0;
var scrl = " Welcome to the Official OSO VIVID RECORDS WebSpot! Designed by hard focus and love for process. // ";
var Counter = 0;
var imgs = [];
imgs[0] = '/images/osovivid/ColoradoLight.jpg';
imgs[1] = '/images/osovivid/ColoradoLight1.jpg';
imgs[2] = '/images/osovivid/ColoradoLight2.jpg';
imgs[3] = '/images/osovivid/ColoradoLight3.jpg';
imgs[4] = '/images/osovivid/ColoradoLight4.jpg';
imgs[5] = '/images/OHQTUP.jpg';
imgs[6] = '/images/osovivid/ColoradoLight.jpg';
var index = 0;
 
function theShows() {
        $("area[rel^='prettyPhoto']").prettyPhoto();
		$("a[rel^='prettyPhoto']").prettyPhoto();
		$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true});
		$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
}

function justCount() {
    // var obj = document.getElementById('countingText');
	var randomURL = imgs[index];
        // obj.innerHTML = Counter + ' ' + randomURL + ' ' + index  + ' ' + imgs.length*1;
	Counter++;	
        if (Counter > 10){
		index++;
                Counter = 0;
		randomURL = imgs[index];
		$("#fakeBack").css({"background-image":"url(" + randomURL + ")","z-index":"-1000","width":"100vw", "height":"100vh","background-size":"100vw 100vh"});
                if (index>=(imgs.length*1)-1) {
			index=1;
                        $("#fakeBack").css({"background-image":"url(" + randomURL + ")","z-index":"-1000","width":"100vw", "height":"100vh","background-size":"100vw 100vh"});   
		}
	}
	
}

function startCounting() {
	setInterval(function() {justCount()}, 1000);
}


function clearCoords() {
	
	document.getElementById('MM_GTMT').coords = '0,0,0,0';
	document.getElementById('MM_GTMT').href = " ";
    $("#MM_GTMT").attr("hovertext", " ");
	document.getElementById('MM_GTV').coords = '0,0,0,0';
	document.getElementById('MM_GTV').href = " ";
    $("#MM_GTV").attr("hovertext", " ");
    document.getElementById('MM_THIRD').coords = '0,0,0,0';
	document.getElementById('MM_THIRD').href = " ";
	$("#MM_THIRD").attr("hovertext", " ");
	document.getElementById('MM_FOURTH').coords = '0,0,0,0';
	document.getElementById('MM_FOURTH').href = " ";
	$("#MM_FOURTH").attr("hovertext", " ");
	document.getElementById('MM_FIFTH').coords = '0,0,0,0';
	document.getElementById('MM_FIFTH').href = " ";
	$("#MM_FIFTH").attr("hovertext", " ");
    $("#Photo").attr("hovertext", "Click Here to View Photo's of OSO VIVID Representatives.");
    $("#formMail").css("visibility","hidden");
    $(".calendarWrap").css("visibility","hidden");
    $(".payPal").css("visibility","hidden");
        $("#flashPlayer").css("visibility","hidden");
        $("#exitMusic").css("visibility","hidden");
        $(".PhotoDiv").css("visibility","hidden");
}

function clearCoords2() {
	
	document.getElementById('MM_GTMT').coords = '0,0,0,0';
	document.getElementById('MM_GTMT').href = " ";
    $("#MM_GTMT").attr("hovertext", " ");
	document.getElementById('MM_GTV').coords = '0,0,0,0';
	document.getElementById('MM_GTV').href = " ";
    $("#MM_GTV").attr("hovertext", " ");
    document.getElementById('MM_THIRD').coords = '0,0,0,0';
	document.getElementById('MM_THIRD').href = " ";
	$("#MM_THIRD").attr("hovertext", " ");
	document.getElementById('MM_FOURTH').coords = '0,0,0,0';
	document.getElementById('MM_FOURTH').href = " ";
	$("#MM_FOURTH").attr("hovertext", " ");
	document.getElementById('MM_FIFTH').coords = '0,0,0,0';
	document.getElementById('MM_FIFTH').href = " ";
	$("#MM_FIFTH").attr("hovertext", " ");
    $("#Photo").attr("hovertext", "Click Here to View Photo's of OSO VIVID Representatives.");
    $("#formMail").css("visibility","hidden");
    $(".payPal").css("visibility","hidden");
}

function setCoordsForMM() {
    
	document.getElementById('MM_GTMT').coords = '114,322,251,355';
	document.getElementById('MM_GTMT').shape = 'rect';
	$("#MM_GTMT").attr({
		hovertext: "Click here to see the mixtapes provided by KG Hunid.",
		href: "http://kghunid.bandcamp.com"
	});
    document.getElementById('MM_THIRD').coords = '100,182,228,230';
	document.getElementById('MM_THIRD').shape = 'rect';
	$("#MM_THIRD").attr({
		hovertext: "Click here to see the mixtapes provided by Elmer Demond.",
		href: "http://elmerdemond.bandcamp.com"
	});
	document.getElementById('MM_GTV').coords = '265,219,397,255';
	document.getElementById('MM_GTV').shape = 'rect';
	$("#MM_GTV").attr({
		hovertext: "Click here to see our Music Video Library.",
		href: "http://www.youtube.com/osovividrecords"
	});
}

function setContCoords() {
	document.getElementById('MM_GTMT').coords = '100,192,397,342';
	document.getElementById('MM_GTMT').href = "mailto:info@osovividrecords.com?subject=Whats%20Going%20Down";
	$("#MM_GTMT").attr("hovertext", "Send an Email to OSO VIVID Staff");
	document.getElementById('MM_GTV').coords = '0,0,0,0';
	document.getElementById('MM_GTV').href = " ";
	$("#MM_GTV").attr("hovertext", " ");
	document.getElementById('MM_THIRD').coords = '0,0,0,0';
	document.getElementById('MM_THIRD').href = " ";
	$("#MM_THIRD").attr("hovertext", " ");
}

function setElmCoords() {
	
	document.getElementById('MM_GTMT').coords='118,150,198,246';
	document.getElementById('MM_GTMT').shape='rect';
	document.getElementById('MM_GTMT').href="http://www.elmerdemond.com";
	$("#MM_GTMT").attr("hovertext", "Click Here to visit Elmer Demond's homepage.");
	document.getElementById('MM_GTV').coords='210,150,303,243';
	document.getElementById('MM_GTV').href = "https://www.facebook.com/pages/ElmerDemond/355565794492207";
	$("#MM_GTV").attr("hovertext", "Click Here to visit Elmer Demond's Facebook Page.");
    document.getElementById('MM_THIRD').coords = '310,150,397,245';
	document.getElementById('MM_THIRD').href = "https://twitter.com/elmerdemond";
	$("#MM_THIRD").attr("hovertext", "Click Here to go to Elmer Demond's Twitter Page.");
	document.getElementById('MM_FOURTH').coords='156,252,247,342';
	document.getElementById('MM_FOURTH').href = "https://www.youtube.com/elmerdemond";
	$("#MM_FOURTH").attr("hovertext", "Click Here to visit Elmer Demond's YouTube Channel.");
    document.getElementById('MM_FIFTH').coords = '263,252,355,337';
	document.getElementById('MM_FIFTH').href = "http://instagram.com/elmerdemond";
	$("#MM_FIFTH").attr("hovertext", "Click Here to go to Elmer Demond's Instagram Page.");
}

function setPhotoCoords() {
	
	document.getElementById('Photo').coords='708,5,787,42';
	document.getElementById('Photo').shape='rect';
	$("#Photo").attr("hovertext", "Click Here to Head back to the homepage.");
	document.getElementById('MM_GTV').coords='0,0,0,0';
	document.getElementById('MM_THIRD').coords = '0,0,0,0';
	document.getElementById('MM_THIRD').href = " ";
	$("#MM_THIRD").attr("hovertext", " ");
}

function setKGCoords() {
    
	document.getElementById('MM_GTMT').coords='118,150,198,246';
	document.getElementById('MM_GTMT').shape='rect';
	document.getElementById('MM_GTMT').href="http://kghunid.bandcamp.com/";
	$("#MM_GTMT").attr("hovertext", "Click Here to experience KG HUNID's Music.");
	document.getElementById('MM_GTV').coords='210,150,303,243';
	document.getElementById('MM_GTV').href = "https://www.soundcloud.com/kghunid";
	$("#MM_GTV").attr("hovertext", "Click Here to visit KG HUNID's SoundCloud Page.");
    document.getElementById('MM_THIRD').coords = '310,150,397,245';
	document.getElementById('MM_THIRD').href = "https://twitter.com/kghunid";
	$("#MM_THIRD").attr("hovertext", "Click Here to go to KG HUNID's Twitter Page.");
	document.getElementById('MM_FOURTH').coords='156,252,247,342';
	document.getElementById('MM_FOURTH').href = "https://www.youtube.com/osovividrecords";
	$("#MM_FOURTH").attr("hovertext", "Click Here to visit OSO VIVID's YouTube Channel.");
    document.getElementById('MM_FIFTH').coords = '263,252,355,337';
	document.getElementById('MM_FIFTH').href = "http://instagram.com/kghunid";
	$("#MM_FIFTH").attr("hovertext", "Click Here to go to KG HUNID's Instagram Page.");
}

function move_div() { 
    window_width = $(window).width();
	window_height = $(window).height();

	obj_width = $('.verycenter').width();
        obj_width2 = $('.vcenter').width();
        obj_width3 = $('.PhotoDiv').width();
	obj_height = $('.verycenter').height();
        obj_height2 = $('.vcenter').height();
        obj_height3 = $('.PhotoDiv').height();

	$('.verycenter').css('top',(window_height/2)-(obj_height/2)).css('left',(window_width/2)-(obj_width/2));
    $('.vcenter').css('top',(window_height/2)-(obj_height2/2)).css('left',(window_width/2)-(obj_width2/2));
    $('.PhotoDiv').css('top',(window_height/2)-(obj_height3/2)).css('left',(window_width/2)-(obj_width3/2));
    $('#formMail').css('top',(window_height/2)-(obj_height2/2)).css('left',(window_width/2)-(obj_width2/2));
}

function goToKG() {
        clearCoords();
	if (bKfO===0) {
		document.title = "OSO VIVID RECORDS | ARTIST | KG HUNID";

		$("#loadPhotoz").html("<img id='SeventhBkimg' class='verycenter' usemap='#mainMap2' src='images/KG.png' border='0' style='z-index:106;' />");
		$("#loadPhotoz2").html(" ");
		$("#loadPhotoz2").css("z-index", "0");
		move_div();
		setKGCoords();
		$("#FrstBkimg").fadeTo(fadyTo, reg, function() {
			$("#ThrdBkimg").fadeTo(fadyTo, opo, function() {
				$("#FifthBkimg").fadeTo(fadyTo, opo, function() {
					$("#SeventhBkimg").fadeIn(mSecs);			
				});
			});
		});
		bKfO=1;
	}
	else if (bKfO==2 || bKfO==3 || bKfO==4 || bKfO==5 || bKfO==6 || bKfO==7 || bKfO==8) {
		document.title = "OSO VIVID RECORDS | ARTIST | KG HUNID";
		$("#loadPhotoz").html("<img id='SeventhBkimg' class='verycenter' usemap='#mainMap2' src='images/KG.png' border='0' style='z-index:106;' />");
		$("#loadPhotoz2").html(" ");
                $("#loadPhotoz2").css("z-index", "0");
		move_div();
		setKGCoords();
		$("#SeventhBkimg").fadeIn(mSecs);
		bKfO=1;
	}
	else if (bKfO==1) {
		document.title = "OSO VIVID RECORDS | HOME";
		move_div();
		clearCoords();
		$("#SeventhBkimg").fadeOut(100, function() {
			$("#ThrdBkimg").fadeTo(fadyTo, reg, function() {
				$("#FifthBkimg").fadeTo(fadyTo, reg, function() {
					$("#FrstBkimg").fadeTo(mSecs, reg);		
					$("#SeventhBkimg").hide();
				});
			});
		});
		$("#loadPhotoz2").html(" ");
		$("#loadPhotoz").html(" ");
		bKfO=0;
	}
}

function goToElm() {
        clearCoords();
	if (bKfO===0) {
		document.title = "OSO VIVID RECORDS | ARTIST | ELMER DEMOND";
		$("#loadPhotoz").html("<img id='SeventhBkimg' class='verycenter' usemap='#mainMap2' src='images/Elm.png' border='0' style='z-index:106;' />");
		$("#loadPhotoz2").html(" ");
		setElmCoords();
		move_div();
		$("#FrstBkimg").fadeTo(fadyTo, reg, function() {
			$("#ThrdBkimg").fadeTo(fadyTo, opo, function() {
				$("#FifthBkimg").fadeTo(fadyTo, opo, function() {
					$("#SeventhBkimg").fadeIn(mSecs);			
				});
			});
		});
		bKfO=2;
	}
	else if (bKfO==1 || bKfO==3 || bKfO==4 || bKfO==5 || bKfO==6 || bKfO==7 || bKfO==8) {
		document.title = "OSO VIVID RECORDS | ARTIST | ELMER DEMOND";
		$("#loadPhotoz").html("<img id='SeventhBkimg' class='verycenter' usemap='#mainMap2' src='images/Elm.png' border='0' style='z-index:106;' />");
		$("#loadPhotoz2").html(" ");
		setElmCoords();
		move_div();
		$("#SeventhBkimg").fadeIn(mSecs);
		bKfO=2;
	}
	else if (bKfO==2) {
		document.title = "OSO VIVID RECORDS | HOME";
		move_div();
		clearCoords();
		$("#SeventhBkimg").fadeOut(100, function() {
			$("#ThrdBkimg").fadeTo(fadyTo, reg, function() {
				$("#FifthBkimg").fadeTo(fadyTo, reg, function() {
					$("#FrstBkimg").fadeTo(mSecs, reg);	
				});
			});
		});
		$("#loadPhotoz2").html(" ");
		$("#loadPhotoz").html(" ");		
		bKfO=0;
	}
}

function goToMzkMedia() {
        clearCoords();
	if (bKfO===0) {
		document.title = "OSO VIVID RECORDS | MUSIC & MEDIA";
		$("#loadPhotoz").html("<img id='SeventhBkimg' class='verycenter' usemap='#mainMap2' src='images/MzkMedia.png' border='0' style='z-index:2;' />");
		$("#loadPhotoz2").html(" ");
		move_div();
		setCoordsForMM();
        $("#flashPlayer").css("visibility","hidden");
        $("#exitMusic").css("visibility","hidden");
		$("#FrstBkimg").fadeTo(fadyTo, reg, function() {
			$("#ThrdBkimg").fadeTo(fadyTo, opo, function() {
				$("#FifthBkimg").fadeTo(fadyTo, opo, function() {
					$("#SeventhBkimg").fadeIn(mSecs);			
				});   
			});
		});
		bKfO=3;
	}
	else if (bKfO==1 || bKfO==2 || bKfO==4 || bKfO==5 || bKfO==6 || bKfO==7 || bKfO==8) {
		bKfO=3;
		document.title = "OSO VIVID RECORDS | MUSIC & MEDIA";
		$("#loadPhotoz").html("<img id='SeventhBkimg' class='verycenter' usemap='#mainMap2' src='images/MzkMedia.png' border='0' style='z-index:2;' />");
		$("#loadPhotoz2").html(" ");
		move_div();
		setCoordsForMM();
		$("#SeventhBkimg").fadeIn(mSecs);
        $("#flashPlayer").css("visibility","hidden");
        $("#exitMusic").css("visibility","hidden");
		bKfO=3;
	}
	else if (bKfO==3) {
		document.title = "OSO VIVID RECORDS | HOME";
		move_div();
		clearCoords();
		$("#SeventhBkimg").fadeOut(100, function() {
			$("#ThrdBkimg").fadeTo(fadyTo, reg, function() {
				$("#FifthBkimg").fadeTo(fadyTo, reg, function() {
					$("#FrstBkimg").fadeTo(mSecs, reg);		
				});
			});
		});
		$("#loadPhotoz2").html(" ");
		$("#loadPhotoz").html(" ");
		bKfO=0;
	}
}

function goToCont() {
        clearCoords();
	if (bKfO===0) {
		document.title = "OSO VIVID RECORDS | CONTACT US";
		$("#loadPhotoz").html(" ");
		$("#loadPhotoz2").html(" ");
		move_div();
		$("#FrstBkimg").fadeTo(fadyTo, reg, function() {
			$("#ThrdBkimg").fadeTo(fadyTo, opo, function() {
				$("#FifthBkimg").fadeTo(fadyTo, opo, function() {
                                        $("#formMail").css("visibility","visible").css("z-index","110");
                                        $("#formMail").draggable();
                                        $("#Cont").attr("hovertext", "Click Here to Return to the Main Page.");
				}); 
			});
		});
		bKfO=4;
	}
	else if (bKfO==1 || bKfO==2 || bKfO==3 || bKfO==5 || bKfO==6 || bKfO==7 || bKfO==8) {
		document.title = "OSO VIVID RECORDS | CONTACT US";
        $("#loadPhotoz").html(" ");
		$("#loadPhotoz2").html(" ");
		move_div();
        $("#formMail").css("visibility","visible").css("z-index","110");
        $("#formMail").draggable();
        $("#Cont").attr("hovertext", "Click Here to Return to the Main Page.");
		bKfO=4;
	}
	else if (bKfO==4) {
		document.title = "OSO VIVID RECORDS | HOME";
		move_div();
		clearCoords();
        $("#formMail").css("visibility","hidden");
        $("#Cont").attr("hovertext", "Click Here to contact us.");
		$("#ThrdBkimg").fadeTo(fadyTo, reg, function() {
            $("#FifthBkimg").fadeTo(fadyTo, reg, function() {
                $("#FrstBkimg").fadeTo(mSecs, reg);
            });
        });
		$("#loadPhotoz2").html(" ");
		$("#loadPhotoz").html(" ");
		bKfO=0;
	}
}

function goToPhoto() {
        clearCoords();
	if (bKfO===0) {
		document.title = "OSO VIVID RECORDS | PHOTO GALLERY";
        setPhotoCoords();
		$("#loadPhotoz").html(" ");
		$("#loadPhotoz2").html(" ");
		$(".PhotoDiv").css("visibility", "visible");
		theShows();
		$("#FrstBkimg").fadeTo(fadyTo, reg, function() {
			$("#ThrdBkimg").fadeTo(fadyTo, opo, function() {
				$("#FifthBkimg").fadeTo(fadyTo, opo, function() {
					$("#LoaderBkimg").fadeIn(mSecs, function() {
						$("#LoaderBkimg").fadeOut(mSecs, function() {
							$("#EighthBkimg").fadeIn(mm, function() {
								$("#NinthBkimg").fadeIn(mm, function() {
									$("#TenthBkimg").fadeIn(mm, function() {
										$("#EleventhBkimg").fadeIn(mm, function() {
											$("#TwelfthBkimg").fadeIn(mm, function() {
												$("#ThirteenthBkimg").fadeIn(mm, function() {
													$("#FourteenthBkimg").fadeIn(mm, function() {
														$("#FifteenthBkimg").fadeIn(mm, function() {
															$("#SixteenthBkimg").fadeIn(mm, function() {
																$("#SeventeenthBkimg").fadeIn(mm, function() {
																	$("#EighteenthBkimg").fadeIn(mm, function() {
																		$("#NineteenthBkimg").fadeIn(mm, function() {
																			$("#TwentiethBkimg").fadeIn(mm, function() {
																				$("#Twenty-FirstBkimg").fadeIn(mm, function() {
																					$("#Twenty-SecondBkimg").fadeIn(mm, function() {
																						$("#Twenty-ThirdBkimg").fadeIn(mm, function() {
																							$("#Twenty-FourthBkimg").fadeIn(mm, function() {
																								$("#Twenty-FifthBkimg").fadeIn(mm, function() {
																									$("#Twenty-SixthBkimg").fadeIn(mm, function() {
																										$("#Twenty-SeventhBkimg").fadeIn(mm, function() {
																											$("#Twenty-EighthBkimg").fadeIn(mm);
																										});
																									});
																								});
																							});
																						});
																					});
																				});
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});	
		bKfO=5;
        $("#fakeBack").click(function() {
            clearPhoto();
            $("#loadPhotoz2").html(" ");
            $("#loadPhotoz").html(" ");
			$("#loadPhotoz2").css("z-index", "0");
            $(".PhotoDiv").css("visibility", "hidden");
		});
        move_div();
	}
	else if (bKfO==1 || bKfO==2 || bKfO==3 || bKfO==4 || bKfO==6 || bKfO==7 || bKfO==8) {
		document.title = "OSO VIVID RECORDS | PHOTO GALLERY";
		setPhotoCoords();
		$("#loadPhotoz").html(" ");
		$("#loadPhotoz2").html(" ");
		$(".PhotoDiv").css("visibility", "visible");
		theShows();
						$("#LoaderBkimg").fadeIn(mSecs, function() {
							$("#LoaderBkimg").fadeOut(mSecs, function() {
								$("#EighthBkimg").fadeIn(mm, function() {
									$("#NinthBkimg").fadeIn(mm, function() {
										$("#TenthBkimg").fadeIn(mm, function() {
											$("#EleventhBkimg").fadeIn(mm, function() {
												$("#TwelfthBkimg").fadeIn(mm, function() {
													$("#ThirteenthBkimg").fadeIn(mm, function() {
														$("#FourteenthBkimg").fadeIn(mm, function() {
															$("#FifteenthBkimg").fadeIn(mm, function() {
																$("#SixteenthBkimg").fadeIn(mm, function() {
																	$("#SeventeenthBkimg").fadeIn(mm, function() {
																		$("#EighteenthBkimg").fadeIn(mm, function() {
																			$("#NineteenthBkimg").fadeIn(mm, function() {
																				$("#TwentiethBkimg").fadeIn(mm, function() {
																					$("#Twenty-FirstBkimg").fadeIn(mm, function() {
																						$("#Twenty-SecondBkimg").fadeIn(mm, function() {
																							$("#Twenty-ThirdBkimg").fadeIn(mm, function() {
																								$("#Twenty-FourthBkimg").fadeIn(mm, function() {
																									$("#Twenty-FifthBkimg").fadeIn(mm, function() {
																										$("#Twenty-SixthBkimg").fadeIn(mm, function() {
																											$("#Twenty-SeventhBkimg").fadeIn(mm, function() {
																												$("#Twenty-EighthBkimg").fadeIn(mm);
																											});
																										});
																									});
																								});
																							});
																						});
																					});
																				});
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
		bKfO=5;
		$("#fakeBack").click(function() {
			clearPhoto(); 
			$("#loadPhotoz2").html(" ");
			$("#loadPhotoz").html(" ");
			$("#loadPhotoz2").css("z-index", "0");
            $(".PhotoDiv").css("visibility", "hidden");
		});
        move_div();
		}
	else if (bKfO==5) {
		document.title = "OSO VIVID RECORDS | HOME";
		clearCoords();
		move_div();
			$("#ThrdBkimg").fadeTo(fadyTo, reg, function() {
				$("#FifthBkimg").fadeTo(fadyTo, reg, function() {
					$("#FrstBkimg").fadeTo(mSecs, reg, function() {
						$("#EighthBkimg").fadeOut(mm, function() {
							$("#NinthBkimg").fadeOut(mm, function() {
								$("#TenthBkimg").fadeOut(mm, function() {
									$("#EleventhBkimg").fadeOut(mm, function() {
										$("#TwelfthBkimg").fadeOut(mm, function() {
											$("#ThirteenthBkimg").fadeOut(mm, function() {
												$("#FourteenthBkimg").fadeOut(mm, function() {
													$("#FifteenthBkimg").fadeOut(mm, function() {
														$("#SixteenthBkimg").fadeOut(mm, function() {
															$("#SeventeenthBkimg").fadeOut(mm, function() {
																$("#EighteenthBkimg").fadeOut(mm, function() {
																	$("#NineteenthBkimg").fadeOut(mm, function() {
																		$("#TwentiethBkimg").fadeOut(mm, function() {
																			$("#Twenty-FirstBkimg").fadeOut(mm, function() {
																				$("#Twenty-SecondBkimg").fadeOut(mm, function() {
																					$("#Twenty-ThirdBkimg").fadeOut(mm, function() {
																						$("#Twenty-FourthBkimg").fadeOut(mm, function() {
																							$("#Twenty-FifthBkimg").fadeOut(mm, function() {
																								$("#Twenty-SixthBkimg").fadeOut(mm, function() {
																									$("#Twenty-SeventhBkimg").fadeOut(mm, function() {
																										$("#Twenty-EighthBkimg").fadeOut(mm);
																									});
																								});
																							});
																						});
																					});
																				});
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});	
				});
			});   
		bKfO=0;	
		$("#loadPhotoz2").html(" ");
		$("#loadPhotoz").html(" ");
		$("#loadPhotoz2").css("z-index", "0");
        $(".PhotoDiv").css("visibility", "hidden");
	}
}

function clearPhoto() {
        $("#ThrdBkimg").fadeTo(fadyTo, reg, function() {
			$("#FifthBkimg").fadeTo(fadyTo, reg, function() {
				$("#FrstBkimg").fadeTo(mSecs, reg, function() {
					$("#EighthBkimg").fadeOut(mm, function() {
						$("#NinthBkimg").fadeOut(mm, function() {
							$("#TenthBkimg").fadeOut(mm, function() {
								$("#EleventhBkimg").fadeOut(mm, function() {
									$("#TwelfthBkimg").fadeOut(mm, function() {
										$("#ThirteenthBkimg").fadeOut(mm, function() {
											$("#FourteenthBkimg").fadeOut(mm, function() {
												$("#FifteenthBkimg").fadeOut(mm, function() {
													$("#SixteenthBkimg").fadeOut(mm, function() {
														$("#SeventeenthBkimg").fadeOut(mm, function() {
															$("#EighteenthBkimg").fadeOut(mm, function() {
																$("#NineteenthBkimg").fadeOut(mm, function() {
																	$("#TwentiethBkimg").fadeOut(mm, function() {
																		$("#Twenty-FirstBkimg").fadeOut(mm, function() {
																			$("#Twenty-SecondBkimg").fadeOut(mm, function() {
																				$("#Twenty-ThirdBkimg").fadeOut(mm, function() {
																					$("#Twenty-FourthBkimg").fadeOut(mm, function() {
																						$("#Twenty-FifthBkimg").fadeOut(mm, function() {
																							$("#Twenty-SixthBkimg").fadeOut(mm, function() {
																								$("#Twenty-SeventhBkimg").fadeOut(mm, function() {
																									$("#Twenty-EighthBkimg").fadeOut(mm);
																								});
																							});
																						});
																					});
																				});
																			});
                                                                        });
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});	
			});
		});
        bKfO=0;
}

function goToShow() {
        clearCoords2();
	if (bKfO===0) {
		document.title = "OSO VIVID RECORDS | SHOWS & EVENTS";
		$(".calendarWrap").css("visibility","visible").css("z-index","110").css("display","block");
                $(".calendarWrap").draggable();
                $("#loadPhotoz").html(" ");
		$("#loadPhotoz2").html(" ");
		move_div();
		clearCoords2();
		$("#FrstBkimg").fadeTo(fadyTo, reg, function() {
			$("#ThrdBkimg").fadeTo(fadyTo, opo, function() {
				$("#FifthBkimg").fadeTo(fadyTo, opo);
			});
		});
		bKfO=6;
	}
	else if (bKfO==1 || bKfO==2 || bKfO==3 || bKfO==4 || bKfO==5 || bKfO==7 || bKfO==8) {
		document.title = "OSO VIVID RECORDS | SHOWS & EVENTS";
		$(".calendarWrap").css("visibility","visible").css("z-index","110").css("display","block");
                $(".calendarWrap").draggable();
                $("#loadPhotoz").html(" ");
		$("#loadPhotoz2").html(" ");
		move_div();
		clearCoords2();
		
		bKfO=6;
	}
	else if (bKfO==6) {
		document.title = "OSO VIVID RECORDS | HOME";
		move_div();
		clearCoords2();
		$(".calendarWrap").fadeOut(100);
		$("#ThrdBkimg").fadeTo(fadyTo, reg, function() {
			$("#FifthBkimg").fadeTo(fadyTo, reg, function() {
				$("#FrstBkimg").fadeTo(mSecs, reg);		
			});
		});
		$("#loadPhotoz2").html(" ");
		$("#loadPhotoz").html(" ");
		bKfO=0;
	}
}

function goToLife() {
        clearCoords();
	if (bKfO===0) {
		document.title = "OSO VIVID RECORDS | Join the Lifestyle!";
		$("#loadPhotoz").html("<img id='SeventhBkimg' class='verycenter' usemap='#mainMap2' src='images/Life.png' border='0' style='z-index:106;' />");
		$("#loadPhotoz2").html(" ");
		move_div();
		clearCoords();
		$("#FrstBkimg").fadeTo(fadyTo, reg, function() {
			$("#ThrdBkimg").fadeTo(fadyTo, opo, function() {
				$("#FifthBkimg").fadeTo(fadyTo, opo, function() {
					$("#SeventhBkimg").fadeIn(mSecs);			
				});
			});
		});
		bKfO=7;
	}
	else if (bKfO==1 || bKfO==2 || bKfO==3 || bKfO==4 || bKfO==5 || bKfO==6 || bKfO==8) {
		document.title = "OSO VIVID RECORDS | Join the Lifestyle!";
		$("#loadPhotoz").html("<img id='SeventhBkimg' class='verycenter' usemap='#mainMap2' src='images/Life.png' border='0' style='z-index:106;' />");
		$("#loadPhotoz2").html(" ");
		move_div();
		clearCoords();
		$("#SeventhBkimg").fadeIn(mSecs);
		bKfO=7;
	}
	else if (bKfO==7) {
		document.title = "OSO VIVID RECORDS | HOME";
		move_div();
		clearCoords();
		$("#SeventhBkimg").fadeOut(100, function() {
			$("#ThrdBkimg").fadeTo(fadyTo, reg, function() {
				$("#FifthBkimg").fadeTo(fadyTo, reg, function() {
					$("#FrstBkimg").fadeTo(mSecs, reg);
				});
			});
		});
		$("#loadPhotoz2").html(" ");
		$("#loadPhotoz").html(" ");
		bKfO=0;
	}
}

function goToMerch() {
        clearCoords();
	if (bKfO===0) {
		document.title = "OSO VIVID RECORDS | HOT ITEMS from OS&O Clothing";
		$("#loadPhotoz").html(" ");
		move_div();
		clearCoords();
		$("#FrstBkimg").fadeTo(fadyTo, reg, function() {
			$("#ThrdBkimg").fadeTo(fadyTo, opo, function() {
				$("#FifthBkimg").fadeTo(fadyTo, opo, function() {
                                        $(".payPal").css("visibility","visible");
                                        $(".payPal").fadeIn(mSecs);
                                        $(".payPal").draggable();			
				});
			});
		});
		bKfO=8;
	}
	else if (bKfO==1 || bKfO==2 || bKfO==3 || bKfO==4 || bKfO==5 || bKfO==6 || bKfO==7) {
		document.title = "OSO VIVID RECORDS | HOT ITEMS from OS&O Clothing";
		$("#loadPhotoz").html(" ");
		$("#loadPhotoz2").html(" ");
		move_div();
		clearCoords();
                $(".payPal").css("visibility","visible");
                $(".payPal").fadeIn(mSecs);
                $(".payPal").draggable();
		bKfO=8;
	}
	else if (bKfO==8) {
		document.title = "OSO VIVID RECORDS | HOME";
		move_div();
		clearCoords();
			$("#ThrdBkimg").fadeTo(fadyTo, reg, function() {
				$("#FifthBkimg").fadeTo(fadyTo, reg, function() {
					$("#FrstBkimg").fadeTo(mSecs, reg);
                                        $(".payPal").fadeOut(mSecs);
                                        $(".payPal").css("visibility","hidden");
				});
			});
		$("#loadPhotoz2").html(" ");
		$("#loadPhotoz").html(" ");
		bKfO=0;
	}
}

    // inner variables
var song;
var tracker = $(".tracker");
var volume = $(".volume");
var dVol = 0.5;
var pl = 0;
    
function initAudio(elem) {

    var url = elem.attr('audiourl');
    var title = elem.text();
    var cover = elem.attr('cover');
    var artist = elem.attr('artist');

    $('.player .title').text(title);
    $('.player .artist').text(artist);
    $('.player .cover').css('background-image','url(images/' + cover+')');

    song = new Audio('media/' + url);
    song.volume = dVol;
    
    tracker.slider("value", 0);
    
    // timeupdate event listener
    song.addEventListener('timeupdate',function (){
        var curtime = parseInt(song.currentTime, 10);
        tracker.slider('value', curtime);
    });

    // end listener – play next
    song.addEventListener("ended",function(){
        var next = $(".playlist li.active").nextAll().eq(1);
            if (next.length === 0) {
                next = $(".playlist li:first-child");
                stopAudio();
                initAudio(next);
            }

    //  loadedmetadata
    //  song.addEventListener(“loadedmetadata”, function() {
    //    tracker.slider(‘value’,0);
    //	});
    //  meta data loaded
    
    // stopAudio();
    // initAudio(next);
    // playAudio();

    });
   
    $('.playlist li').removeClass('active');
    elem.addClass('active');
    
}

function playAudio() {
    song.play();
    tracker.slider("option", "max", song.duration);
    
    $('.play').addClass('hidden');
    $('.pause').addClass('visible');
}

function pauseAudio() {
    song.pause();
    $(".play").removeClass("hidden");
    $(".pause").addClass("visible");
}

function stopAudio() {
    song.pause();
    $('.play').removeClass('hidden');
    $('.pause').removeClass('visible');
}

function stopAudio2() {
    song.pause();
    tracker.slider("option", "max", song.duration);
    $('.play').removeClass('hidden');
    $('.pause').removeClass('visible');
}


$(document).ready(function() {
    // $(".player").draggable();
    // $(".playlist").draggable();

    // play click
    $('.play').click(function (e) {
        e.preventDefault();
        playAudio();
    });

    // pause click
    $('.pause').click(function (e) {
        e.preventDefault();
        stopAudio();
    });
    
    // forward click
    $('.fwd').click(function (e) {
        e.preventDefault();
        stopAudio2();
        var next = $('.playlist li.active').nextAll().eq(1);
        tracker.slider("option", "max", song.duration);
        if (next.length === 0) {
            next = $('.playlist li:first-child');
        }
        initAudio(next);
        playAudio();
    });
    
    // rewind click
    $('.rew').click(function (e) {
        e.preventDefault();
        stopAudio2();
        var prev = $('.playlist li.active').prevAll().eq(1);
        tracker.slider("option", "max", song.duration);
        if (prev.length === 0) {
            prev = $('.playlist li:last-child');
        }
        initAudio(prev);
        playAudio();
    });
    
    // click playlist
    $('.pl').click(function (e) {
        e.preventDefault();
        if (pl === 0) {
            $('.playlist').fadeIn(300);
            pl = 1;
        }
        else if (pl == 1) {
            $('.playlist').fadeOut(300);
            pl = 0;  
        }
    });
    
    // playlist elements - click
    $('.playlist li').click(function () {
        stopAudio();
        initAudio($(this));
        playAudio();
    });
    
    // initialization - first element in playlist
    initAudio($('.playlist li:first-child'));
    
    // set volume
    song.volume = 0.8;
    
    // initialize the volume slider
    volume.slider({
        range: 'min',
        min: 1,
        max: 100,
        value: 80,
        start: function(event,ui) {},
        slide: function(event,ui) {
            song.volume = ui.value / 100;
            dVol = ui.value / 100;
        },
        stop: function(event,ui) {},
    });
    
    // empty tracker slider
    tracker.slider({
        range: 'min',
        min: 0, max: 10,
        start: function(event,ui) {},
        slide: function(event,ui) {
            song.currentTime = ui.value;
        },
        stop: function(event,ui) {}
    });
    
    $("#fakeBack").css({"background-image":"url(images/osovivid/ColoradoLight.jpg)","z-index":"-1000","width":"100vw", "height":"100vh","background-size":"100vw 100vh"});
	
	/* $("#twitta").html('<a class="twitter-timeline" href="https://twitter.com/kghunid" data-widget-id="327596728758964225">Tweets by @kghunid</a>').css("top", "50%");
	
    $("#twitta2").html('<a class="twitter-timeline"  href="https://twitter.com/ElmerDemond"  data-widget-id="347384388213956609">Tweets by @ElmerDemond</a>').css("top", "75%"); */

	move_div();

	$("#BottomTexter").css('bottom', '10px')
	.css('left',(window_width/2)-($("#BottomTexter").width()/2));

	$(window).scroll(function() {
        $("#BottomTexter").stop().animate({bottom: 9}, 'slow').css('left',(window_width/2)-($("#BottomTexter").width()/2));
	});

	$(window).resize(function() {
		move_div();
		$("#BottomTexter").stop().animate({bottom: 10}, 'slow').css('left',(window_width/2)-($("#BottomTexter").width()/2));
	});
    
    $("#topMenu").css('top', '10%')
    .css('left',(window_width/2)-($("#topMenu").width()/2));

	$(window).scroll(function() {
        $("#topMenu").stop().animate({top: 90}, 'slow').css('left',(window_width/2)-($("#topMenu").width()/2));
	});

	$(window).resize(function() {
		move_div();
		$("#topMenu").stop().animate({top: 100}, 'slow').css('left',(window_width/2)-($("#topMenu").width()/2));
	});

	$('.hover').mousemove(function(e) {
		var hovertext = $(this).attr('hovertext');
		$('#hoverdiv').text(hovertext).show();
		$('#hoverdiv').css('top', e.clientY+10).css('left', e.clientX+10);
        }).mouseout(function() {
	$('#hoverdiv').hide();
        });

	$('#KG').click(
		function() {
		goToKG();
		}
	);

	$('#Elm').click(
		function() {
		goToElm();
		}
	);		

	$('#MzkMedia,#exitMusic').click(
		function() {
		goToMzkMedia();
		}
	);	

	$('#Cont').click(
		function() {
		goToCont();
		}
	);

	$('#Photo').click(
		function() {
		goToPhoto();
		}
	);

	$('#Show').click(
		function() {
		goToShow();
		}
	);

	$('#Life').click(
		function() {
		goToLife();
		}
	);

	$('#Merch').click(
		function() {
		goToMerch();
		}
	);

        $('.the12th').click(
                function() {
                theShows();
                }
        );
        $('.the19th').click(
                function() {
                theShows();
                }
        );
        $('.the28th').click(
                function() {
                theShows();
                }
        );
}); 