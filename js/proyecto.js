//CONTROL DE STOCK para un comercio que vende hongos deshidratados
//A medida que se van registrando ventas, se tiene que ir almacenando una lista de las mismas donde se
//muestre el nombre y apellido del comprador, el tipo de hongo que compró, la cantidad que compró y el stock parcial y total
//del local. Se usa un if para advertir al vendedor que se debe reponer stock del producto lo más pronto posible.
//Se usa un for para contar las ventas.

//Voy a usar una clase de objetos para capturar datos de clientes
class cliente {
	constructor(nombre, apellido, telefono, email) {
		this.nombre=nombre;
		this.apellido=apellido;
		this.telefono=telefono;
		this.email=email;
	}
}


const carteraClientes = JSON.parse(sessionStorage.getItem("carteraClientes")) || [];

let stock_melena = 5.5 ; // Stock inicial del hongo "melena de león" en el local en kilogramos
let stock_reishi = 5.5 ; // Stock inicial del hongo "reishi" en el local en kilogramos
let ventas=0;

function kiloAgramo_melena (x,y){
	stock_melena = Number ((x - y*0.001).toFixed(2));
}
function kiloAgramo_reishi (x,y){
	stock_reishi = Number ((x - y*0.001).toFixed(2));
}



let boton = document.getElementById("boton_registrar");
boton.addEventListener("click", () => {
	
	let opcion = document.getElementById("opcion_menu").value;
	
	if (opcion == 1) {
		
		//Creo un div para notificar al usuario la opción que seleccionó y permitirle que ingrese la cantidad
		let contenedor = document.getElementById ("resultado");
		
		contenedor.innerHTML = `<p>Seleccionó la opción ${opcion} para Melena de león.</p>
		<p>A continuación, ingrese una de las siguientes cantidades: 100, 250, 350, 500 (en gramos)<p>
		<label for="">Cantidad: </label>
		<input type="text" id="cant_melena">
		<button id="boton_cantidad">Registrar</button>`;
		
				document.body.append(contenedor); 
				
				let botonCantidad = document.getElementById ("boton_cantidad");
				botonCantidad.addEventListener ("click", () => {
					
					let cant_melena = document.getElementById("cant_melena").value;
					if(cant_melena == 100 || cant_melena == 250 || cant_melena == 350 || cant_melena == 500)
					{
						kiloAgramo_melena(stock_melena,cant_melena);
						
						let cantidad = document.createElement("div");
						cantidad.innerHTML = `<p>Se ha registrado con éxito la selección: <br><br>
						<strong>Cantidad seleccionada:</strong> ${cant_melena} g <br> 
						<strong>Stock restante Melena:</strong> ${stock_melena} kg <br><br>
						<button id="guardar">Guardar</button>`;
						document.body.append(cantidad);
						
						console.log (cant_melena);
						console.log (stock_melena);
						
						if (stock_melena <= 5) 
						{
							alert(`Advertencia: El stock de Melena de león es bajo. Reponer stock. \n Stock de Melena de león restante: ${stock_melena}kg`);
						}
						ventas += 1;

				//SWEET ALERT PARA MOSTRAR UN RESUMEN Y CONFIRMACIÓN DE LOS DATOS REGISTRADOS
				
				let guardar = document.getElementById("guardar");
				guardar.addEventListener('click', () => {
					
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'Se ha registrado el pedido',
						showConfirmButton: false,
						timer: 3500,
						width: '25%'
					})
					
				})
				
			}
					else 
					{
					alert("Ingrese alguno de los valores mostrados en la lista");
				}
				
			})
	}
	else if (opcion == 2) {
		
		let contenedor = document.getElementById ("resultado");
		
		contenedor.innerHTML = `<p>Seleccionó la opción ${opcion} para Reishi.</p>
		<p>A continuación, ingrese una de las siguientes cantidades: 100, 250, 350, 500 (en gramos)<p>
		<label for="">Cantidad: </label>
		<input type="text" id="cant_reishi">
		<button id="boton_cantidad">Registrar</button>`;

				document.body.appendChild(contenedor);

				let botonCantidad = document.getElementById ("boton_cantidad");
				botonCantidad.addEventListener ("click", () => {

					let cant_reishi = document.getElementById("cant_reishi").value;
					if(cant_reishi == 100 || cant_reishi == 250 || cant_reishi == 350 || cant_reishi == 500)
					{
						kiloAgramo_reishi(stock_reishi,cant_reishi);
						
						let cantidad = document.createElement("div");
						cantidad.innerHTML = `<p>Se ha registrado con éxito la selección: <br><br>
											 <strong>Cantidad seleccionada:</strong> ${cant_reishi} g <br> 
											 <strong>Stock restante Reishi:</strong> ${stock_reishi} kg <br><br>
											 <button id="guardar">Guardar</button>`;
						document.body.append(cantidad);

						console.log (cant_reishi);
						console.log (stock_reishi);

						if (stock_reishi <= 5) 
						{
							alert(`Advertencia: El stock de Reishi es bajo. Reponer stock. \n Stock de Reishi restante: ${stock_reishi}kg`);
						}
						ventas += 1;

				//SWEET ALERT PARA MOSTRAR UN RESUMEN Y CONFIRMACIÓN DE LOS DATOS REGISTRADOS

				let guardar = document.getElementById("guardar");
				guardar.addEventListener('click', () => {
   
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'Se ha registrado el pedido',
						showConfirmButton: false,
						timer: 3500,
						width: '25%'
					})
					
				})

					}
					else 
					{
					alert("Ingrese alguno de los valores mostrados en la lista");
				}

				})
	}
	else if (opcion == 3) {

		let contenedor = document.getElementById ("resultado");

		contenedor.innerHTML = `<p>Seleccionó la opción ${opcion} para Melena de león y Reishi.</p>
		<p>A continuación, ingrese una de las siguientes cantidades para Melena de león: 100, 250, 350, 500 (en gramos)<p>
		<label for="">Cantidad: </label>
		<input type="text" id="cant_melena">
		<button id="boton_cantidad">Registrar</button>`;

		document.body.appendChild(contenedor);
		let botonCantidad = document.getElementById ("boton_cantidad");
		botonCantidad.addEventListener ("click", () => {

			let cant_melena = document.getElementById("cant_melena").value;
			if(cant_melena == 100 || cant_melena == 250 || cant_melena == 350 || cant_melena == 500)
			{
				kiloAgramo_melena(stock_melena,cant_melena);

				let cantidad = document.createElement("div");
						cantidad.innerHTML = `<p>Se ha registrado con éxito la selección: <br><br>
											 <strong>Cantidad seleccionada:</strong> ${cant_melena} g <br> 
											 <strong>Stock restante Melena:</strong> ${stock_melena} kg <br><br>
											 A continuación, ingrese la cantidad de Reishi: 100, 250, 350, 500 (en gramos)<br><br>
											 Cantidad: <input id="cant_reishi"></input>
											 <button id="boton_registrar2">Registrar</button>`;
						document.body.append(cantidad);

				if (stock_melena <= 5) 
				{
					alert(`Advertencia: El stock de Melena de león es bajo. Reponer stock. \n Stock de Melena de león restante: ${stock_melena}kg`);
				}

				let botonRegistrar2 = document.getElementById ("boton_registrar2");
				botonRegistrar2.addEventListener ("click", () => {

					let cant_reishi = document.getElementById("cant_reishi").value;
					if(cant_reishi == 100 || cant_reishi == 250 || cant_reishi == 350 || cant_reishi == 500)
					{
						kiloAgramo_reishi(stock_reishi,cant_reishi);
						
						console.log (cant_reishi);
						console.log (stock_reishi);
						
						let cantidad = document.createElement("div");
						cantidad.innerHTML = `<p>Se ha registrado con éxito la selección: <br><br>
											 <strong>Cantidad seleccionada:</strong> ${cant_reishi} g <br> 
											 <strong>Stock restante Reishi:</strong> ${stock_reishi} kg <br><br>
											 <button id="guardar">Guardar</button>`;
						document.body.append(cantidad);


						if (stock_reishi <= 5) 
						{
							alert(`Advertencia: El stock de Reishi es bajo. Reponer stock. \n Stock de Reishi restante: ${stock_reishi}kg`);
						}

						ventas += 1;

				//SWEET ALERT PARA MOSTRAR UN RESUMEN Y CONFIRMACIÓN DE LOS DATOS REGISTRADOS

				let guardar = document.getElementById("guardar");
				guardar.addEventListener('click', () => {
   
					Swal.fire({
						position: 'center',
						icon: 'success',
						title: 'Se ha registrado el pedido',
						showConfirmButton: false,
						timer: 3500,
						width: '25%'
					})
					
				})
						
					}
					else 
					{
					alert("Ingrese alguno de los valores mostrados en la lista");
				}

				})

			}
			else 
			{
			alert("Ingrese alguno de los valores mostrados en la lista");
		}

		})

	}
})




