import { Component , computed, EventEmitter, Input, Output, output} from '@angular/core';
import { type User} from './user.module';
import { CardComponent } from "../shared/card/card.component";
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();


  // select=output<string>();


  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
