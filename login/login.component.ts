import { ChangeDetectorRef, Component } from '@angular/core';
import { ResponsiveService } from '../../../services/responsive.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public _responsiveService: ResponsiveService){}


}