//AGREGAR CLIENTES A LA BASE DE DATOS

let miFormulario = document.getElementById("formCliente");
miFormulario.addEventListener("submit", (e) =>{
	e.preventDefault();
	let nombre = document.getElementById("nombre_cliente").value;
	let apellido = document.getElementById("apellido_cliente").value;
	let telefono = document.getElementById("telefono_cliente").value;
	let email = document.getElementById ("email_cliente").value;
	
	//VERIFICO QUE EL CLIENTE A REGISTRAR NO EXISTA EN LA BASE DE DATOS	
	if(carteraClientes.some ((el) => el.nombre == nombre )==true && carteraClientes.some ((el) => el.apellido == apellido )==true)
	{
		Swal.fire({
			icon: 'error',
			title: '¡El cliente ya existe!',
		  });

		  document.getElementById ("formCliente").reset();
	}
	else
	{

		//SI NO EXISTE LO AGREGO
		const persona = new cliente(nombre,apellido,telefono,email);
		
		console.log (persona);
		
		carteraClientes.push(persona);
		
		console.log(carteraClientes);
		
		//Guardo la base de datos de clientes en el session storage	
		
		const carteraClientesJson = JSON.stringify(carteraClientes);
		sessionStorage.setItem("carteraClientes", carteraClientesJson);
		

		Swal.fire({
			icon: 'success',
			title: '¡El cliente ha sido registrado!',
		  });

		document.getElementById ("formCliente").reset();
	}
})

