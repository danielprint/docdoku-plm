var DocumentTagListView = ListView.extend({
	ItemView: DocumentListItemView,
	tagName: "div",
	template_el: "#document-list-tpl",
	events: {
		"click tbody tr input": "itemSelectClicked",
		"click .actions .checkout": "checkout",
		"click .actions .undocheckout": "undocheckout",
		"click .actions .checkin": "checkin",
		"click .actions .delete": "delete"
	},
	initialize: function () {
		this.documentTagListViewBindings();
	},
	documentTagListViewBindings: function () {
		this.listViewBindings();
		_.bindAll(this,
			"itemSelectClicked",
			"checkout", "undocheckout", "checkin",
			"delete");
	},
	renderAfter: function () {
		$(this.el).find(".actions .new").remove();
	},
	itemSelectClicked: function () {
		if ($(this.el).find("input.select[type=checkbox]").filter(":checked").length > 0) {
			$(this.el).find(".actions .delete").show();
			$(this.el).find(".actions .checkout-group").show();
		} else {
			$(this.el).find(".actions .delete").hide();
			$(this.el).find(".actions .checkout-group").hide();
		}
	},
	checkout: function () {
		_.each(this.itemViews, function (view) {
			view.checkout();
		});
	},
	undocheckout: function () {
		_.each(this.itemViews, function (view) {
			view.undocheckout();
		});
	},
	checkin: function () {
		_.each(this.itemViews, function (view) {
			view.checkin();
		});
	},
	delete: function () {
		_.each(this.itemViews, function (view) {
			view.delete();
		});
		return false;
	}
});
