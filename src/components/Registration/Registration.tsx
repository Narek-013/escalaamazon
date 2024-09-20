import { useRef, useState, FormEvent } from 'react';
import axios from 'axios';
import PositonButton from "../../uikit/PositonButton/PositonButton";
import { useNavigate } from 'react-router-dom';
import { Image } from '../../Images/Image';

function Registration() {
  // Указание типа для ref
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate(); // Переносим сюда

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const firstName = formData.get('firstName') as string | null;
    const lastName = formData.get('lastName') as string | null;
    const email = formData.get('email') as string | null;
    const password = formData.get('password') as string | null;
    const confirmPassword = formData.get('confirmPassword') as string | null;
    console.log(firstName,
      lastName,
      email,
      password);
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await axios.post('https://bazaaar.deals/api/user/register', {
        firstName,
        lastName,
        email,
        password
      });
      setError(''); // Очистка ошибки при успешной регистрации
      navigate('/dashboard'); // Навигация после успешной регистрации
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <section className="login">
      <div className="login__container _container">
        <img className="login-left" src={Image.loginEllipse} alt="Decorative Ellipse" />
        <PositonButton title="Fast Access" image={Image.loginAlarm} />
        <img className="login-right" src={Image.loginAbstract} alt="Abstract Decorative" />
        <h1>Registration</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="first-name">
            First Name
            <input
              id="first-name"
              name="firstName"
              type="text"
              placeholder="First name"
              required
            />
          </label>
          <label htmlFor="last-name">
            Last Name
            <input
              id="last-name"
              name="lastName"
              type="text"
              placeholder="Last name"
              required
            />
          </label>
          <label htmlFor="email">
            Email Address
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </label>
          <label htmlFor="confirm-password">
            Confirm Password
            <input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </label>
          <label className="input-btn">
            <input type="submit" value="Register" />
          </label>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </section>
  );
}

export default Registration;
