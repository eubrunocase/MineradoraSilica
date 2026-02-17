import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

/** Modelo do formulário de contato */
interface ContactFormData {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  mensagem: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);

  /** Estado de envio */
  protected readonly submitting = signal(false);
  protected readonly submitted = signal(false);

  /** Formulário reativo com validação */
  protected readonly form: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    empresa: ['', [Validators.required, Validators.minLength(2)]],
    telefone: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    mensagem: ['', [Validators.required, Validators.minLength(10)]],
  });

  /** Verifica se um campo tem erro e foi tocado */
  hasError(field: string): boolean {
    const control = this.form.get(field);
    return !!(control?.invalid && control?.touched);
  }

  /** Simula envio do formulário */
  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);

    const data: ContactFormData = this.form.value as ContactFormData;

    // Simulação de envio — será substituído por chamada HTTP real
    console.log('📬 Dados do formulário enviados:', data);

    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
      this.form.reset();

      // Reset mensagem de sucesso após 5 segundos
      setTimeout(() => this.submitted.set(false), 5000);
    }, 1500);
  }
}
