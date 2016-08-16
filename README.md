-# TechXplosion
 -Líder del grupo - Sergio Andrés Pardo Sánchez	sapardo10	Sección 1	sa.pardo10@uniandes.edu.co
 -
 -Juan Camilo Sánchez Rodríguez	jcsanchez16	Sección 1	jc.sanchez16@uniandes.edu.co
 -
 -Juan Sebastián Numpaque Roa	jsnumpaque10	Sección 1	js.numpaque10@uniandes.edu.co
 -
 -Juan Sebastian Sosa Florez	jssosa10	Sección 1	js.sosa10@uniandes.edu.co
 -
 -Nicolás David Muñoz Cuervo	ndmunoz10	Sección 1	nd.munoz10@uniandes.edu.co
 -
 -Juan Manuel Rodríguez Barragán	juanrodriguez32	Sección 1	jm.rodriguez11@uniandes.edu.co
 -
 
 #Documentacion del API
 
 ##Clase Biblioteca
 Objetos:
  ```javascript
 {
    "nombre" : 'Central'       /* Tipo String */
    "id" : 542382304,    		   /* Tipo Long */

}
 ```

Listas:


 ```javascript
[ 
  	{
   	 "nombre" : 'Central'       /* Tipo String */
        "id" : 542382304	    /* Tipo Long */
	},
	{
   	 "nombre" : 'Nacional'       /* Tipo String */
         "id" : 54245,    		   /* Tipo Long */
	}
]
```

###Servicios REST
La descripción del API REST se presenta a continuación:

Método|URI|Acción|Parámetros|Cuerpo|Retorno
:--:|:--:|:--:|:--:|:--:|:--:
**GET**|/bibliotecas|Lista las bibliotecas (READ)|||Colección de bibliotecas
**GET**|/bibliotecas/*:id*|Obtener los atributos de una instancia de Biblioteca(READ)|**@PathParam id**: Número de id de la biblioteca a consultar||Atributos de la instancia de Biblioteca
**POST**|/bibliotecas|Crear una nueva instancia de la entidad Biblioteca (CREATE)||Atributos de la instancia de biblioteca a crear|Instancia de Biblioteca creada, incluyendo su id
**PUT**|/bibliotecas/*:id*|Actualiza una instancia de la entidad  biblioteca (UPDATE)|**@PathParam id**: Identificador del registro|Objeto JSON de  biblioteca|Instancia de  biblioteca actualizada
**DELETE**|/bibliotecas/*:id*|Borra instancia de  biblioteca en el servidor (DELETE)|**@PathParam id**: Identificador del registro||

 ##Clase Blog
 ##Clase MedioPago
 
