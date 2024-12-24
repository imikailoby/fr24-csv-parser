export function cleanValue(value: string): string {
  return value.replace(/^"+|"+$/g, '').replace(/\\/g, '');
}

export function detectDelimiter(csvText: string): string {
  const delimiters = [',', ';', '\t', '|'];
  const firstLine = csvText.split(/\r?\n/)[0];

  let bestDelimiter = ',';
  let maxCount = 0;

  delimiters.forEach((delimiter) => {
    const count = firstLine.split(delimiter).length;
    if (count > maxCount) {
      maxCount = count;
      bestDelimiter = delimiter;
    }
  });

  return bestDelimiter;
}
