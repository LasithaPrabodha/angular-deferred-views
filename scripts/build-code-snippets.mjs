import { getHighlighter } from 'shiki';
import markdown from 'markdown-it';
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { existsSync } from 'node:fs';

const templatePropertyRegex = /template\s*:\s*`((?:[^`\\]|\\.|\n)*)`/;
const templateUrlReplacement = "templateUrl: 'component.html'";

const useCases = [
  'defer-accordion',
  'defer-error',
  'defer-loading-vs-placeholder',
  'defer-multiple',
  'defer-nested',
  'defer-npm-package',
  'defer-on-hover',
  'defer-on-idle',
  'defer-on-immediate',
  'defer-on-interaction',
  'defer-on-timer',
  'defer-on-viewport',
  'defer-prefetch',
  'defer-when-condition',
  'lazy-accordion-content-a',
  'lazy-accordion-content-b',
  'lazy-accordion-content-c',
  'lazy-error',
  'lazy-loading-vs-placeholder',
  'lazy-multiple-a',
  'lazy-multiple-b',
  'lazy-multiple-c',
  'lazy-nested-further',
  'lazy-nested',
  'lazy-on-hover',
  'lazy-on-idle',
  'lazy-on-immediate',
  'lazy-on-interaction',
  'lazy-on-timer',
  'lazy-on-viewport',
  'lazy-prefetch',
  'lazy-shared',
  'lazy-when-condition',
];

const themes = ['light-plus', 'dark-plus'];
const roots = ['../src/app/defer-usecases/', '../src/assets/snippets/'];

const renderers = await Promise.all(
  themes.map((theme) =>
    getHighlighter({ theme, langs: ['typescript', 'blade'] }).then(getRenderer)
  )
);

const [useCasesRoot, assetsRoot] = roots.map(
  (root) => new URL(root, import.meta.url).pathname
);

const useCaseFiles = await readdir(useCasesRoot, {
  recursive: true,
  withFileTypes: true,
  encoding: 'utf8',
}).then((files) =>
  files
    .filter((file) => useCases.some((useCase) => file.name.includes(useCase)))
    .map(({ path, name }) => [join(path, name), name.replace('.ts', '')])
);

for (const [filePath, name] of useCaseFiles) {
  const [typeScriptCode, htmlCode] = await readFile(filePath, {
    encoding: 'utf8',
  }).then(processFileContent);

  const [lightTsOut, lightHtmlOut, darkTsOut, darkHtmlOut] = renderers.flatMap(
    (renderer) => [
      render(renderer, typeScriptCode, 'ts'),
      render(renderer, htmlCode, 'blade'),
    ]
  );

  const useCaseAssetRoot = join(assetsRoot, name, '/');

  if (!existsSync(useCaseAssetRoot)) {
    await mkdir(useCaseAssetRoot);
  }

  await Promise.all([
    writeFile(
      join(useCaseAssetRoot, 'ts.html'),
      lightTsOut.concat('\n', darkTsOut)
    ),
    writeFile(
      join(useCaseAssetRoot, 'html.html'),
      lightHtmlOut.concat('\n', darkHtmlOut)
    ),
  ]);
}

function getRenderer(highligher) {
  return markdown({
    html: true,
    highlight: (code, lang) => highligher.codeToHtml(code, { lang }),
  });
}

function processFileContent(content) {
  const match = content.match(templatePropertyRegex);
  let extractedTemplate = match ? match[1] : '';

  const updatedCode = content.replace(
    templatePropertyRegex,
    templateUrlReplacement
  );

  extractedTemplate = extractedTemplate.replace(/`/g, '').trim();
  const [firstLine, ...lines] = extractedTemplate.split('\n');

  let minIndent = Infinity;

  for (const line of lines) {
    const leadingSpaceCount = line.search(/\S/);
    if (leadingSpaceCount >= 0 && leadingSpaceCount < minIndent) {
      minIndent = leadingSpaceCount;
    }
  }

  const formattedHTML = lines.map((line) => line.slice(minIndent)).join('\n');
  return [updatedCode, firstLine.concat('\n', formattedHTML)];
}

function render(renderer, code, lang) {
  return renderer.render(`
\`\`\`${lang}
${code}
\`\`\`
`);
}
