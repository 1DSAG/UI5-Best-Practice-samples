sap.ui.define([
	"ui5/sandbox/controller/MainView.controller"
], function(
	MainView
) {
	"use strict";

	QUnit.module("MainViewController", {
		beforeEach: function () {
			this.MainView = new MainView();
			sinon.stub(this.MainView, "returnFromCallMe", function () {
				return "stub";
			});
		},

		afterEach: function () {
      sinon.restore();
		}
	}, function () {
		QUnit.test("Should demonstrate how general stubs can be used", function (assert) {
			assert.strictEqual(this.MainView.callMe(), "stub", "Return value of callMe function should be from stub, but was from implmentation");
		});

    QUnit.test("Should demonstrate how inline stubs can be used", function (assert) {
      var stub = sinon.stub(this.MainView, "conditionalWithinAFunction", function () {
        return false;
      });
      assert.strictEqual(this.MainView.callMe(), 1);
      assert.strictEqual(stub.callCount, 1, "The conditionalWithinAFunction function has been successfully called");
    });
	});
});
