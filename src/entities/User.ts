import { uuid } from "uuidv4";

class User{
  public readonly id:string;
  public name: string;
  public email: string;
  public password: string;

  // Omit pega todas as propriedades menos a propriedade passado como segundo parâmetro
  constructor (props:Omit<User,"id">, id?:string){// id opcional pq pode ser que o usuário não estaja criado no bd
    /* this.name= props.name;
    this.email= props.email;
    this.password= props.password; */
    Object.assign(this,props); // faz a mesma coisa que o código acima
    if(!id){
      this.id = uuid();
    }
  }

}
export {User}