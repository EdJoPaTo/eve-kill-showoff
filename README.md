# Eve Kill Showoff

This project is mainly done for [Bombers Bar](http://bombersbareve.com), a EVE Online NPSI community for cloakies.
Because all players are not in one corporation or alliance its hard to track actual kills of Bombers Bar with tools like [zKillboard](https://zkillboard.com).

This page want to show kills by a simple list of kill ids instead of grabbing them from pilots, corporations or alliances.

![EVE Kill Showoff Screenshot](https://raw.githubusercontent.com/EdJoPaTo/eve-kill-showoff/master/screenshot.jpg)

## Host a showoff on your own

- Download the files from the current [Release](https://github.com/EdJoPaTo/eve-kill-showoff/releases).
- Host them on your webserver (nginx does that pretty well for static content).
- modify `assets/kills.json` with your own kill ids to show.
  - Tip: The list (json) can easily be edited from scripts.

## Development

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build and `--aot` flag for Ahead of time compilation (fast load times in production).

### Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
