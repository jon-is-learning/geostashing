describe('app', () => {
  it('renders the title', () => {
    const app = TestUtils.renderIntoDocument(<App />);
    const h1 = TestUtils.findRenderedDOMComponentWithTag(app, 'h1');
    expect(h1.getDOMNODE().textContent).to.equal('Hi there, beard person.');
  });
});
