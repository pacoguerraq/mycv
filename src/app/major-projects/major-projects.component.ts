import { Component } from '@angular/core';

@Component({
  selector: 'app-major-projects',
  templateUrl: './major-projects.component.html',
  styleUrls: ['./major-projects.component.css']
})
export class MajorProjectsComponent {

  majorProjects: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let project1 = {
      fecha: "2018-2022",
      titulo: "Sitio Web Hermano Mayor",
      ubicacion: "Oaxaca, Mx",
      descripcion: "Sitio desarrollado en Django para socioformador de la asociación del hermano mayor",
    };

    let project2 = {
      fecha: "2020-2023",
      titulo: "Chatbot",
      ubicacion: "San Luis, Mx",
      descripcion: "Chatbot empresarial en angular para Perficient y sus empleados",
    };

    this.majorProjects.push(project1);
    this.majorProjects.push(project2);

  };

}
