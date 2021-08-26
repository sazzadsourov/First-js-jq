function text(){
    document.getElementById('h1').innerHTML= "i love bangladesh"
}
function image(){
    document.getElementById('light').src="img/pic_bulboff.gif";
}
function image2(){
    document.getElementById('light').src="img/pic_bulbon.gif";
}

function btn_text(){
    document.getElementsByClassName("d_text")[0].style.backgroundColor="red";
}
function p_text1(){
    document.getElementsByClassName('full_stack')[0].innerHTML="i love coading";
}

function mhover(){
  document.getElementsByClassName('text3')[0].style.backgroundColor='red';
}
function alert1(){
    alert("i am from bangladesh");
}
function dbl_text(){
    document.getElementById('dd_text').innerHTML="i am a student" ;
}
function pload(){
    alert("hellow everyone")
};

  function down(){
      document.getElementById('key_down').innerHTML="i miss bangladesh"
  }

  //function
  function time_date(){
    document.getElementsByClassName('time')[0].innerHTML=Date();
}
  function rep(){
      var r_text ="welcome to ssb";
      document.getElementById('rep_text').innerHTML= r_text.repeat(3)
  } 

  function font(){
    document.getElementById('font_size').style.fontSize="50px"
}
function myFunction() {
    document.getElementById('color').style.color="blue"
  }

  function border1(){
      document.getElementById('bor_one').style.border="3px solid red"
  }
  function change_img(){
      document.getElementById('c_img').src="img/img (1).jpg" ;
  }
  function change_img1(){
      document.getElementById('c_img').src="img/img (2).jpg"
  }

  function my_fun(num){
      var result= num * num;
      document.write("result =" + result + "<br>")
  }
  function add(num2, num3){
    var result= num2 + num3;
    document.write("result =" + result + "<br>")

}
function sub(num1, num12){
    var result= num1 - num12;
    document.write("result =" + result + "<br>")

}

//   my_fun(5);
//   add(40,20);
//   sub(50,10);

  //selector
  
  function border2(){
    document.getElementById('bor_one1').style.border="3px solid red";
}
function p_text12(){
    document.getElementsByClassName('full_stack1')[0].innerHTML="i love coading";
}
function down1(){
    document.getElementById('key_down1').innerHTML="i miss bangladesh";
}
function mhover1(){
    document.getElementsByClassName('text31')[0].style.backgroundColor='red';
  }
function text5(){
    document.querySelector('.text01').innerHTML="i love coding"
}
function text15(){
    document.querySelector('#text012').style.color="red"
}
function tagid(){
    document.querySelector('h5').style.background="red";
}

function tag1(){
    document.getElementsByTagName('p').style.color="blue";
}
function font1(){
    document.getElementById('font_size1').style.fontSize="30px"
}
function font2 (){
    document.getElementById('font_size2').style.color="cyan";
}
//output
function alert11(){
  window.alert("welcome to our website");
}
function text05(){
    document.querySelector('.text02').innerHTML="i love coding"
}
function text03(){
    document.write("i love coding")
}
function text06(){
    console.log("i love coding")
}
function alert111(){
    window.alert("how are u");
  }
  function text55(){
      document.querySelector('.text22').innerHTML="i love my family"
  }
  function text033(){
      document.write("I am so happy")
  }
  function text066(){
      console.log("what are u doing now")
  }
function result34(){
    var a= 50;
    var b= 40;
    var c= a+b;
    document.write("result =", c)
}

//operator
function result324(){
    var a= 50;
    var b= 40;
    var c= a+b;
    document.getElementById('Addition').innerHTML=("Addition result ="+ c)
}
function result212(){
    var a= 10;
    var b= 5;
    var c= a*b;
    document.getElementById('Subtraction').innerHTML=("Subtraction Result is =" + c)
}

