import Enzyme from 'enzyme';
//using unofficial adapter for React 17 from https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17;
//how to set up Enzyme in create react up to run automatically here: https://backbencher.dev/blog/create-react-app-setuptests-js-not-working
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

export default Enzyme.configure({ adapter: new Adapter() });


