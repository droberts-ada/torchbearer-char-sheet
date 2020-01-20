[![Build Status](https://travis-ci.org/droberts-ada/torchbearer-char-sheet.svg?branch=master)](https://travis-ci.org/droberts-ada/torchbearer-char-sheet)

# Torchbearer Character Sheet

This project is a work-in-progress! It's partly me trying to solve a problem I have, and partly me messing around with React. My style is still evolving rapidly, so forgive any messiness you might encounter.

## Info for Developers

### Vocab

### App Structure

**Roll Page**

The roll page has two types of state. The first is the state provided by the user: toggled options describing how the roll should proceed. The second is called _derived state_, and describes what the roll will look like. Based on what we know about the character and what the user has told us about the roll, how many dice do we get, what are the odds of success, etc.

### Current Work

### Wishlist

**Functionality**

Roughly in order of importance

- Roll page (half finished)
  - Dice math (statistics and junk)
  - Feed results back into character sheet after roll
- Character creation / input
- Edit mode for a character (possibly same as ^^)
- Bio page
- Gear page
- Class features
- Leveling
- Character saved to cloud (firebase?)
- Multiple characters
- Hamburger menu
  - Log in
  - Switch characters
  - Join game?
  - Export character as JSON
- Undo / redo (less important with edit mode)
- Join game with others in party
  - Be able to contribute to rolls and have things update



**Rules**



**UI / UX**

- Swipe left / right to change page
  - Animation for page changes
