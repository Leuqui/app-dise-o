import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonIcon, IonSpinner, NavController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [ReactiveFormsModule, IonContent, IonIcon, IonSpinner],
})
export class LoginPage {
  private fb = inject(FormBuilder);
  private nav = inject(NavController);

  showPassword = false;
  loading = false;
  errorMsg = '';

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor() {
    addIcons({ arrowBackOutline, eyeOutline, eyeOffOutline });
  }

  showError(name: 'email' | 'password') {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || c.dirty);
  }

  goBack() { this.nav.back(); }
  goRegister() { this.nav.navigateForward('/register'); }
  goForgot() { this.nav.navigateForward('/forgot-password'); }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.fakeLogin();
  }

  loginGoogle() { this.fakeLogin(); }
  loginApple()  { this.fakeLogin(); }

  // Simula un login: muestra el spinner y entra a /home
  private fakeLogin() {
  this.loading = true;
  this.errorMsg = '';
  setTimeout(() => {
    this.loading = false;
    this.nav.navigateRoot('/tabs/inicio');
  }, 800);
}
}