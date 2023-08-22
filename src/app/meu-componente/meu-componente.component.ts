import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.apiService.getUsuarios().subscribe((data: any) => {
      this.usuarios = data;
    });
  }

  adicionarComponente(): void {
    // Lógica para adicionar um novo componente
  }

  adicionarMaterial(): void {
    // Lógica para adicionar Material Angular
  }

  adicionarPWA(): void {
    // Lógica para adicionar suporte a PWA
  }

  adicionarDependencia(): void {
    // Lógica para adicionar dependência
  }

  executarTestes(): void {
    // Lógica para executar testes
  }

  construirApp(): void {
    // Lógica para construir o aplicativo para produção
  }
}
