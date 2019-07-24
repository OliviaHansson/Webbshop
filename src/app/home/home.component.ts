import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { IProduct } from '../Interfaces/IProduct';
import { ICategory } from '../Interfaces/ICategory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: IProduct[]; 
  categories: ICategory[];
  selectedCategory: number;

  constructor(private service: DataService) { }
  /*
  search function looking if there's a searchword entered in the input
  box. If not it gets all the products from server, otherwise it returns
  the products with the matching letters/words in movie title.
  */

  search(searchText: string) {
    if(searchText === '') {
      this.service.getData().subscribe(data => {
        this.products = data;
      });
    }
    else {
    this.service.search(searchText).subscribe(data =>{
      this.products = data;
    });
    }
  }
  ngOnInit() {
    if(this.selectedCategory === undefined) {
      this.service.getData().subscribe(data => {
        this.products = data;
      });
      this.service.category().subscribe(data =>{
        this.categories = data;
      });
    }
    else {
      this.service.getData().subscribe(data => {
        this.products = data;
      });
    }
  }
  handleClick() {      
    this.service.getData().subscribe(data => {
      this.products = data.filter(movie => movie.productCategory.some(cat => cat.categoryId == this.selectedCategory));   
    }); 
  }
}
