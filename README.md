# GuardianClone
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.1.

## Planning
### Components Needed
- top menu bar
  - top row
    - make a contriubution (hover animation: grow and turn red)
    - subscribe
    - find a job
    - sign in
    - search - modal with input
    - logo (back to home)
    - us edition - menu
      - us edition
      - uk edition
      - australia edition
      - international edition
  - middle row
    - clicking on any of the first five headings switches the articles displayed below as well as populating the bottom row with the related subcategories
    - news - bottom row becomes:
      - US
      - world
      - environment
      - soccer
      - us midterms 2018
      - business
      - tech
      - science
    - opinion - bottom row becomes:
      - the guardian view
      - columnists
      - letters
      - opinion videos
      - cartoons
    - sport - bottom row becomes:
      - soccer
      - nfl
      - tennis
      - mlb
      - mls
      - nba
      - nhl
    - culture - bottom row becomes:
      - film
      - books
      - music
      - art & design
      - TV & radio
      - stage
      - classical
      - games
    - lifestyle - bottom row becomes:
      - fashion
      - food
      - recipes
      - love & sex
      - home & garden
      - health & fitness
      - family
      - travel
      - money
    - more
      - when clicked, pops out menu that shows all sub-categories in columns
      - more column contains:
        - video
        - podcasts
        - pictures
        - newsletters
        - inside the guardian
        - guardian weekly
        - crosswords
- headlines
  - top row contains:
    - title and date
    - search (auto-populated with local city)
    - weather
  - content area contains:
    - grid of articles
    - top story is big and has related stories tied to it
    - column of 7 stories on right
    - other big story (and 1 related story) on left below animation
    - column between the two listed above of four stories
    - only the top (literally on top) story in any group gets an image
- spotlight
- opinion
- sports
- culture
- video
- across the country
- around the world
- explore
- in pictures
- most viewed


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
