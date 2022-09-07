$(function(){

        $.ajax({

          url: "./json/1.json",

          dataType: "json",

          success : function(data){

            if(data.length>0){



              for(var i in data){
            

                $(".imgbox1").eq(i).append( '<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 

                $(".textbox1").eq(i).append('<h3><a href="#">'+data[i].title+"</a></h3>");      

                $(".textbox1").eq(i).append('<p><a href="#">'+data[i].subtitle+"</a></p>");  

                $(".textbox1").eq(i).append('<del>'+data[i].sale+"</del>");                             

                $(".textbox1").eq(i).append('<h4><a href="#">'+data[i].price+"</a></h4>");




              }

            }

          }

        });


      });