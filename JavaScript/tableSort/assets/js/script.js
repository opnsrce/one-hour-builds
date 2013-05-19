window.addEventListener('load', function() {
    var table = document.getElementById('roster');
    populateTable(table, 'short');
    bindTableEvents(table);
}, false);