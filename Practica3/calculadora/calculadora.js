var operacion = "";
		function escribir(val) {
			operacion += val;
			document.getElementById("res").innerHTML = operacion;
		}

		function resolver() {
			var res = eval(operacion);
			document.getElementById("res").innerHTML = operacion + "<br>" + res;
		}

		function bUno() {
			operacion = operacion.substr(0,operacion.length - 1)
			document.getElementById("res").innerHTML = operacion;
		}

		function bResultado() {
			document.getElementById("res").innerHTML = operacion;
		}

		function bTodo() {
			operacion = "";
			document.getElementById("res").innerHTML = operacion;
		}