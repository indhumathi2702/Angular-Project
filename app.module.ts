import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [HeaderComponent, UserComponent, TasksComponent]
})
export class AppModule {}