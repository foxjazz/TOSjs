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
var testing_1 = require('@angular/core/testing');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var todo_model_1 = require('./todo.model');
var todolist_component_1 = require('./todolist.component');
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({
            selector: 'as-test',
            template: '<as-todolist></as-todolist>',
            directives: [todolist_component_1.TodolistComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
var testFixture;
var todoCompiled;
var todolistCmp;
describe('TodolistComponent', function () {
    beforeEach(function () {
        testing_1.addProviders([
            forms_1.disableDeprecatedForms(),
            forms_1.provideForms()
        ]);
    });
    it('should have been created successfully', testing_1.async(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
        tcb.createAsync(TestComponent).then(function (fixture) {
            testFixture = fixture;
            fixture.detectChanges();
            todoCompiled = fixture.nativeElement;
            todolistCmp = fixture.debugElement
                .children[0].componentInstance;
            expect(todoCompiled).toBeDefined();
        });
    })));
    it('should add todo successfully', function () {
        todolistCmp.todo = new todo_model_1.Todo('test', true);
        todolistCmp.addTodo();
        testFixture.detectChanges();
        var items = todoCompiled.querySelectorAll('.list-group-item');
        expect(items.length).toEqual(3);
        var item = items[items.length - 1];
        expect(item.querySelector('label').textContent).toEqual(' test');
        expect(item.querySelector('input[type="checkbox"]').value).toBeTruthy();
    });
    it('should delete todo successfully', function () {
        todolistCmp.delTodo(0);
        testFixture.detectChanges();
        expect(todoCompiled.querySelectorAll('.list-group-item').length)
            .toEqual(2);
    });
});
//# sourceMappingURL=todolist.component.spec.js.map