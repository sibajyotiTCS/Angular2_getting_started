"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var LoginPage = (function () {
    function LoginPage(fb, _router) {
        this.fb = fb;
        this._router = _router;
        this.loginForm = new forms_1.FormGroup({
            email: new forms_1.FormControl("email", forms_1.Validators.required),
            password: new forms_1.FormControl("password", forms_1.Validators.required),
        });
    }
    LoginPage.prototype.doLogin = function () {
        console.log(this.loginForm.value);
        if (this.loginForm.value.email == 'Shady@gmail.com'
            && this.loginForm.value.password == '2015') {
            this._router.navigate(['/products']);
        }
        else {
            this._router.navigate(['/welcome']);
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    core_1.Component({
        selector: 'login-page',
        templateUrl: 'app/login/login-page.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router])
], LoginPage);
exports.LoginPage = LoginPage;
//# sourceMappingURL=login-form.component.js.map