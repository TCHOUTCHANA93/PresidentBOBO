class Book {
    constructor(title,author,description,pages,currentPage,read){
      this.title = title;
      this.author =  author;
      this.description =  description;
      this.pages =  pages;
      this.currentPage = currentPage;
      this.read = read;
    }
  
    readBook(page){
      if(page >=1 && page < this.pages ){
              this.currentPage = page;
              console.log(1);
        return 1;
      }else if(page < 1 || page > this.pages) {
          console.log(0);
          
        return 0;
      }
      else if(page == this.pages){
        this.currentPage = page;
        this.read=true;
        console.log(1);
        return 1;
      }
  
        return "vous etes à la page" + this.currentPage;
    }
  }
  
  let bookUn = new Book('enfant Noir', 'camara laye','loreme is dolor',53,23,false);
  bookUn.readBook(30);
  
  let bookDeux = new Book('enfant Noir', 'camara laye','loreme is dolor',63,21,false);
  bookDeux.readBook(10);
  
  let bookTrois = new Book('enfant Noir', 'camara laye','loreme is dolor',57,27,false);
  bookTrois.readBook(20);
  
// let books = []
//   books.push(bookUn);
//   books.push(bookDeux);
//   books.push(bookTrois);
//   console.log(books);