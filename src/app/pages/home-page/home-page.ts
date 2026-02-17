import { Component } from '@angular/core';

import { HeroSectionComponent } from '../../components/hero-section/hero-section';
import { AboutSectionComponent } from '../../components/about-section/about-section';
import { ProductSectionComponent } from '../../components/product-section/product-section';
import { ApplicationsSectionComponent } from '../../components/applications-section/applications-section';
import { DifferentialsSectionComponent } from '../../components/differentials-section/differentials-section';
import { PricingSectionComponent } from '../../components/pricing-section/pricing-section';
import { ContactFormComponent } from '../../components/contact-form/contact-form';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    ProductSectionComponent,
    ApplicationsSectionComponent,
    DifferentialsSectionComponent,
    PricingSectionComponent,
    ContactFormComponent,
    FooterComponent,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePageComponent {}
