var roster; // Holds JSON data used to populate table


/**
 * Populates the passed in tableElement with data from the specified roster.
 * @param {object} tableElement The table element to populate.
 * @param {string} rosterType The type of roster to populate the table with.
 */
function populateTable(tableElement, rosterType) {
    'use strict';

    var records,
        numRecords,
        tbody,
        idCell,
        firstNameCell,
        lastNameCell,
        cityCell,
        ageCell,
        row,
        i,
        person;

    switch (rosterType) {
        case 'short':
            roster = shortRoster;
            break;
        case 'full':
            // TODO implement full roster
            break;
        default:
            throw exception('Unable to load roster type ' + rosterType + ': roster type invalid');
    }

    records = roster.result;
    numRecords = records.length;
    tbody = tableElement.querySelector('tbody');
    tbody.innerHTML = '';
    for (i = 0; i <= numRecords - 1; i += 1) {
        person = records[i];
        row = document.createElement('tr');
        tbody.appendChild(row);
        idCell = document.createElement('td');
        firstNameCell = document.createElement('td');
        lastNameCell = document.createElement('td');
        cityCell = document.createElement('td');
        ageCell = document.createElement('td');
        idCell.textContent = person.id;
        firstNameCell.textContent = person.firstName;
        lastNameCell.textContent = person.lastName;
        cityCell.textContent = person.city;
        ageCell.textContent = person.age;
        row.appendChild(idCell);
        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(cityCell);
        row.appendChild(ageCell);
    }
}

/**
 * Sorts the roster by the passed in property
 *
 * @param {type} property The property to sort the roster by.
 * @returns {function}
 */
function sortRoster(property) {
    'use strict';
    return function (a, b) {
        var sortStatus = 0;
        if (a[property] < b[property]) {
            sortStatus = -1;
        } else if (a[property] > b[property]) {
            sortStatus = 1;
        }

        return sortStatus;
    };
}

/**
 * The handler for each <th>'s click event
 */
function headerClickHandler() {
    'use strict';
    var property = this.dataset.property;

    roster.result.sort(sortRoster(property));
    populateTable(this.parentNode.parentNode.parentNode, 'short');
}

/**
 * Binds all necessary event handlers to the passed in table element.
 *
 * @param {object} tableElement The table elment to bind the events to.
 */
function bindTableEvents(tableElement) {
    'use strict';
    var tableHeaders = tableElement.querySelectorAll('thead tr th'),
        numTableHeaders = tableHeaders.length,
        tableHeader,
        i;

    for (i = 0; i <= numTableHeaders - 1; i += 1) {
        tableHeader = tableHeaders[i];
        tableHeader.addEventListener('click', headerClickHandler, false);
    }
}