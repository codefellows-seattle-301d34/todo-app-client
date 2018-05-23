'use strict';

var app = app || {};

(function(module) {
  const taskView = {};

  taskView.initIndexPage = function(ctx) {
    app.showOnly('.task-view');
    let $taskList = $('#task-list');
    $taskList.empty();
    app.Task.all.forEach(task => $taskList.append(task.toHtml()));
  };

  taskView.initAddForm = function() {
    app.showOnly('.add-view');

    $('#add-form').on('submit', function(e) {
      e.preventDefault();

      let task = {
        title: event.target.title.value,
        description: event.target.description.value,
        category: event.target.category.value,
        contact: event.target.contact.value,
        status: event.target.status.value,
      };

      module.Task.createTask(task);
    });
  };

  module.taskView = taskView;
})(app);