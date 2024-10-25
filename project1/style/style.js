
    function on() {
        document.getElementById("new-modal").style.display = "flex";
      }
      
      function offa() {
        document.getElementById("new-modal").style.display = "none";
      }
    
      function on2() {
        document.getElementById("new-modal2").style.display = "flex";
      }
      
      function off2() {
        document.getElementById("new-modal2").style.display = "none";
      }
      function on3() {
        document.getElementById("new-modal3").style.display = "flex";
      }
      
      function off3() {
        document.getElementById("new-modal3").style.display = "none";
      }
      function foron1() {
        document.getElementById("fortfolio-modal1").style.display = "flex";
      }
      
      function oroff1() {
        document.getElementById("fortfolio-modal1").style.display = "none";
      }

      function foron2() {
        document.getElementById("fortfolio-modal2").style.display = "flex";
      }
      
      function oroff2() {
        document.getElementById("fortfolio-modal2").style.display = "none";
      }
      function foron3() {
        document.getElementById("fortfolio-modal3").style.display = "flex";
      }
      
      function oroff3() {
        document.getElementById("fortfolio-modal3").style.display = "none";
      }
      

      

      function foron4() {
        document.getElementById("fortfolio-modal4").style.display = "flex";
      }
      
      function oroff4() {
        document.getElementById("fortfolio-modal4").style.display = "none";
      }
      function foron5() {
        document.getElementById("fortfolio-modal5").style.display = "flex";
      }
      
      function oroff5() {
        document.getElementById("fortfolio-modal5").style.display = "none";
      }

      function shaneon1() {
        document.getElementById("shane-secsion1-modal").style.display = "flex";
      }
      
      function shaneoff1() {
        document.getElementById("shane-secsion1-modal").style.display = "none";
      }


      
      function contacton() {
        document.getElementById("contact-modal").style.display = "flex";
      }
      
      function off() {
        document.getElementById("contact-modal").style.display = "none";
      }
      let trangthai = false;
      Boolean(trangthai);
      function dongmo(){
     
        if(trangthai == false)
        {
          document.getElementById("settingweb-container").style.transform="translateX(-0%)";
          trangthai = true;
        }  
        else if(trangthai == true)
          {
            document.getElementById("settingweb-container").style.transform="translateX(+100%)";
            trangthai = false;
          }
         
      }



      function doimau1(){
        const root = document.querySelector(':root');
        const mau=document.getElementById().style.backgroundColor
        console.log(mau)
        root.style.setProperty('--span-color',mau);
        
      }




      //ẩn navbar menu
      
      // var codinh = window.scrollY;
      // window.onscroll = function() {
      //   var currentScrollPos = window.scrollY;
      //   var kq = Math.abs(codinh - currentScrollPos); // Lấy giá trị tuyệt đối của sự chênh lệch
      //   if (kq >= 40) {
      //     document.getElementById("header").style.backgroundColor = "#ffffff";
      //   } else {
      //     document.getElementById("header").style.backgroundColor = "transparent";
      //   }
      // };
      window.onscroll= function(){
        var hientai = window.scrollY
        if(hientai>40){
          document.getElementById("header").style.backgroundColor = "#ffffff"
        }
        else{
          document.getElementById("header").style.backgroundColor = "transparent"
        }
      }



