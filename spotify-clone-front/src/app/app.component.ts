import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, inject, OnInit } from '@angular/core';
import { fontAwesomeIcons } from './shared/font-awesome-icons';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule], // Modifié
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.initFontAwesome();
  }
  title = 'spotify-clone-front';
   
  private faIconLibrary: FaIconLibrary = inject(FaIconLibrary);

  private initFontAwesome(): void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
