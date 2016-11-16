import isEqual from 'lodash/isEqual';

class Game {
  constructor(levels, $el) {
    this.el = $el;
    this.levels = levels;
    this.currentLevel = 0;
    this.setupGame(this.levels[this.currentLevel]);
  }

  enableButton() {
    let that = this;
    let button = $('button');
    button.disable(false);
  }

  disableButton() {
    let button = $('button');
    button.disable(true);
  }

  cssField() {
    let cssField = $('textarea');
    let answer = {};
    let semicolon = false;
    cssField.on('keyup', () => {
      answer = {};
      $('.sky').removeAttr( 'style' );
      let styles = cssField.val().split('\n');
      styles.forEach((sty) => {
        let style = sty.split(':');
        if (style[1]) {
          // on "complete" style flag is triggered to save to answer
          if (style[1].includes(';')) {
            semicolon = true;
          }
          style[1] = style[1].slice(0, style[1].length - 1 ).trim();
        }
        // trims style of all white space
        style.map((st) => {
          st.trim();
        });
        // applys sky with current line of style
        $('.sky').css(style[0], style[1]);

        if (semicolon) {
          answer[style[0]] = style[1];
          console.log(answer);
        }
        semicolon = false;

      });
      console.log(isEqual(answer, this.levels[this.currentLevel].solution));

    });
  }

  setupGame(currentLevel) {
    console.log(currentLevel);
    let birdies = currentLevel.birdies;
    for (let i = 0; i < birdies.length; i++) {
      let birdie = $(`<img src="../imgs/${birdies[i]}" class="bird"><img>`);
      this.el.append(birdie);
    }
    this.cssField();
  }
}

export default Game;
