import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var FoodComponent = /** @class */ (function () {
    function FoodComponent() {
        this.bestFood = {
            name: "strawberry",
            color: "red",
            quantity: 20,
            quality: 20
        };
    }
    FoodComponent.prototype.ngOnInit = function () {
    };
    FoodComponent = tslib_1.__decorate([
        Component({
            selector: 'app-food',
            templateUrl: './food.component.html',
            styleUrls: ['./food.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FoodComponent);
    return FoodComponent;
}());
export { FoodComponent };
//# sourceMappingURL=food.component.js.map