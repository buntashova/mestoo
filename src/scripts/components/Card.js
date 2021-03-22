
class Card {
  constructor(card, cardTemplate, handleCardClick) {
    this._name = card.name;
    this._link = card.link;
    this._template = cardTemplate;
    this._handleCardClick = handleCardClick;
  }

  fillCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".elements__image");

    this._setEventListeners();

    this._element.querySelector(".elements__description").innerText = this._name;
    this._image.alt = this._name;
    this._image.src = this._link;

    return this._element;
  }

  _getTemplate() {
    const elementsTemplate = document
      .querySelector(this._template)
      .content
      .cloneNode(true);

    return elementsTemplate;
  }

  _handleDelete(evt) {
    evt.target.closest(".elements__element").remove();
  }

  _handleLike(evt) {
    evt.target.classList.toggle("elements__like_active");
  }

  _setEventListeners() {
    this._element.querySelector(".elements__trash").addEventListener("click", (evt) => {
      this._handleDelete(evt);
    });

    this._element.querySelector(".elements__like").addEventListener("click", (evt) => {
      this._handleLike(evt);
    });

    this._image.addEventListener("click", () => {
      this._handleCardClick();
    });
  }
}

export { Card };