        // to add some styles properties to body

        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.fontFamily = "Arial";
        document.body.style.backgroundColor = "#69779b";
        document.title = "loginForm_homeWork";


        // to create and append the <div> , <button> elements to body and div with onload
        document.body.onload = () => {
            var formm = document.createElement("div");
            document.body.appendChild(formm);

            formm.id = "form1";
            formm.style.width = "350px";
            formm.style.height = "350px";
            formm.style.background = "#acdbdf";
            formm.style.border = "1px solid black";

            formm.style.position = "fixed";
            formm.style.left = "50%"
            formm.style.top = "50%"
            formm.style.transform = "translate(-50%, -50%)";
            formm.style.transition = 'all 3.5s linear';
           

            // creating <input> element username
            var inputUserName = document.createElement("input");
            inputUserName.id = "input1";
            inputUserName.type = "text";
            inputUserName.setAttribute("onchange", "getValueUserName(this)");// to get the value of <input> with onchange event
            inputUserName.placeholder = "User Name";
            inputUserName.style.width = "292px";
            inputUserName.style.height = "50px";
            inputUserName.style.border = "1px solid black";
            inputUserName.style.padding = "8px";
            inputUserName.style.margin = "auto";
            inputUserName.style.marginTop = "40px";
            inputUserName.style.fontSize = "20px";
            inputUserName.style.display = "block";

            document.getElementById("form1").appendChild(inputUserName);
            document.getElementById("input1").focus();


            // creating <input> element password
            var inputUserName = document.createElement("input");
            inputUserName.id = "input2";
            inputUserName.type = "password";
            inputUserName.setAttribute("onchange", "getValuePassword(this)");
            inputUserName.placeholder = "Password";
            inputUserName.style.width = "292px";
            inputUserName.style.height = "50px";
            inputUserName.style.border = "1px solid black";
            inputUserName.style.padding = "8px";
            inputUserName.style.margin = "auto";
            inputUserName.style.marginTop = "40px";
            inputUserName.style.fontSize = "20px";
            inputUserName.style.display = "block";
            document.getElementById("form1").appendChild(inputUserName);



            // creating <button> element submit
            var buttonElem = document.createElement("button");
            buttonElem.innerHTML = "SEND";
            buttonElem.type = "submit";
            buttonElem.setAttribute("onclick", "showDivHosGel()"); 
            buttonElem.style.width = "200px";
            buttonElem.style.height = "60px";
            buttonElem.style.border = "1px solid black";
            buttonElem.style.padding = "8px";           
            buttonElem.style.margin = "auto";
            buttonElem.style.marginTop = "40px";
            buttonElem.style.fontSize = "20px";
            buttonElem.style.display = "block";
            buttonElem.style.textAlign = "center";
            document.getElementById("form1").appendChild(buttonElem);


            // creating <div> hosgeldin element
            var divHosGeldin = document.createElement('div');
            divHosGeldin.id = 'div1';
            divHosGeldin.innerHTML = "HOŞ GELDİNİZ...";
            divHosGeldin.style.width = '350px';
            divHosGeldin.style.height = '350px';
            divHosGeldin.style.border = "1px solid black";
            divHosGeldin.style.background = '#ffd19a';
            divHosGeldin.style.borderRadius = "40px 40px";
            divHosGeldin.style.fontSize = "30px";
            divHosGeldin.style.fontStyle = "italic";
            divHosGeldin.style.fontFamily = "Helvetica"
            divHosGeldin.style.fontWeight = "900";
            divHosGeldin.style.textAlign = "center";
            divHosGeldin.style.display = 'flex';
            divHosGeldin.style.alignItems = 'center';
            divHosGeldin.style.justifyContent = 'center';
            divHosGeldin.style.transform = 'translate(-1500px, -150px)';
            divHosGeldin.style.transition = 'all 3.2s linear'; 
            document.body.appendChild(divHosGeldin);
        }


        // scope degiskeni olmamasi icin burada global degisken olarak tanimladik.
        var inputValueUserName; 

        function getValueUserName (yavuz) {
            inputValueUserName = yavuz.value; 
        }

        var inputValuePassword;

        function getValuePassword (yavuz1) {
            inputValuePassword = yavuz1.value;           
        }

        function showDivHosGel () {

            if ( inputValueUserName === "admin" && inputValuePassword === "admin" ) {
                
                document.getElementById('form1').style.transform = 'translate(1500px, -150px)';
                document.getElementById('form1').style.left = "50%"
                document.getElementById('form1').style.top = "50%"
                document.getElementById('form1').style.position = "fixed";

                var hosgeldin = document.getElementById("div1");
                hosgeldin.style.position = "fixed";
                hosgeldin.style.left = "50%"
                hosgeldin.style.top = "50%"
                hosgeldin.style.transform = "translate(-50%, -50%)";
                document.body.style.backgroundColor = "#e8e8e8";


                document.body.addEventListener("load", set_change());

                function set_change() {
                    setInterval(changeFunc, 150);
                }

                function changeFunc () {
            
                    let producedNumber = () => Math.floor(Math.random() * 256);

                    var num1, num2, num3;

                    num1 = producedNumber();
                    num2 = producedNumber();
                    num3 = producedNumber();

                    document.getElementById("div1").style.background = `rgb(${num1}, ${num2}, ${num3})`;
                }
        
            } else {
                window.alert("Kullanıcı bilgileriniz yanlış, lütfen tekrar deneyiniz..!");

                // to clear input box value for the next addings
                document.querySelectorAll("div input")[0].value = "";
                document.querySelectorAll("div input")[1].value = "";
                // focus
                document.getElementById("input1").focus();
            }
        }