function result213(){
    var a= 10;
    var b= 5;
    var c= a*b;
    document.getElementById('Multiplication').innerHTML=("Multiplication Result is =" + c)
}
function result214(){
    var a= 50;
    var b= 5;
    var c= a/b;
    document.getElementById('Quotient').innerHTML=("Quotient Result is =" + c)
}
function result2141(){
    let x = 5;
    document.getElementById("Assign1").innerHTML = (x == 8);
}
function result2142(){
    let x = 5;
    document.getElementById("Assign2").innerHTML = (x == 5);
}
function result2143(){
    let x = 5;
    document.getElementById("Assign3").innerHTML = (x > 8);
}
function result2144(){
    let x = 5;
    document.getElementById("Assign4").innerHTML = (x < 8);
}
function result3245(){
    var a= 50;
    var b= 40;
    var c= a+b;
    document.getElementById('Addition4').innerHTML=("Addition result ="+ c)
}
function result3246(){
    var a= 500;
    var b= 40;
    var c= a%b;
    document.getElementById('Addition5').innerHTML=("Remainder result ="+ c);
}
//jQuery 
i = 0;
$(document).ready(function(){
    $('.button1').click(function(){
        alert("welcome to bangladesh");
    });
    $('.border_1').click(function(){
        document.write("I love Bangladesh");
    });
    $('.border_101').click(function(){
        document.getElementsByClassName('bor_one11')[0].style.border="1px solid red";
    });
    $('#jcolor').click(function(){
        document.getElementById('jcolor').style.color="blue";
    });
    $('.qrbtn1').click(function(){
        document.getElementsByClassName('honest')[0].style.background="red";
    });
    $('.qrbtn').click(function(){
        document.getElementsByClassName('honest1')[0].style.color="red";
    });
    $('.fj_btn').click(function(){
        document.getElementsByClassName('fj_btn1')[0].style.fontSize="30px";
    });
    $('.fj_btn2').click(function(){
        $('.p_hide p').hide(2000);
    })
    $('.fj_btn3').click(function(){
        document.getElementsByClassName('fj_h3')[0].innerHTML="I am  a student"
    })
    $('#fj_btn4').click(function(){
        document.getElementById('fj2_p').innerHTML="this is a id selector";
    })
    $('#console').click(function(){
        console.log("this is a console log")
    
    })

// jQ event


    $('.1button').dblclick(function(){
        alert("welcome to bangladesh");
    });
    $('.1border_101').blur(function(){
        document.getElementsByClassName('1bor_one11')[0].style.border="1px solid red";
    });
    $('#jcolor1').mouseover(function(){
        $("#jcolor1").css("background-color", "yellow");
    });
    $('#jcolor1').mouseout(function(){
        $("#jcolor1").css("background-color", "white");
    });

    $('.1qrbtn').mouseenter(function(){
        $(".1honest").css("background-color", "red");
    });
    $('.1qrbtn').mouseout(function(){
        $(".1honest").css("background-color", "white");
    });

    $(".pc1").each(function(i){
        $(this).on("click", {x:i}, function(event){
          alert("The " + $(this).index() + ". paragraph has data: " + event.data.x);
        });
      });
      $(".input1").keypress(function(){
        $("span").text(i += 1);
      });

      $(".1input").keydown(function(){
        $(".1input").css("background-color", "yellow");
      });
   
      //jQ output
      $('.out_btn1').click(function(){
        document.getElementsByClassName('out_p1')[0].innerHTML="I am sourov";
    })
    $('.out_btn2').click(function(){
        document.write("this is document.write output")
    })
    $('.out_btn3').click(function(){
        console.log("this console.log output")
    })
    $('.out_btn4').click(function(){
        window.alert("this alert output");
    })
    $('.out_btn5').click(function(){
        document.getElementsByClassName('out_btn5')[0].innerHTML="this is a heading text";
    })
    $('.out_btn6').click(function(){
        document.getElementsByClassName('out_btn6')[0].innerHTML=5+5;
    })
    $('.out_btn7').click(function(){
        window.alert("Be careful");
    })
    $('#out_btn8').click(function(){
        console.log("console item is a hidden item")
    })
    $('#out_btn9').click(function(){
        document.write("this is a new page")
    })
    // jQ operator
    $('#opa_btn1').click(function(){
        var a= 50;
        var b= 40;
        var c= a+b;
        document.getElementById('Addition1').innerHTML=("Addition result ="+ c)
    })
    $('#opa_btn2').click(function(){
        var a= 10;
        var b= 5;
        var c= a*b;
        document.getElementById('Subtraction1').innerHTML=("Subtraction Result is =" + c)
    })
    $('#opa_btn3').click(function(){
        var a= 10;
        var b= 5;
        var c= a*b;
        document.getElementById('Multiplication1').innerHTML=("Multiplication Result is =" + c)
    })
    $('#opa_btn4').click(function(){
        var a= 50;
        var b= 5;
        var c= a/b;
        document.getElementById('division1').innerHTML=("Division Result is =" + c)
    })
    $('#opa_btn5').click(function(){
        let x = 5;
        document.getElementById("ope_p1").innerHTML = (x == 8);
    })
    $('#opa_btn6').click(function(){
        let x = 5;
        document.getElementById("ope_p2").innerHTML = (x == 5);
    })
    $('#opa_btn7').click(function(){
        let x = 5;
        document.getElementById("ope_p3").innerHTML = (x > 8);
    })
    $('#opa_btn8').click(function(){
        let x = 5;
        document.getElementById("ope_p4").innerHTML = (x < 8);
    })

    $('#opa_btn9').click(function(){
        var a= 500;
        var b= 40;
        var c= a+b;
        document.getElementById('Addition3').innerHTML=("Addition result ="+ c)
    })
    $('#opa_btn10').click(function(){
        var a= 500;
        var b= 40;
        var c= a%b;
        document.getElementById('remainder').innerHTML=("Remainder result ="+ c);
    })

})


