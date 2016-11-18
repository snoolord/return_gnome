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
    let button = $('.finish-level-button');
    button.prop('disabled', false);
  }

  disableButton() {
    let button = $('.finish-level-button');
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

    $('.prev-level-button').on('click', function(e) {
      e.preventDefault();
      that.currentLevel--;
      that.setupGame(that.levels[that.currentLevel]);
    });
    $('.next-level-button').on('click', function(e) {
      e.preventDefault();
      that.currentLevel++;
      that.setupGame(that.levels[that.currentLevel]);
    });
  }

  cssField() {
    let cssField = $('textarea');
    let answer = {};
    let semicolon = false;
    let win = 0;
    let that = this;
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
            console.log(style[1]);
            style[1] = style[1].trim();
            style[1] = style[1].slice(0, style[1].length - 1);
          }
        }
        // trims style of all white space
        style.map((st) => {
          st.trim();
        });
        // applys sky with current line of style

        if (semicolon) {
          answer[style[0]] = style[1];
          $('.forest').css(style[0], style[1]);
        }
        if (isEqual(answer, this.levels[this.currentLevel].solution)) {
          if ( win === 0 ) {
            console.log(window.localStorage.completedLevels, "completed levels");
            let completedLevels = [];
            if (window.localStorage.completedLevels.length > 0 ) {
              window.localStorage.completedLevels.split('').forEach((level) => {
                completedLevels.push(parseInt(level));
              });
            }
            console.log(completedLevels);
            console.log(this.currentLevel);
            if (!completedLevels.includes(this.currentLevel)) {
              completedLevels.push(this.currentLevel);
            }
            window.localStorage.completedLevels = completedLevels.join('');
            $('.game').append("<div class='win-level-div'> Next Level! <button class='win-level-button'>Next</button></div>");
            $('.win-level-button').on('click', function(e) {
              e.stopPropagation();
              that.currentLevel++;
              that.setupGame(that.levels[that.currentLevel]);
            });
          }
          $('.win-level-div').addClass('animated bounceInDown');
          win++;
          this.enableButton();
        } else {
          this.disableButton();
        }
        semicolon = false;

      });

    });
  }
  removeStyling() {
    $('textarea').val('');
    $('finish-level-button').prop('disabled', true);
    this.disableButton();
    this.el.removeAttr( 'style' );
    this.el.empty();
    $('.houses').empty();
    $('.instructions').empty();
    $('.css-style').empty();
    $('.win-level-div').remove();
  }
  setupGame(currentLevel) {
    if (this.currentLevel === 0) {
      $('.prev-level-button').prop('disabled', true);
    } else {
      $('.prev-level-button').prop('disabled', false);
    }
    window.localStorage.level = this.currentLevel;
    // Removes all styling from previous level for set up
    this.removeStyling();
    $('.instructions').append(currentLevel.instructions);
    $('.level-text').html(`Level ${this.currentLevel+1} of 5`);
    $('.css-style').append(`<textarea rows='${keys(currentLevel.solution).length} cols='80'></textarea>`);

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
