import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HttpClientModule],
  providers:[HttpClient],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductService
  ) {}
  param: any;
  queryParam: any;

  ngOnInit() {
    // console.log(this.activatedRoute);
    // this.param = this.activatedRoute.snapshot.params['username'];
    // this.queryParam = this.activatedRoute.snapshot.queryParams['course'];
    this.service.getAllProductWithLimit().subscribe({
      next: (data: any) => {
        console.log(data);
      },
    });
  }
}
