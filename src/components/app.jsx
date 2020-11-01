import React from 'react';

const App = () => {
  return (
    <main className="main container-wide">
      {/* Add "popup--enlarged" class to popup with additional controls and etc */}
      <article className="popup">
        <h3 className="popup__heading">Налоговый вычет</h3>
        <button className="popup__close button-reset" type="button" aria-label="Закрыть"></button>
        <p className="popup__description">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>
        <section className="popup__count">
          <h4 className="visually-hidden">Расчет налогового вычета на основании зарплаты</h4>
          <form className="form" action="">
            <fieldset className="fieldset-reset">
              <legend className="form__subheading">Ваша зарплата в месяц</legend>
              <input className="form__input" type="text" placeholder="50 000 &#8381;" />
              <p className="form__tooltip">Поле обязательно для заполнения</p>
              <button className="button button--text" type="button">Рассчитать</button>
            </fieldset>
          </form>
          <form className="form" action="">
            <fieldset className="from__control-set fieldset-reset">
              <legend className="form__subheading form__subheading--short">
                Итого можете внести в качестве досрочных:
              </legend>
              <label className="form__label">
                <input className="visually-hidden form__input-hidden" type="checkbox" name="payment" value="" checked="checked"/>
                <span className="form__input form__input--box"></span>
                <span className="form__text">78 000 рублей</span>
                <span className="form__text form__text--pale">в 1-ый год</span>
              </label>
              <label className="form__label">
                <input className="visually-hidden form__input-hidden" type="checkbox" name="payment" value="" checked />
                <span className="form__input form__input--box"></span>
                <span className="form__text">78 000 рублей</span>
                <span className="form__text form__text--pale">в 2-ой год</span>
              </label>
              <label className="form__label">
                <input className="visually-hidden form__input-hidden" type="checkbox" name="payment" value="" checked />
                <span className="form__input form__input--box"></span>
                <span className="form__text">78 000 рублей</span>
                <span className="form__text form__text--pale">в 3-ий год</span>
              </label>
              <label className="form__label">
                <input className="visually-hidden form__input-hidden" type="checkbox" name="payment" value="" />
                <span className="form__input form__input--box"></span>
                <span className="form__text">78 000 рублей</span>
                <span className="form__text form__text--pale">в 4-ый год</span>
              </label>
            </fieldset>
            <fieldset className="from__control-set fieldset-reset">
              <legend className="form__subheading form__subheading--tags">Что уменьшаем?</legend>
              <div className="form__tags-wrapper">
                <label className="form__label form__label--tag">
                  <input className="visually-hidden form__input-hidden" type="radio" name="reduce" checked />
                  <span className="form__input form__input--tag">Платеж</span>
                </label>
                <label className="form__label form__label--tag">
                  <input className="visually-hidden form__input-hidden" type="radio" name="reduce" checked />
                  <span className="form__input form__input--tag">Срок</span>
                </label>
              </div>
              <button className="button button--small" type="button">Добавить</button>
            </fieldset>
          </form>
        </section>
      </article>
    </main>
  );
};

export default App;
