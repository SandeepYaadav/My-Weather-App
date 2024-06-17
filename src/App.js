import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  return (
    <div className='bg-[#155e75] h-screen'>
      <h1>Weather forcast</h1>
      <Input/>
      <Button value="Search"/>
      <Card/>
      <Button value = "Refresh"/>
    </div>
  );
}

export default App;
