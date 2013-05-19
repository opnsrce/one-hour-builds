window.addEventListener('load', function() {
    var table = document.getElementById('roster');
    populateTable(table, 'full');
    bindTableEvents(table);
}, false);