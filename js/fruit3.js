$(function(){

        $.ajax({

          url: "./json/3.json",

          dataType: "json",

          success : function(data){

            if(data.length>0){



              for(var i in data){
            

                $(".imgbox3").eq(i).append( '<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 

                $(".textbox3").eq(i).append('<h3><a href="#">'+data[i].title+"</a></h3>");      

                $(".textbox3").eq(i).append('<p><a href="#">'+data[i].subtitle+"</a></p>");                         

                $(".textbox3").eq(i).append('<h4><a href="#">'+data[i].price+"</a></h4>");




              }

            }

          }

        });


      });