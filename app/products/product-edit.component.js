"use strict";
var forms_1 = require("@angular/forms");
;
var EditProductComponent = (function () {
    function EditProductComponent(productForm, _route, _router, _productService) {
        this.productForm = productForm;
        this._route = _route;
        this._router = _router;
        this._productService = _productService;
        this.pageTitle = 'Edit Product Detail';
        this.EditProductForm = this.productForm.group({
            productName: ["", forms_1.Validators.required],
            productCode: ["", forms_1.Validators.required],
            description: ["", forms_1.Validators.required],
            releaseDate: ["", forms_1.Validators.required],
            price: ["", forms_1.Validators.required]
        });
    }
    EditProductComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProduct(id);
        });
    };
    EditProductComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EditProductComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    return EditProductComponent;
}());
exports.EditProductComponent = EditProductComponent;
//# sourceMappingURL=product-edit.component.js.map