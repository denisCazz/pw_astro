# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

----- FINE README relativo ad AstroJS (incluso al momento dell'init del progetto) ---------------------------------------

------INIZIO PARTE PERSONALIZZATA RELATIVA AL PROGETTO ------------------------------------------------------------------

## 📝 Descrizione del Progetto

Il progetto è un sito web creato utilizzando Astro per rispondere ai requisiti della traccia 3.1 del project work di Unipegaso.
Il sito è dedicato alla presentazione e al download dei report di sostenibilità dell'azienda Lavazza. 
Di seguito una panoramica di come funziona il progetto:

### Struttura del Progetto

Il progetto è organizzato in diverse cartelle e file:

- **public/**: Contiene file statici come favicon.
- **src/**: Contiene il codice sorgente del progetto.
  - **layouts/**: Contiene i layout utilizzati nelle pagine, come `Layout.astro`.
  - **pages/**: Contiene le pagine del sito, come `index.astro` e `report.astro`.
  - **components/**: Contiene componenti riutilizzabili come `Navbar.astro`.
  - **scripts/**: Contiene script JavaScript come `report-selector.js`.
  - **styles/**: Contiene file CSS come `tailwind.css`.

### Funzionamento delle Pagine

#### Pagina Principale (`index.astro`)

La pagina principale presenta una sezione di benvenuto, una descrizione del progetto, una descrizione dei report, informazioni su Lavazza e una sezione per il download dei report. La selezione dell'anno per il download dei report è gestita tramite un menu a tendina e uno script JavaScript.

#### Pagina dei Report (`report.astro`)

Questa pagina fornisce informazioni dettagliate sui report di sostenibilità, spiegando cosa sono e quali vantaggi offrono. Include anche un link per tornare alla home page e scaricare i report.

### Script per la Selezione dei Report (`report-selector.js`)

Questo script gestisce la logica per la selezione dell'anno e la visualizzazione del link per il download del report corrispondente. Se l'anno selezionato non è disponibile, viene mostrato un messaggio di errore.

### Layout e Navbar

Il layout (`Layout.astro`) definisce la struttura generale delle pagine, inclusi header, footer e slot per il contenuto principale. La navbar (`Navbar.astro`) include il logo e i link di navigazione principali, con un menu mobile per schermi piccoli.

### Stili

Il progetto utilizza Tailwind CSS per la gestione degli stili, fornendo una base di classi utility per una rapida e facile personalizzazione del design.

### Comandi Utili

- `npm install`: Installa le dipendenze.
- `npm run dev`: Avvia il server di sviluppo locale.
- `npm run build`: Compila il sito per la produzione.
- `npm run preview`: Visualizza in anteprima il sito compilato.

### Esempio di Modifica

Ecco un esempio di come modificare il file `report-selector.js` per aggiungere un nuovo anno disponibile:

```javascript
// filepath: [path_to_folder]/src/scripts/report-selector.js
// ...existing code...
const availableYears = [2022, 2023, 2024]; // Aggiunto l'anno 2024
// ...existing code...
```

### Funzionalità nascosta intrinsica al framework

E' stata predisposta una pagina custom 404, se si vuole provare si puo provare a puntare una volta avviato il progetto
a localhost:4321/test404
