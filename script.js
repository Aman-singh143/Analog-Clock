
        const darkmode = () => {
        let pic = document.querySelector(".light");
        let swi = document.querySelector(".btn");
            if(theme.getAttribute("href")=="light.css"){
                
                theme.href = "dark.css";
                pic.src="dark.png"
                swi.innerHTML="Light";

            }
            else{
                theme.href="light.css"
                pic.src="clock.png";
                swi.innerHTML="Dark"
            }


          

    }
                let hour = document.querySelector('.hour');
                let min = document.querySelector('.min');
                let sec = document.querySelector('.sec');


                (function() {
                    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                
                    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
                
                    Date.prototype.getMonthName = function() {
                        return months[ this.getMonth() ];
                    };
                    Date.prototype.getDayName= function() {
                        return days[ this.getDay() ];
                    };
                })();
                
                var now = new Date();
                
                var day = now.getDayName();
                var month = now.getMonthName();

                const setTime = ()=>{
                let Td = new Date();
                let hr = Td.getHours();
                let mn = Td.getMinutes();
                let sc = Td.getSeconds();

                hrotation = 30*hr + mn/2;
                mrotation = 6*mn;
                srotation = 6*sc;
                
                hour.style.transform = `rotate(${hrotation}deg)`;
                min.style.transform = `rotate(${mrotation}deg)`;
                sec.style.transform = `rotate(${srotation}deg)`;

                let dat = Td.getDate();
                let calender = document.querySelector(".cal");
                calender.innerHTML= day+","+month +" "+dat;
                

                let Dtime = document.querySelector(".dclock").innerHTML=Td.toLocaleTimeString();

            }

            setInterval(setTime,1000);  