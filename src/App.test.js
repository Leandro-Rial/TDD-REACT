import Counter from './Counter';
import { shallow } from 'enzyme';

describe('Counter Testing', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  })

  test('Render the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain("This is counter app")
  });

  test('Render a button with text of `increment`', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });
  
  test('Render the initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

  test('Render the click event of increment button and increment counter value', () => {
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe("1")
  });

  test('Render the click event of decrement button and decrement counter value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });
})
