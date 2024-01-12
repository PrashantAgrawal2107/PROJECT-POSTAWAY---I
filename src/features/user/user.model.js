export default class UserModel {
    constructor(name, email, password, id) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.id = id;
    }
    
    static SignUp(name,email,password){
        const newUser = new UserModel(name,email,password,users.length+1);
        users.push(newUser);
        return newUser;
    }

    static SignIn(email,password){
        const user = users.find((user)=>user.email==email && user.password==password);
        return user;
    }

    static getAll() {
        return users;
      }
  
  }
  
  let users = [
    {
      id: 1,
      name: 'User 1',
      email: 'user1@postway.com',
      password: 'Password1',
    },
    {
      id: 2,
      name: 'User 2',
      email: 'user2@postway.com',
      password: 'Password2',
    },
  ];