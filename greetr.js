;(function (global, $) {
  'use strict'

  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language)
  }

  var supportedLangs = ['en', 'fr']

  var greetings = {
    en: 'Hello',
    fr: 'Bonjour'
  }

  var formalGreetings = {
    en: 'Greetings',
    fr: 'Salutations'
  }

  var logMessages = {
    en: 'Logged in',
    fr: 'Connecté'
  }

  Greetr.prototype = {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    },

    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid Language'
      }
    },

    greeting: function () {
      return greetings[this.language] + ' ' + this.firstName + '!'
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ' ' + this.fullName()
    },

    greet: function (formal) {
      var msg
      if (formal) {
        msg = this.formalGreeting()
      } else {
        msg = this.greeting()
      }
      if (console) {
        console.log(msg)
      }
      return this
    },

    log: function () {
      if (console) {
        console.log(this.logMessages[this.language] + ': ' + this.fullName())
      }
      return this
    },

    setLang: function (newLang) {
      this.language = newLang || this.language
      this.validate()
      return this
    },

    setHTMLText: function (selector,formal) {
      if(formal){
        $(selector).text(this.formalGreeting())
      }
      else{
        $(selector).text(this.greeting())
      } 
      return this;
    }
  }

  Greetr.init = function (firstName, lastName, language) {
    var self = this
    self.firstName = firstName || ''
    self.lastName = lastName || ''
    self.language = language || 'en'
    self.logMessages = logMessages
    self.validate()
  }

  Greetr.init.prototype = Greetr.prototype

  global.G$ = global.Greetr = Greetr
})(window, jQuery);
