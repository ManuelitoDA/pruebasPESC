import { Component } from '@angular/core';
import { Persona } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebasPESC';

  inputSearch = '';

  personasArray : Persona[] = [
    { nombre: 'Raul', apellido: 'Dominguez', edad: 22, telefono: 8334496531 },
    { nombre: 'Miguel', apellido: 'Del Angel', edad: 23, telefono: 8331383950 },
    { nombre: 'Brandon', apellido: 'Vicencio', edad: 21, telefono: 8334536574 },
    { nombre: 'Gerardo', apellido: 'Mendez', edad: 21, telefono: 8334536574 }
  ];

  personas : Persona[] = []

  newName = '';
  newLastName = '';
  newAge = 0;
  newPhoneNumber = 0;

  constructor() { }

  ngOnInit(): void {
    this.buscarPersona();
  }

  addPerson(){
    const newPerson: Persona = {
      nombre: this.newName,
      apellido: this.newLastName,
      edad: this.newAge,
      telefono: this.newPhoneNumber
    }
    this.personasArray.push(newPerson);
  }

  buscarPersona(){
    setTimeout(() => {
      if(this.inputSearch == ''){
        this.personas = this.personasArray; 
      }else{
        let personasBuscadas: Persona[] = [];
        this.personasArray.forEach((personaNombre) => {
          if(personaNombre.nombre.trim().toLowerCase().includes(this.inputSearch.toLowerCase().trim())){
            personasBuscadas.push(personaNombre);
          }
        });
        this.personas = personasBuscadas;
      }
    }, 1)
  }

}
