export class Categorie {
    codec!: number;
    nomCat!: string;
    description!: string;
  
    constructor(codec: number, nomCat: string, description: string) {
      this.codec = codec;
      this.nomCat = nomCat;
      this.description = description;
    }
  }
  