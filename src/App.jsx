import 'bulma/css/bulma.css';
import { useState } from 'react';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const isSelectedValue = (selected, valueToCheck) => selected === valueToCheck;

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                isSelectedValue(selectedGood, good)
                  ? 'has-background-success-light'
                  : null
              }
            >
              <td>
                <button
                  data-cy={
                    isSelectedValue(selectedGood, good)
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  type="button"
                  className={
                    isSelectedValue(selectedGood, good)
                      ? 'button is-info'
                      : 'button'
                  }
                  onClick={() => {
                    const valueToSelect = isSelectedValue(selectedGood, good)
                      ? ''
                      : good;
                    setSelectedGood(valueToSelect);
                  }}
                >
                  {isSelectedValue(selectedGood, good) ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
