import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  workExperience: Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let work1 = {
      fecha: "2018-2022",
      ubicacion: "Monterrey, Mx",
      puesto: "Desarrollador FullStack",
      empresa: "Waves",
      logros: [
        { descripcion: "Dron autonomo" },
        { descripcion: "Cluster GPU" },
      ]
    };

    let work2 = {
      fecha: "2020-2023",
      ubicacion: "Monterrey, Mx",
      puesto: "SDE Tester",
      empresa: "GUUD",
      logros: [
        { descripcion: "Dron autonomo" },
        { descripcion: "Cluster GPU" },
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);

  };

}
