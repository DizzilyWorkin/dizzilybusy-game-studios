# DizzilyBusy Game Studios website

A responsive, animated, three-page studio website built with plain HTML, CSS and JavaScript. It is designed for GitHub Pages and does not need a build step, npm, a server, or a framework.

## Preview locally

Open `index.html` in a browser, or from this folder run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Before publishing

1. Open `js/config.js`.
2. Replace `your-email@example.com` with the email address you want to receive messages at.
3. Check the wording on the Home and About pages and edit anything that doesn't sound like you.
4. Test all three pages on desktop and mobile.

The contact form uses `mailto:`. It opens the visitor's configured email application; it does not send messages through a server. A hosted form service can be added later if you want submissions without the visitor opening an email app.

## Publish with GitHub Pages

1. Create a GitHub repository for the website.
2. Upload the contents of this folder to the repository root (so `index.html` is at the top level).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your publishing branch (usually `main`) and the `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. Your URL will appear in the Pages settings.

If you use a project repository URL such as `username.github.io/repository-name/`, all site links and assets are relative so the site will work from that subpath.

## Files

- `index.html` — Home
- `about.html` — About Us
- `contact.html` — Contact Us
- `css/style.css` — all styling and responsive layouts
- `js/main.js` — navigation, scroll effects and contact form behavior
- `js/config.js` — your contact email setting
- `assets/` — supplied studio logo and emblem
