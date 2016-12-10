# Eve Kill Showoff

This project is mainly done for [Bombers Bar](http://bombersbareve.com), a EVE Online NPSI community for cloakies.
Because all players are not in one corporation or alliance its hard to track actual kills of Bombers Bar with tools like [zKillboard](https://zkillboard.com).

This page want to show kills by a simple list of kill ids instead of grabbing them from pilots, corporations or alliances.

![EVE Kill Showoff Screenshot](https://raw.githubusercontent.com/EdJoPaTo/eve-kill-showoff/master/screenshot.jpg)

## Host a showoff on your own

- Download the dist.zip from the current [Release](https://github.com/EdJoPaTo/eve-kill-showoff/releases).
- Host the files on your webserver (nginx does that pretty well for static content).
- Enable HTML5 routing in your webserver (in other words: use the `index.html` as the fallback option)
  - nginx: use the `index.html` like a 404 page at the end of the `try_files` block:
    ```
    location ~ /* {
      try_files $uri $uri/ /index.html;
    }
    ```

  - Apache 2.2.16 and higher: Add `FallbackResource /index.html` ([FallbackResource](https://httpd.apache.org/docs/2.2/mod/mod_dir.html#fallbackresource)) to the config or the `htaccess` file in the same folder besides the `index.html`.

    - If that does not work (had one case, don't now why, the documentation said the version is 2.4), use this rules instead:

    ```
    RewriteEngine on

    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^ index.html [L]
    ```

- modify `assets/config.json` with your own settings (title, logo, background)
  - `hero.kills` has to return a json array of kill IDs such as `/assets/kills.json`.
- modify `assets/kills.json` with your own kill ids to show.
  - Tip: The list (json) can easily be edited from scripts or changed to an own webserver.

## Thanks to

This project was realized with the [zKillboard API](https://github.com/zKillboard/zKillboard/wiki/API-(Killmails)), [ESI (EVE Swagger Interface)](https://esi.tech.ccp.is/) and the [EVE Image Server](https://eveonline-third-party-documentation.readthedocs.io/en/latest/imageserver/intro.html)

## Development

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build and `--aot` flag for Ahead of time compilation (fast load times in production).

### Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
