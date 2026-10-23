# Build your own website, free (working title)

A plain-words guide for non-technical people who want a blog or small-business site with nothing for hackers to attack. The reader uses a free chat assistant to write plain HTML, saves the files with GitHub's web editor, and publishes on GitHub Pages. No installs, no terminal, no accounts beyond GitHub.

The guide is itself plain HTML: no frameworks, no package managers, no trackers, no third-party scripts, no CDN links, no outside fonts.

## What's here

| File | What it is |
|---|---|
| `index.html` | The guide: one long page, nine steps, copy-paste prompts |
| `style.css` | Styles for the guide, including dark mode and print |
| `script.js` | Copy buttons for the prompt boxes, nothing else |
| `images/` | Screenshots (placeholders for now) |
| `examples/site/` | A sample reader site, the target the prompts aim for |
| `.nojekyll` | Tells GitHub Pages not to run Jekyll on these files |

## Rules for this repo

- **Never rename an `id`.** Every heading has a hand-written `id` so sections can be linked. Once a link to one exists somewhere, changing it silently breaks that link. Add new ids freely; leave old ones alone.
- **No inline CSS or JS.** Styles live in `style.css` and the one script in `script.js`. Every page carries a `<meta http-equiv="Content-Security-Policy">` tag that only allows files from the same site, which is how a site on GitHub Pages gets a content security policy without being able to set HTTP headers. An inline `<style>`, `<script>`, or `onclick` will be blocked by it.
- **Nothing loads from another website.** No fonts, images, scripts, analytics, or embeds. Links to other sites are fine.
- **Plain words.** If a step shows jargon (commit, repository, branch), it has to be renamed or explained on the spot.

## Preview it locally

Opening `index.html` directly works for reading. To test it the way a browser will see it online, serve the folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Quick checks

```bash
grep -nE '<style|style=|onclick=' index.html
grep -nE '(src|href)="https?://' index.html | grep -v '<a '
```

Both should print nothing.

## Publishing the guide itself

Push the repo to GitHub, then turn on GitHub Pages under Settings, then Pages, using the `main` branch and the `/ (root)` folder. It will appear at `your-username.github.io/repo-name/`.

## Still to do

- [ ] Follow all nine steps in a fresh GitHub account. The button names in the guide (New repository, Create new file, Copy raw file, History, Download ZIP) were written from memory and may have changed.
- [ ] Replace the screenshot placeholders, dated 2026-10-23, with real screenshots that have one circled element each.
- [ ] Try each prompt on two or three free chat assistants and note what they get wrong.
- [ ] Click a Copy button in a real browser and confirm the "Copied" message. Only the fallback path has been tested.
- [ ] Write the example site in `examples/site/` and use it to check real assistant output.
- [ ] Pick a name and update the title and this README.
- [ ] Later: your own explanations of HTML and CSS, as pages linked from the table of contents.

## License

[Creative Commons Attribution 4.0 International](LICENSE). Copy it, change it, translate it, share it, or sell it, as long as you credit the original.

Not affiliated with GitHub or any chat assistant company.
