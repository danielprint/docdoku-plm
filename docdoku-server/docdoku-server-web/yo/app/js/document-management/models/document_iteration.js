/*global _,define,App*/
define([
	'backbone',
	'common-objects/utils/date',
	'common-objects/collections/attribute_collection',
	'common-objects/collections/file/attached_file_collection'
], function (Backbone, date, AttributeCollection, AttachedFileCollection) {
	'use strict';
	var DocumentIteration = Backbone.Model.extend({

		url: function () {
			if (this.getIteration()) {
				return this.baseUrl() + '?configSpec=' + App.config.configSpec;
			}
			return this.collection.baseUrl();
		},

		baseUrl: function () {
			return this.collection.baseUrl() + '/' + this.getIteration();
		},

		initialize: function () {

			this.className = 'DocumentIteration';

			var attributes = new AttributeCollection(this.get('instanceAttributes'));

			var filesMapping = _.map(this.get('attachedFiles'), function (fullName) {
				return {
					'fullName': fullName,
					shortName: _.last(fullName.split('/')),
					created: true
				};
			});
			var attachedFiles = new AttachedFileCollection(filesMapping);

			//'attributes' is a special name for Backbone
			this.set('instanceAttributes', attributes);
			this.set('attachedFiles', attachedFiles);
		},

		defaults: {
			attachedFiles: [],
			instanceAttributes: []
		},

		getAttachedFiles: function () {
			return this.get('attachedFiles');
		},

		getAttributes: function () {
			return this.get('instanceAttributes');
		},

		getWorkspace: function () {
			return this.get('workspaceId');
		},

		getReference: function () {
			App.log('deprecated use getId');
			return this.getId();
		},
		getId: function () {
			return this.get('id');
		},

		getIteration: function () {
			return this.get('iteration');
		},

		getDocumentMasterId: function () {
			return  this.get('documentMasterId');
		},

		getDocumentRevisionVersion: function () {
			return  this.get('documentRevisionVersion');
		},

		// TODO rename getDocumentRevisionKey
		getDocKey: function () {
			return  this.getDocumentMasterId() + '-' + this.getDocumentRevisionVersion();
		},

		getLinkedDocuments: function () {
			return this.get('linkedDocuments');
		},

		getDocumentMasterPermalink: function () {
			return encodeURI(
					window.location.origin +
					App.config.contextPath +
					'/documents/' +
					this.getWorkspace() +
					'/' +
					this.getDocumentMasterId() +
					'/' +
					this.getDocumentRevisionVersion()
			);
		},

		/**
		 * file Upload uses the old servlet, not the JAXRS Api         *
		 * return /files/{workspace}/documents/{docId}/{version}/{iteration}/
		 * @returns string
		 */
		getUploadBaseUrl: function () {
			return App.config.contextPath + '/files/' + this.getBaseName() + '/';
		},

		getBaseName: function () {
			return this.getWorkspace() + '/documents/' + this.getDocumentMasterId() + '/' + this.getDocumentRevisionVersion() + '/' + this.getIteration();
		}
	});
	return DocumentIteration;
});
