document.addEventListener('DOMContentLoaded', () => {
  const availableYears = [];
  const selectElement = document.querySelector('#year-select');
  const outputElement = document.querySelector('#output');

  //gestione errori, se non ho report disponibili mostro una scritta di errore
  selectElement.addEventListener('change', (event) => {
    const selectedYear = event.target.value;
    if (!selectedYear) {
      outputElement.innerHTML = '<p class="text-gray-600">Seleziona un anno per visualizzare il report.</p>';
      return;
    }

    // Controllo se l'anno selezionato è presente nell'array availableYears definito a inizio script e se è presente mostro il link per scaricare il report
    if (availableYears.includes(Number(selectedYear))) {
      outputElement.innerHTML = `
        <div>
          <p class="mb-4">Ecco il report per l'anno ${selectedYear}:</p>
          <a
            href="/reports/report_${selectedYear}.pdf"
            class="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            download
          >
            Scarica il report ${selectedYear}
          </a>
        </div>
      `;
    } else {
      outputElement.innerHTML = '<p class="text-red-600">Nessun report disponibile per l\'anno selezionato.</p>';
    }
  });
});
