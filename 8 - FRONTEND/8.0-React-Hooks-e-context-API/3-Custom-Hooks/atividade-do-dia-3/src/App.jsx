import './App.css';
import useFormInput from './hooks/useFormInput';

function App() {
  const valueInputFistName = useFormInput('');
  const valueInputLastName = useFormInput('');
  const valueInputEmail = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();
    valueInputFistName.clear();
    valueInputLastName.clear();
    valueInputEmail.clear();
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <input value={valueInputFistName.value} onChange={valueInputFistName.onChange} />
        </label>
        <label>
          Last name:
          <input value={valueInputLastName.value} onChange={valueInputLastName.onChange} />
        </label>
        <label>
          E-mail:
          <input value={valueInputEmail.value} onChange={valueInputEmail.onChange} />
        </label>
        <button type="submit" onClick={handleSubmit}>Submeter formulário</button>
      </form>
    </div>
  );
}

export default App;

