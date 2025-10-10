import { Component, OnInit } from '@angular/core';
import { BannerComponent } from "../../shared/banner/banner.component";
import { ContainerComponent } from "../../shared/container/container.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { CardBuscaComponent } from "../../shared/card-busca/card-busca.component";
import { CardDepoimentosComponent } from "../../shared/card-depoimentos/card-depoimentos.component";
import { FormBuscaComponent } from "../../shared/form-busca/form-busca.component";
import { PromocaoService } from '../../core/services/promocao.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ContainerComponent, FooterComponent, CardBuscaComponent, CardDepoimentosComponent, FormBuscaComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor (){}

  ngOnInit(): void {}
}
