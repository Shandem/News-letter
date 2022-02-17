import logo from './logo.svg';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import './App.css';

function App() {
  
  
  return (
    <div className='Landing'>
    <h1>Stay Connected</h1>
    <p className='blurb'>Want to keep up to date with everything going on?
      Enter your email below and become part of the family.</p>
     <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
    
    </div>
  );
}

export default App;
