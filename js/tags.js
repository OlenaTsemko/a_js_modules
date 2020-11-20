const refs = {
  tags: document.querySelector('.js-tags'),
  activeTagText: document.querySelector('.js-active-tag'),
};

refs.tags.addEventListener('click', onTagsClick);

function onTagsClick(event) {
  //   console.log('event.target: ', event.target);
  //   console.log('event.currentTarget: ', event.currentTarget);
  //   console.log('nodeName: ', event.target.nodeName);

  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const nextActiveTag = event.target;
  const activeTagValue = nextActiveTag.dataset.value;

  updateOutput(activeTagValue);
  setActiveTag(nextActiveTag);
}

function setActiveTag(nextActiveTag) {
  const currentActiveTag = refs.tags.querySelector('.tags-btn-active');
  //   console.log('currentActiveTag: ', currentActiveTag);

  if (currentActiveTag) {
    currentActiveTag.classList.remove('tags-btn-active');
  }

  nextActiveTag.classList.add('tags-btn-active');

  clearActiveTag(nextActiveTag, currentActiveTag);
}

function updateOutput(value) {
  refs.activeTagText.textContent = value;
}

function clearActiveTag(nextActiveTag, currentActiveTag) {
  if (nextActiveTag === currentActiveTag) {
    nextActiveTag.classList.remove('tags-btn-active');
    refs.activeTagText.textContent = '';
  }
}
