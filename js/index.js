function ColocarAnoNaPagina(){
            //retorna um DOM da label
            var lblAno = document.getElementById('lblTimeYear');
            lblAno.textContent = "2016";
        }

        // function anonima JS
	        window.onload = function () {ColocarAnoNaPagina(); {PreencheCidades();}}