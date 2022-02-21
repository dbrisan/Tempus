"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var angular_1 = require("@ionic/angular");
var explore_container_module_1 = require("../explore-container/explore-container.module");
var tab1_page_1 = require("./tab1.page");
describe('Tab1Page', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [tab1_page_1.Tab1Page],
            imports: [angular_1.IonicModule.forRoot(), explore_container_module_1.ExploreContainerComponentModule]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(tab1_page_1.Tab1Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tab1.page.spec.js.map