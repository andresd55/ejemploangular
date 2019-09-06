import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fechaActual = new Date();
  nombre='Pablo';
  apellido='Rodriguez';
  edad = 2;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;
  sitio='http://www.google.com';
  dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  
  contador = 1;

  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string;
  artic = null;
  articulosService = null;

  constructor(private http: HttpClient, private articulosServicio: ArticulosService) { }

  ngOnInit() {
    this.http.get("http://scratchya.com.ar/vue/datos.php")
      .subscribe(
        result => {
          this.artic = result;
        },
        error => {
          console.log('problemas');
        }
      );
      this.articulos=this.articulosServicio.retornar();
  }

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma=0;
    for(let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
    return suma;
  }


  art={
    codigo:null,
    descripcion:null,
    precio:null
  }

  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melon', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabaza', precio:20},
              ];

  hayRegistros() {
    return this.articulos.length>0;              
  }

  borrar(art) {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==art.codigo)
      {
        this.articulos.splice(x,1);
        return;
      }
  }

  agregar() {
    for(let x=0;x<this.articulos.length;x++)
    if (this.articulos[x].codigo==this.art.codigo)
    {
      alert('ya existe un articulo con dicho codigo');
      return;
    }        
    this.articulos.push({codigo:this.art.codigo,
                         descripcion:this.art.descripcion,
                         precio:this.art.precio });
    this.art.codigo=null;
    this.art.descripcion=null;
    this.art.precio=null;    
  }

  seleccionar(art) {
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;
  }

  modificar() {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==this.art.codigo)
      {
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio=this.art.precio;
        return;
      }        
    alert('No existe el código de articulo ingresado');
  }


  //constructor() {
    //this.valor1 = this.retornarAleatorio();
    //this.valor2 = this.retornarAleatorio();
    //this.valor3 = this.retornarAleatorio();
  //}

  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    if (this.valor1==this.valor2 && this.valor1==this.valor3)    
      this.resultado='Ganó';
    else
      this.resultado='Perdió';
  }

  mensaje='';

  actualizar(t) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}