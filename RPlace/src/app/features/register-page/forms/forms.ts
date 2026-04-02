// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import MockUser, { IUser } from './user.mock';
// import { Button } from '../../../shared/button/button';
// import { FormsModule, NgModel } from '@angular/forms';

// @Component({
//   selector: 'app-forms',
//   standalone: true,
//   imports: [Button, FormsModule],
//   templateUrl: './forms.html',
//   styleUrl: './forms.css',
// })

// export class Forms {

//   protected users: IUser[] = []

//   constructor () {
//     this.users = MockUser;
//   }

//   user: IUser = {
//     username: "",
//     password: ''
//   }

//   @Output()
//   onClick : EventEmitter<IUser | false> = new EventEmitter();

//   @Input()
//   title = "";

//   submit = () => {
//     if (this.isValidName(this.user.username)) {
//       this.onClick.emit(this.user);
//       this.users.push(this.user);
//       console.log("XLickiu");
//     }
//     else {
//       this.onClick.emit(false);
//       console.log("User invalido");
//     }
//     console.log(this.users);
//   }

//     isValidName(value : string) {
//       if (value.trim() === "")
//         return false;

//       return true;
//   }

//   isValidPassword(value: string){
//     if (value.length < 6)
//       return false;
//     return true;
//   }
// }
