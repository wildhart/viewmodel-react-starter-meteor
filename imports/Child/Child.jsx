Child({
  foo:'',
  render() {
    <div>
        <input b="value: foo" />
        <button b="click: this.foo('hello')" >set foo to 'hello'</button>
    </div>
  }
})
