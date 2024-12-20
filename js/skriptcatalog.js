const filterInput = document.getElementById('filterInput');
        const items = document.getElementsByClassName('item');
        filterInput.addEventListener('keyup', () => {
            const filterValue = filterInput.value.toLowerCase();
            Array.from(items).forEach(item => {
                item.style.display = item.textContent.toLowerCase().includes(filterValue) ? '' : 'none';
            });
        });