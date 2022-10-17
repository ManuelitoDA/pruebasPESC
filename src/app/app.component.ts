import { Component } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { Persona } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebasPESC';

  personaArray: Persona[] = [
    {
      name: 'manuel',
      last_name: 'del angel',
      age: 23,
      phoneNumber: 8334314828
    },
    {
      name: 'Raul',
      last_name: 'Dominguez hdz',
      age: 23,
      phoneNumber: 8334314828
    },
    {
      name: 'Brandon',
      last_name: 'Martinez vicencio',
      age: 23,
      phoneNumber: 8334314828
    }
  ]

  addNewPerson() {
    const newPersona: Persona = {
      name: this.inputName,
      last_name: this.inputLastName,
      age: this.inputAge,
      phoneNumber: this.inputPhoneNumber
    }

    this.personaArray.push(newPersona)
  }

  inputName: string = ""
  inputLastName: string = ""
  inputAge: number = 0
  inputPhoneNumber: number = 0

  nameBuscar: string = ""
  nameBoolean: boolean = true //false es sin valor de busqueda

  buscar() {
    if (this.nameBuscar != "") {
      this.nameBoolean = true
    } else {
      this.nameBoolean = false
    }
  }

  buscarValue(nameBuscar: string) {
    const re = /^$/
    this.nameBuscar = nameBuscar
    if (!re.exec(this.nameBuscar)) {
      return true
    }
    else return false
  }


}
