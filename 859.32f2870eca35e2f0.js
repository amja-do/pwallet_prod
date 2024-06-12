"use strict";(self.webpackChunkdemo3=self.webpackChunkdemo3||[]).push([[859],{8859:(P,u,a)=>{a.r(u),a.d(u,{AuthModule:()=>I});var m=a(6814),i=a(6223),d=a(1474),g=a(7304),t=a(9212);const f=["root",""],h=()=>({"background-image":"url(./assets/media/misc/auth-bg.png)"});let v=(()=>{class e{today=new Date;constructor(){}ngOnInit(){}ngOnDestroy(){}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=t.Xpm({type:e,selectors:[["body","root",""]],attrs:f,decls:10,vars:2,consts:[[1,"d-flex","flex-column","flex-lg-row","flex-column-fluid"],[1,"d-flex","flex-column","flex-lg-row-fluid","w-lg-50","p-10","order-2","order-lg-1"],[1,"d-flex","flex-center","flex-column","flex-lg-row-fluid"],[1,"w-75","p-10"],[1,"d-flex","flex-lg-row-fluid","w-lg-50","bgi-size-cover","bgi-position-center","order-1","order-lg-2",3,"ngStyle"],[1,"d-flex","flex-column","flex-center","py-15","px-5","px-md-15","w-100","mt-5"],["src","./assets/media/banners/banner_green.svg","alt","",1,"mx-auto","w-275px","w-md-50","w-xl-500px","mb-10","mb-lg-20"],[1,"text-white","fs-2qx","fw-bolder","text-center","mb-7"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"router-outlet"),t.qZA()()(),t.TgZ(5,"div",4)(6,"div",5),t._UZ(7,"img",6),t.TgZ(8,"h1",7),t._uU(9," Your phone, your wallet "),t.qZA()()()()),2&n&&(t.xp6(5),t.Q6J("ngStyle",t.DdM(1,h)))},dependencies:[m.PC,g.lC],styles:["[_nghost-%COMP%]{height:100%}"]})}return e})();var b=a(1374),c=a(1506);function x(e,l){1&e&&(t.ynx(0),t.TgZ(1,"div",17)(2,"div",18),t._uU(3," The login details are incorrect "),t.qZA()(),t.BQk())}function w(e,l){1&e&&(t.ynx(0),t.TgZ(1,"span",19),t._uU(2," Please wait... "),t._UZ(3,"span",20),t.qZA(),t.BQk()),2&e&&(t.xp6(1),t.Udp("display","block"))}function T(e,l){1&e&&(t.ynx(0),t.TgZ(1,"span",21),t._uU(2,"Continue"),t.qZA(),t.BQk())}function y(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"div",22)(2,"span",23),t._uU(3),t.qZA()(),t.BQk()),2&e){const r=t.oxw().message;t.xp6(3),t.hij(" ",r," ")}}function C(e,l){if(1&e&&t.YNc(0,y,4,1,"ng-container",6),2&e){const r=l.control;t.Q6J("ngIf",r.hasError(l.validation)&&(r.dirty||r.touched))}}const p=(e,l)=>({"is-invalid":e,"is-valid":l}),Z=e=>({validation:"required",message:"Email is required",control:e}),_=e=>({validation:"email",message:"Email is invalid",control:e}),O=e=>({validation:"minLength",message:"Email should have at least 3 symbols",control:e}),E=e=>({validation:"maxLength",message:"Email should have maximum 360 symbols",control:e}),L=e=>({validation:"required",message:"Password is required",control:e}),F=e=>({validation:"minlength",message:"Password should have at least 8 symbols",control:e}),A=e=>({validation:"maxLength",message:"Password should have maximum 100 symbols",control:e}),k=[{path:"",component:v,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class e{fb;authService;route;router;loginForm;emailError;passwordError;hasError;returnUrl;isLoading$;unsubscribe=[];constructor(r,n,o,s){this.fb=r,this.authService=n,this.route=o,this.router=s,this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.emailError=!1,this.passwordError=!1,this.initForm(),this.returnUrl=this.route.snapshot.queryParams["returnUrl".toString()]||"/"}get f(){return this.loginForm.controls}initForm(){this.loginForm=this.fb.group({email:["hassan@gmail.com",i.kI.compose([i.kI.required,i.kI.email,i.kI.minLength(10),i.kI.maxLength(320)])],password:["password",i.kI.compose([i.kI.required,i.kI.minLength(8),i.kI.maxLength(100)])]})}updateEmailError(){this.emailError=!0}updatePasswordError(){this.passwordError=!0}submit(){if(this.loginForm.invalid)return;this.emailError=!1,this.passwordError=!1,this.hasError=!1;const r=this.authService.login(this.f.email.value,this.f.password.value).pipe((0,b.P)()).subscribe(n=>{n?this.router.navigate([this.returnUrl]):this.hasError=!0});this.unsubscribe.push(r)}ngOnDestroy(){this.unsubscribe.forEach(r=>r.unsubscribe())}static \u0275fac=function(n){return new(n||e)(t.Y36(i.qu),t.Y36(c.e),t.Y36(g.gz),t.Y36(g.F0))};static \u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:33,vars:45,consts:[[1,"d-flex","justify-content-center","align-items-center"],[1,"mb-12"],["alt","Logo","src","./assets/media/logos/pwallet.svg",1,"h-60px","ms-n15"],["novalidate","novalidate","id","kt_login_signin_form",1,"form","w-100",3,"formGroup","ngSubmit"],[1,"text-center","mb-11"],[1,"text-gray-900","fw-bolder","mb-3"],[4,"ngIf"],[1,"fv-row","mb-8"],[1,"form-label","fs-6","fw-bolder","text-gray-900"],["type","email","name","email","formControlName","email","autocomplete","off",1,"form-control","bg-transparent",3,"ngClass","keypress"],[1,"text-danger"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"form-label","fw-bolder","text-gray-900","fs-6","mb-0"],["type","password","name","password","autocomplete","off","formControlName","password",1,"form-control","bg-transparent",3,"ngClass","keypress"],[1,"d-grid","mb-10"],["type","submit","id","kt_sign_in_submit",1,"btn","btn-primary",3,"disabled"],["formError",""],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"indicator-label"],[1,"fv-plugins-message-container"],["role","alert"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"a",1),t._UZ(2,"img",2),t.qZA()(),t.TgZ(3,"form",3),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(4,"div",4)(5,"h1",5),t._uU(6," Sign In "),t.qZA()(),t.YNc(7,x,4,0,"ng-container",6),t.TgZ(8,"div",7)(9,"label",8),t._uU(10,"Email"),t.qZA(),t.TgZ(11,"input",9),t.NdJ("keypress",function(){return o.updateEmailError()}),t.qZA(),t.TgZ(12,"div",10),t.GkF(13,11)(14,11)(15,11)(16,11),t.qZA()(),t.TgZ(17,"div",7)(18,"label",12),t._uU(19,"Password"),t.qZA(),t.TgZ(20,"input",13),t.NdJ("keypress",function(){return o.updatePasswordError()}),t.qZA(),t.TgZ(21,"div",10),t.GkF(22,11)(23,11)(24,11),t.qZA()(),t.TgZ(25,"div",14)(26,"button",15),t.YNc(27,w,4,2,"ng-container",6),t.ALo(28,"async"),t.YNc(29,T,3,0,"ng-container",6),t.ALo(30,"async"),t.qZA()()(),t.YNc(31,C,1,1,"ng-template",null,16,t.W1O)),2&n){const s=t.MAs(32);t.xp6(3),t.Q6J("formGroup",o.loginForm),t.xp6(4),t.Q6J("ngIf",o.hasError),t.xp6(4),t.Q6J("ngClass",t.WLB(25,p,o.emailError&&o.loginForm.controls.email.invalid,!o.emailError&&o.loginForm.controls.email.valid)),t.xp6(2),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(28,Z,o.loginForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(30,_,o.loginForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(32,O,o.loginForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(34,E,o.loginForm.controls.email)),t.xp6(4),t.Q6J("ngClass",t.WLB(36,p,o.passwordError&&o.loginForm.controls.password.invalid,!o.passwordError&&o.loginForm.controls.password.valid)),t.xp6(2),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(39,L,o.loginForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(41,F,o.loginForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(43,A,o.loginForm.controls.password)),t.xp6(2),t.Q6J("disabled",o.loginForm.invalid),t.xp6(1),t.Q6J("ngIf",t.lcZ(28,21,o.isLoading$)),t.xp6(2),t.Q6J("ngIf",!1===t.lcZ(30,23,o.isLoading$))}},dependencies:[m.mk,m.O5,m.tP,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,m.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]})}return e})(),data:{returnUrl:window.location.pathname}},{path:"logout",component:(()=>{class e{authService;constructor(r){this.authService=r,this.authService.logout()}ngOnInit(){}static \u0275fac=function(n){return new(n||e)(t.Y36(c.e))};static \u0275cmp=t.Xpm({type:e,selectors:[["app-logout"]],decls:2,vars:0,template:function(n,o){1&n&&(t.TgZ(0,"p"),t._uU(1,"logout works!"),t.qZA())}})}return e})()},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}]}];let U=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=t.oAB({type:e});static \u0275inj=t.cJS({imports:[g.Bz.forChild(k),g.Bz]})}return e})();var Q=a(3660);let I=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=t.oAB({type:e});static \u0275inj=t.cJS({imports:[m.ez,Q.q,U,i.u5,i.UX,d.JF]})}return e})()}}]);