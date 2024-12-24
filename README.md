# @imikailoby/fr24-csv-parser

A CSV parser for files exported from [myFlightRadar24](https://my.flightradar24.com/), returning structured flight data
including airports, aircraft, and related information.

## Installation

```zsh
# via yarn
yarn add @imikailoby/fr24-csv-parser

# via npm
npm install @imikailoby/fr24-csv-parser
```

## Usage

1. Import the `FRParser` class into your project.
2. Call the `.parse(yourCsvString)` method, passing in the CSV content.

Example:

```html
<input type="file" id="csvInput" accept=".csv" />
<script type="module">
  import { FRParser } from '@imikailoby/fr24-csv-parser';

  const frParser = new FRParser();
  const fileInput = document.getElementById('csvInput');

  fileInput.addEventListener('change', () => {
    const files = fileInput.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target?.result;
      const result = frParser.parse(content);
      // Do something with the parsed data...
    };

    reader.readAsText(file);
  });
</script>
```
