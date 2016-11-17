import isEqual from 'lodash/isEqual';
import keys from 'lodash/keys';

class Game {
  constructor(levels, $el) {
    this.el = $el;
    this.levels = levels;
    this.currentLevel = 0;
    if (window.localStorage.level !== "0") {
      this.currentLevel = parseInt(window.localStorage.level);
    }
    this.setupGame(this.levels[this.currentLevel]);
    this.buttons();
  }

  enableButton() {
    let that = this;
    let button = $('.finish-level-button');
    button.prop('disabled', false);
  }

  disableButton() {
    let button = $('finish-level-button');
    button.prop('disabled', true);
  }

  buttons() {
    let finishButton = $('.finish-level-button');
    let that = this;
    finishButton.on('click', (e) => {
      e.preventDefault();
      this.currentLevel++;
      this.setupGame(this.levels[this.currentLevel]);
      this.disableButton();
    });
    $('.prev-level-button').on('click', function() {
      that.currentLevel--;
        that.setupGame(that.levels[that.currentLevel]);
    });
    $('.next-level-button').on('click', function() {
      that.currentLevel++;
      that.setupGame(that.levels[that.currentLevel]);
    });
  }

  cssField() {
    let cssField = $('textarea');
    let answer = {};
    let semicolon = false;
    cssField.on('keyup', () => {
      answer = {};
      $('.forest').removeAttr( 'style' );
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
        $('.forest').css(style[0], style[1]);

        if (semicolon) {
          answer[style[0]] = style[1];
        }
        semicolon = false;

      });
      if (isEqual(answer, this.levels[this.currentLevel].solution)) {
        this.enableButton();
      }

    });
  }

  setupGame(currentLevel) {
    if (this.currentLevel === 0) {
      $('.prev-level-button').prop('disabled', true);
    } else {
      $('.prev-level-button').prop('disabled', false);
    }
    window.localStorage.level = this.currentLevel;
    $('textarea').val('');
    console.log(this.el);
    this.el.removeAttr( 'style' );
    this.el.empty();
    $('.houses').empty();
    $('.instructions').empty();
    $('.instructions').append(currentLevel.instructions);
    $('.level-text').html(`Level ${this.currentLevel+1} of 5`);
    $('.css-style').empty();
    $('.css-style').append(`<textarea rows='${keys(currentLevel.solution).length} cols='40'></textarea>`);
    $.fn.extend({
      animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName);
        });
      }
    });

    let houseNumber = currentLevel.houses;
    let houses = $('<div class="houses"></div>');
    for (let i =0; i < houseNumber; i++) {
      let house = $('<img src="../imgs/house.png" class="house"></img>');
      houses.append(house);
    }
    let houseStyling = currentLevel.solution;
    houses.css('display', 'flex');
    for (var key in houseStyling) {
      houses.css(key, houseStyling[key]);
    }
    $('.game').append(houses);
    let gnomes = currentLevel.gnomes;
    for (let i = 0; i < gnomes.length; i++) {
      let gnome = $(`<img src="../imgs/${gnomes[i]}" class="gnome"></img>`);
      gnome.animateCss('pulse');
      this.el.append(gnome);
    }
    this.cssField();
  }
}

export default Game;
