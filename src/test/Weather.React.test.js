import App from '../App';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});

/* 
Hi Moderator 

So for this component test, I wanted to test out my 
"<WeatherResults data={this.state.data} />" component used in my app to display the weather results. 

However, since this component has props, I was not able to figure out how to test a component with props.

The failed test on the right ===> 
was the test with the WeatherResults component with its props.

How do I test a component with props? Is there a way to import the prop an store it as a variable?

I'm quite unsure about this so I to the safe option of testing my App component which is the successful test you see you at the bottom ===>

However, I am really curious to know how to test a component with props becaues it was not spoken about in the doc

Thank you in advance :)



*/
