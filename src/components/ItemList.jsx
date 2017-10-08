import React from 'react';
import PropTypes from 'prop-types';
import { updateList as updateListFunction, updateInputFieldTodoValue as updateInputFieldTodoValueFunction,
  clearInputFieldTodoValue as clearInputFieldTodoValueFunction } from '../reducers/listReducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// pass in list and updateListFunction
const ItemList = ({
  list,
  updateList,
  updateInputFieldTodoValue,
  inputFieldTodoValue,
  clearInputFieldTodoValue,
}) => {
  const addToList =
    () => {
      updateList(list.concat(inputFieldTodoValue));
      clearInputFieldTodoValue();
    };
  const updateInputField =
    (event) => {
      updateInputFieldTodoValue(event.target.value);
    };
  return (<div>
    <span>
      <label htmlFor="item">Item</label>
      <input
        id="item"
        value={inputFieldTodoValue}
        type="text"
        placeholder="Add to your todo list?"
        onChange={updateInputField}
      />
      <button onClick={addToList}>Add</button>
    </span>
    <ul>{list.map(item => (
      <li>{item}</li>
    ))}
    </ul>
  </div>);
};

ItemList.propTypes = {
  updateList: PropTypes.func,
  updateInputFieldTodoValue: PropTypes.func,
  clearInputFieldTodoValue: PropTypes.func,
  list: PropTypes.array,
  inputFieldTodoValue: PropTypes.string,
};

ItemList.defaultProps = {
  updateList: updateListFunction,
  updateInputFieldTodoValue: updateInputFieldTodoValueFunction,
  clearInputFieldTodoValue: clearInputFieldTodoValueFunction,
  list: [],
  inputFieldTodoValue: '',
};

// dispatch method on updateListFunction
export default connect(
  ({ listReducer }) => ({
    list: listReducer.list,
    inputFieldTodoValue: listReducer.inputFieldTodoValue,
  }),
  dispatch => bindActionCreators({ updateList: updateListFunction,
    updateInputFieldTodoValue: updateInputFieldTodoValueFunction,
    clearInputFieldTodoValue: clearInputFieldTodoValueFunction,
  }, dispatch),
)(ItemList);