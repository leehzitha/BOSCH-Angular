import { Routes } from '@angular/router';
import { MainPage } from './features/main-page/main-page';
import { LoginPage } from './features/login-page/login-page';
import { RegisterPage } from './features/register-page/register-page';
import { WelcomePage } from './features/welcome-page/welcome-page';
import { authGuard } from './domain/auth-guard';

export const routes: Routes = [
    {path: "", component:WelcomePage, canMatch: [], children : [
        // {path: ":id", component:especi}
    ]
    },
    {path: "login", component:LoginPage},
    {path: "paint", component: MainPage, canMatch: [authGuard]},
    {path: "register", component: RegisterPage}
];
