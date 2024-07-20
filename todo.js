function add() {
    var Input = document.getElementById('name');
    var taskList = document.getElementById('list');

    if (Input.value.trim() !== "") {
        var listItem = document.createElement('li');
        listItem.textContent = Input.value;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETE';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        Input.value = '';
    }
}