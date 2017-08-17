import {Component} from '@angular/core';

@Component({
    selector: 'books',
    template: `
        <p>{{Title}}</p>
        <ul>
            <li *ngFor="let book of Books;let i = index">
                {{book}} 
                <input *ngIf="flag" value={{book}} #bookEditInput (keyup.enter)="editBook(i,bookEditInput.value)"  />
                <button (click)="removeBook(i)">X</button>                  
                <button (click)="editMode()">Edit</button>
            </li>
        </ul>
        <p>
            <button (click)="editMode()">{{edigButtonText}}</button>
        </p>
        <div>
            <label for="bookName">Enter Book Name:</label>
            <input  placeholder="book name"  [(ngModel)]="bookName" (keyup.enter)="addBook()" />
            <button (click)="addBook()">Add Book</button>            
        </div>
    `
})

export class BooksComponent {
    Title = "Documentary Books";
    Books = ["Grand Canyon","Lean Start up","Founders at Work","Mahatma Ghandi","Nelson Mandela"];
    bookName: string;    
    flag:Boolean = false;
    edigButtonText: string = "Edit Books";

    addBook() {
        this.Books.push(this.bookName);
        this.bookName = "";
    }

    removeBook(i:number) {
        this.Books.splice(i,1);
    }

    editMode()
    {
        if(this.flag == false)
            {
                this.flag = true;
                this.edigButtonText = "Update All";
            }
        else
            {
                this.flag = false;
                this.edigButtonText = "Edit Books";
            }
    }

    editBook(i:number, name:string)
    {
        console.log("book to edit:" + name);        
        this.Books[i] = name;        
        this.flag=false;
        this.edigButtonText = "Edit Books"
    }
}
