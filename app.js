var input1Value = 0;
var input4Value = 0;

var year = 0;
var month = 0;
var week = 0;
var day = 0;



// var thisDate = new Date();
// month = thisDate.getMonth();
// day = thisDate.getDay();
// year = thisDate.getFullYear();
// $(".select-3").val(month);
// $(".select-4").val(day);
// $(".input-6").val(year);

$(".btn-start").click(function () { 

    var input1 = $(".select-1").val();
    var input2 = $(".select-2").val();
    var input3 = $(".input-3").val();
    var input4 = $(".select-3").val();
    var input5 = $(".select-4").val();
    var input6 = $(".input-6").val();

    
    if (input3 == "" || input6 == "") {
        alert("iltimos inputga malumot kiriting");
    }

    else{    
        function Span1() {
            year = input6 - input3;
            $(".span1").text(input6 - input3);
            if (year < 0) {
                alert("xato malumot");
            }
            else{
                $(".c-2").attr("class" , "d-block");
                $(".c-1").attr("class" , "d-none");
            }
        }
        Span1();

        function Span2() {
            if (input1 < input4) {
                month = (input4 - input1) + 12;
                $(".span2").text(12 + (input4 - input1));
            }else{ 
                month = input4 - input1;
                $(".span2").text(input4 - input1);
            }
        }
        Span2();

        function Span3() {
            if (input2 > input5) {
                day = 30 + (input5 - input2);
                $(".span3").text(30 + (input5 - input2));
            }else{
                day = input5 - input2;
                $(".span3").text(input5 - input2);
            }
        }
        Span3();

        function Span4() {
            $(".span4").text((12 * year) + month);
        }
        Span4();

        function Span5() {
            $(".span5").text(day);
        }
        Span5();

        function Span6() {
            $(".span6").text(((12 * year) + month)*4);
        }
        Span6();

        function Span7() {
            $(".span7").text(day % 7);
        }
        Span7();

        function Span8() {
            $(".span8").text((((12*year) + month)*30)+day);
        }
        Span8();

        function Span9() {
            $(".span9").text(((((12*year) + month)*30)+day)*24);
        }
        Span9();

        function Span10() {
            $(".span10").text((((((12*year) + month)*30)+day)*24)*60);
        }
        Span10();

        function Span11() {
            $(".span11").text(((((((12*year) + month)*30)+day)*24)*60)*60);
        }
        Span11();
    }
});

$(".btn-restart").click(function () { 
    $(document).ready(function () {
        location.reload(true);
    });
});