import React from 'react';
import styles from './Login.scss';  //TODO: need to actually create & add these styles

var Field = ({ label, value, onChange, name, error, type }) => <div className={ styles.field }>
  <label>{ label }</label>
  <input type={ type } value={ value } name={ name } onChange={ onChange } />
  { error ? <div className={ styles.error }>{ error.message }</div> : null }
</div>

module.exports = Field;