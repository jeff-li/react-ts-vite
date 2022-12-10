import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Center, Card, Title } from '@mantine/core';
import { Location } from 'history';
import { useNavigate, useLocation } from 'react-router-dom';

import userAuth from '../../hooks/useAuth';

type FormValues = {
  email: string;
  password: string;
};

type LocationProps = {
  state: {
    from: Location;
  };
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { signin, user } = userAuth();
  const navigate = useNavigate();
  // https://github.com/reach/router/issues/414
  const location = useLocation() as LocationProps;
  const from = location.state?.from?.pathname || '/home';

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true)
    try {
      await signin(data.email, data.password);
      console.log(`${data.email}, ${data.password}`);
      reset();
      setIsLoading(false)
      navigate(from, { replace: true });
    } catch(e) {
      setIsLoading(false);
      setError('Failed to login')
    }
  };

  if (user) {
    navigate(`/home`);
  }

  return (
    <Center
      style={{
        textAlign: 'center',
        padding: '3rem',
        width: 500,
        height: 300,
        margin: 'auto',
      }}
    >
      <Card shadow="md" p="lg" radius="md" withBorder>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title order={1}>Login</Title>
          {error}
          <input
            placeholder="Email"
            id="email"
            {...register('email', {
              required: 'required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
            type="email"
          />
          {errors.email && <span role="alert">{errors.email.message}</span>}
          <input
            placeholder="Password"
            id="password"
            {...register('password', {
              required: 'required',
              minLength: {
                value: 5,
                message: 'min length is 5',
              },
            })}
            type="password"
          />
          {errors.password && <span role="alert">{errors.password.message}</span>}
          <Button type="submit" disabled={isLoading}>
            { isLoading ? 'logging in' : 'Login' }
          </Button>
        </form>
      </Card>
    </Center>
  );
};

export default Login;
