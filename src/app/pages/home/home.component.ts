import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/banner/banner.component";
import { ContainerComponent } from "../../shared/container/container.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { CardBuscaComponent } from "../../shared/card-busca/card-busca.component";
import { CardDepoimentosComponent } from "../../shared/card-depoimentos/card-depoimentos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ContainerComponent, FooterComponent, CardBuscaComponent, CardDepoimentosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
