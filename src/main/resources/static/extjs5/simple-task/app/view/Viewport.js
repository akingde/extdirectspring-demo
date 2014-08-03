Ext.define('SimpleTasks.view.Viewport', {
	extend: 'Ext.container.Viewport',

	layout: 'border',

	items: [ {
		xtype: 'tasksToolbar',
		region: 'north'
	}, {
		xtype: 'listTree',
		region: 'west',
		width: 300,
		collapsible: true,
		split: true
	}, {
		region: 'center',
		xtype: 'taskGrid',
		title: 'All Lists'
	} ]

});