//BUSCAR UN CLIENTE Y MOSTRAR SU DATOS

let btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener ("click", () => {
	let busqueda = document.getElementById ("apellido_cliente").value;
	console.log(busqueda);  //Me devuelve vacío
	
	//Recupero el JSON
	let recupero_clientes = localStorage.getItem("carteraClientes");
	recupero_clientes = JSON.parse(recupero_clientes);

	const resultado = recupero_clientes.filter((el) => el.apellido.includes(busqueda));
	console.log(resultado);


})










/*
//BUSCAR UN CLIENTE EN LA BASE DE DATOS

let btnBuscar = document.getElementById("btnBuscar")
btnBuscar.addEventListener (Click, () => {
	if(carteraClientes.some ((el) => el.apellido == nombre_cliente.value )==true){
		
		let container = document.getElementById("resultado")
		container.innerHTML = `<p>El usuario ${nombre_cliente.value} ya existe!</p>` //no puedo hacer un display de los datos del cliente para mostrar que existe. No me toma la constante persona porque supongo que tiene que existir localmente
		document.body.append(container);
		
		//Recupero el JSON
		let recupero_clientes = localStorage.getItem("carteraClientes");
		console.log(recupero_clientes);
		recupero_clientes = JSON.parse(recupero_clientes);
		console.log(recupero_clientes)
		
	}
	else{
		let container = document.getElementById("resultado")
		container.innerHTML = `<p>No se encontró al cliente ${nombre_cliente.value}</p>` //no puedo hacer un display de los datos del cliente para mostrar que existe. No me toma la constante persona porque supongo que tiene que existir localmente
		document.body.append(container);
}
})

/*	

//Verifico la existencia de un usuario mediante eventos y DOM

let botonValidar = document.getElementById("btnValidar");
botonValidar.addEventListener("click", () => {
	if(carteraClientes.some ((el) => el.apellido == nombre_cliente.value )==true){
		
		let container = document.getElementById("resultado")
		container.innerHTML = `<p>El usuario ${nombre_cliente.value} ya existe!</p>` //no puedo hacer un display de los datos del cliente para mostrar que existe. No me toma la constante persona porque supongo que tiene que existir localmente
		document.body.append(container);
		
		//Recupero el JSON
		let recupero_clientes = localStorage.getItem("carteraClientes");
		console.log(recupero_clientes);
		recupero_clientes = JSON.parse(recupero_clientes);
		console.log(recupero_clientes)
		
	}
	else{
		let container = document.getElementById("resultado")
		container.innerHTML = `<p>No se encontró al cliente ${nombre_cliente.value}</p>` //no puedo hacer un display de los datos del cliente para mostrar que existe. No me toma la constante persona porque supongo que tiene que existir localmente
	document.body.append(container);
}
})
*/