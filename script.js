const sheeturl="https://docs.google.com/spreadsheets/d/e/2PACX-1vS4tAxuF_NY_LonqByrr7JP8M5_gC5eYwenqfWceoWKlZroIvK3CLFIVpZZ5_78RSq2qN7kwj0-qcF9/pubhtml";
            async function check(){
                const input = document.getElementById('Cred').value.trim();
                const result = document.getElementById('Result');

            if(!input) {
                document.getElementById('Result').innerHTML = "<span style='color: red;'> Your certificate is not valid!</span>";

                return;
            }
            try{
                const responses= await fetch(sheeturl);
                const data = await responses.text();
                if(data.includes(input)){
                    document.getElementById('Result').innerHTML = "<span style='color: green;'> Your certificate is valid!</span>";

            }
            else{
                document.getElementById('Result').innerHTML = "<span style='color: red;'> Your certificate is not valid!</span>";

            }}
            catch(error){

                console.error("Error fetching the sheet:", error);
                document.getElementById('Result').innerHTML = "<span style='color: red;'> An error occurred.</span>";
            }
            

        }