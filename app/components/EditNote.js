import React from 'react';
import $ from 'jquery';
import styles from './EditNote.scss'
import { browserHistory } from 'react-router';
import Field from 'Field';

var Fields = ({ label, value, onChange, name, error, type }) => <div className={ styles.field }>
  <label>{ label }</label>
  <input type={ type } value={ value } name={ name } onChange={ onChange } />
  { error ? <div className={ styles.error }>{ error.message }</div> : null }
</div>

var EditNote = React.createClass({
  getInitialState: function() {
    var emptyNote = {
      title: '',
      content: '',
      image: '',
      tags: []
    }
    if (this.props.params.id) {
      var note = this.props.notes.find((note) => note._id == this.props.params.id);
      return {
        isEditing: true,
        note: note || emptyNote,
        errors: {}
      }
    } else {
      return {
        isEditing: false,
        note: emptyNote,
        errors: {}
      }
    }
  },

  render: function() {
    return  <div className="row">
      <Field type="text" value={ this.state.note.title } name='title' onChange={ this.updateField } error={ this.state.errors.title } placeholder="What is your note about?" />
      <Field type="textarea" value={ this.state.note.content } name='content' onChange={ this.updateField } error={ this.state.errors.content } />
      <Field type="text" value={ this.state.note.image } name='image' onChange={ this.updateField } error={ this.state.errors.image } />
      <Field type="text" label="Tags" value={ this.state.note.tags } name='tags' onChange={ this.updateField } error={ this.state.errors.tags } />
      <button onClick={ this.save }>Save</button>
    </div>
  },

  save: function() {
    if (this.state.isEditing) {
      var url = '/api/notes/' + this.props.params.id;
      var method = 'PUT';
    } else {
      var url = '/api/notes';
      var method = 'POST';
    }

    $.ajax({
      method: method,
      url: url,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(this.state.note),
      success: () => {
        this.props.onRefresh();
        browserHistory.push('/');
      },
      error: (err) => {
        this.setState({ errors: err.responseJSON.errors });
      }
    });
  },

  updateField: function(event) {
    var note = this.state.note;
    note[event.target.name] = event.target.value;
    this.setState({note: note});
  }
});

module.exports = EditNote;
