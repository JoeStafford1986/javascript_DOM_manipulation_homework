document.addEventListener('DOMContentLoaded', () => {
  console.log('Dom Content Loaded');

  const newItemForm = document.querySelector('#new-boardgame-form');
  newItemForm.addEventListener('submit', handleNewItemSubmit);
});

const handleNewItemSubmit = function (event) {
  console.log('Submit button pressed');
  event.preventDefault();

  const boardgameListItem = createBoardgameListItem(event.target);
  const boardgameList = document.querySelector('#boardgame-list');
  boardgameList.appendChild(boardgameListItem);

  event.target.reset();
}

const createBoardgameListItem = function (form) {
  const boardgameListItem = document.createElement('li');
  boardgameListItem.classList.add('boardgame-list-item');

  const titleString =  form.title.value;
  const title = buildElement('h2', `${titleString}`);
  boardgameListItem.appendChild(title);

  const playersInteger = form.players.value;
  const players = buildElement('h3', `Maximum No. Players: ${playersInteger}`);
  boardgameListItem.appendChild(players);

  const timeString = form.time.value;
  const time = buildElement('h3', `Average Play Time : ${timeString}`);
  boardgameListItem.appendChild(time);

  return boardgameListItem;
}

const buildElement = function (tag, value) {
  const element = document.createElement(tag);
  element.textContent = value;
  return element;
}
