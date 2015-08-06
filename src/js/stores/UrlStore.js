var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var MessageConstants = require('../constants/MessageConstants.js');

var CHANGE_EVENT = 'change';
var AboutMessage = require('../components/views/about.react');
var EducationMessage = require('../components/views/education.react');
var ExperienceMessage = require('../components/views/experience.react');
var SkillsMessage = require('../components/views/skills.react');
var ProjectsMessage = require('../components/views/projects.react');
var ContactMessage = require('../components/views/contact.react');

var add_allowed = true;

var question = {
  'about': {
    text:"Can you present yourself ?",
    pseudo:"Awesome recruiter"
  },
  'education': {
    text:"What is your educational background ?",
    pseudo:"Awesome recruiter"
  },
  'skills': {
    text:"Tell me more about your skills.",
    pseudo:"Awesome recruiter"
  },
  'experience': {
    text:"What about your professional experience ?",
    pseudo:"Awesome recruiter"
  },
  'projects': {
    text:"Do you have some personal projects ?",
    pseudo:"Awesome recruiter"
  },
  'contact': {
    text:"How can I contact you ?",
    pseudo:"Awesome recruiter"
  }
}

var content = {
  'about': {
    text:<AboutMessage/>,
    pseudo:"Anthony Da Mota"
  },
  'education': {
    text:<EducationMessage/>,
    pseudo:"Anthony Da Mota"
  },
  'skills': {
    text:<SkillsMessage/>,
    pseudo:"Anthony Da Mota"
  },
  'experience': {
    text:<ExperienceMessage/>,
    pseudo:"Anthony Da Mota"
  },
  'projects': {
    text:<ProjectsMessage/>,
    pseudo:"Anthony Da Mota"
  },
  'contact': {
    text:<ContactMessage/>,
    pseudo:"Anthony Da Mota"
  }
}

var _messages = [
      ];

function initialize(){
    _messages = [];
    var newItem = {};
    newItem.text = "Hi ! Anyone there ?";
    newItem.pseudo = "Anthony Da Mota";

    var newItem2 = {};
    newItem2.text = "If you want to ask me anything, just pick a category below !";
    newItem2.pseudo = "Anthony Da Mota";

    _messages.push(newItem);

    MessageStore.emitChange();

    setTimeout(function(){
      _messages.push(newItem2);
      MessageStore.emitChange();
    }, 1000);
    
}

function create(type) {
    if(!add_allowed)
      return;
    add_allowed = false;
    _messages.push(question[type]);
    MessageStore.emitChange();

    setTimeout(function(){
      _messages.push(content[type]);
      MessageStore.emitChange();
      add_allowed = true;
    }, 1100);
    
}

var MessageStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
      return _messages;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(action) {

    switch(action.actionType) {

      case MessageConstants.MESSAGE_ADD:
        create(action.type);
      break;

      case MessageConstants.INIT_ACTION:
        initialize();
        break;
    }

    return true; // No errors. Needed by promise in Dispatcher.
  })

});

module.exports = MessageStore;