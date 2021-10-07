import '../../App.css';
import React, {useState, useContext, createContext} from "react";
import "../../Context.css";
import "../../index.css";

const themes = {
  light: {
    text: "rgb(40, 44, 52))",
    background: "#fffafa",
  },
  dark: {
    text: "#DEE4E7",
    background: "rgb(40, 44, 52)",
  },
};
const ThemeContext = createContext();

export default function App() {

  const [valueTheme, setValueTheme] = useState(themes.dark);
  const [values, setValues] = useState ({
    name: "",
    telp: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({...values, name: event.target.value})
  }

  const handleTelpInputChange = (event) => {
    setValues({...values, telp: event.target.value})
  }

  const handleAddressInputChange = (event) => {
    setValues({...values, address: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.name && values.telp && values.address) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    
    <ThemeContext.Provider value={valueTheme}>
    <div style={{ backgroundColor: valueTheme.background }}>
      <form class="register-form" onSubmit={handleSubmit}>
          {submitted && valid ? <div class="success-message">Sukses, Terima Kasih telah Mendaftar. Tunggu informasi selanjutnya melalui email</div> :null}
        <input
        value={values.name}
        onChange={handleNameInputChange}
          // id="first-name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="firstName"
        />
        {submitted && !values.name ?<span>Please enter your name</span> : null}
        <input
        value={values.telp}
        onChange={handleTelpInputChange}
          // id="last-name"
          class="form-field"
          type="text"
          placeholder="Email"
          name="lastName"
        />
        {submitted && !values.telp  ?<span>Please enter your email</span> : null}
        <input
        value={values.address}
        onChange={handleAddressInputChange}
          // id="email"
          class="form-field"
          type="text"
          placeholder="Prodi"
          name="email"
        />
        {submitted && !values.address ? <span>Please enter prodi</span> :null}
        <button class="form-field" type="submit">
         Daftar Sekarang
        </button>
      </form>
      {/* <Content tema={valueTheme} /> */}
        <button
          className="Button"
          onClick={() =>
            setValueTheme(
              valueTheme === themes.light ? themes.dark : themes.light
            )
          }
        >
          Mode
        </button> 

    </div>
    </ThemeContext.Provider>
  );
}

function Content(props) {
  return (
    <div>
      <Text tema={props.tema} />
    </div>
  );
}

function Text(props) {
  const theme = useContext(ThemeContext);
  return (
    <p
      className="titleContext"
      style={{ color: theme.text }}
    >
      context value {theme.text}
    </p>
  );
}
