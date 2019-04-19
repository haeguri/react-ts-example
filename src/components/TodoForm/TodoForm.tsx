import * as React from "react";

export default class TodoForm extends React.Component {
  render() {
    return (
      <form>
        <input placeholder="할일을 입력하세요." />
        <button>저장</button>
      </form>
    );
  }
}
