import { useRef, useState, FormEvent } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PositonButton from '../../uikit/PositonButton/PositonButton';
import { Image } from '../../Images/Image';
import { login } from '../../store/slices/users/usersSlice';

function Login() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [togglePass, setTogglePass] = useState<boolean>(true)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const email = formData.get('email') as string | null;
    const password = formData.get('password') as string | null;

    try {
      const response = await axios.post('https://bazaaar.deals/api/auth/login', {
        email,
        password
      });

      const token = response.data.access_token;
      dispatch(login(token));
      setError('');
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <section className="login">
      <div className="login__container _container">
        <img className="login-left" src={Image.loginEllipse} alt="Decorative Ellipse" />
        <PositonButton title="Fast Access" image={Image.loginAlarm} />
        <img className="login-right" src={Image.loginAbstract} alt="Abstract Decorative" />
        <h1>Log in</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email Address
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <button type="button" onClick={() => setTogglePass(!togglePass)}>{!togglePass ? 'Hide' : 'Show'}</button>
            <input
              id="password"
              name="password"
              type={togglePass ? "password" : "text"}
              placeholder="Password"
              required
            />
          </label>
          <Link to="/" className='forgot-pass'>Forget your password</Link>
          <label className="input-btn">
            <input type="submit" value="Log in" />
          </label>
          <Link to={'/registration'} className='regist-link'>Don't  have an account? Register  now</Link>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </section>
  );
}

export default Login;