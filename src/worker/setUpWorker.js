import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';
import userData from "../data/user.json";
import carData from "../data/cars.json"
const users = userData
const cars = carData

const handler = [
  http.get('/api/cars', () => {
    return HttpResponse.json(
      {
        message: 'Cars Fetched',
        cars: cars
      },
      {
        status: 202,
        statusText: 'Successful fetch',
      },
    )
  }),
  http.post('/api/login', async ({ request }) => {
    const body = await request.json();
    const user = users.find((u) => {
      return u.email === body.email && u.password === body.password
    })
    if (!user) {
      return HttpResponse.json(
        {
          message: 'Invalid Credentials',
        },
        {
          status: 404,
          statusText: 'Unsuccessful login',
        },
      )
    } else {
      return HttpResponse.json(
        {
          message: 'Login Successful',
          data: user
        },
        {
          status: 202,
          statusText: 'Successful login',
        },
      )
    }
  }),
  http.post('/api/signUp', async ({ request }) => {
    const body = await request.json();
    const user = users.find((u) => { return u.name === body.name && u.email === body.email });
    const data = {
      id: users.length + 1,
      ...body
    }
    if (user) {
      return HttpResponse.json(
        {
          message: 'User already exists',
        },
        {
          status: 404,
          statusText: 'Unsuccessful signup',
        },
      )
    } else {
      users.push(data);

      return HttpResponse.json({
        message: 'Sign Up successful',
        data: data
      }, {
        status: 202,
        statusText: 'Successful signup',
      })
    }
  }),
  http.post('/api/sell', async ({ request }) => {
    const body = await request.json();
    const data = {
      id: cars.length + 1,
      ...body
    }
    cars.push(data);
    return HttpResponse.json({
      message: 'Car sold successfully',
      data: data
    },
      {
        status: 202,
        statusText: 'Listed successfully',
      })
  }),
  //get car by id
  http.get('/api/cars/:id', async ({ params }) => {
    const { id } = params;

    const car = cars.find((c) => { return c.id === parseInt(id) });
    if (!car) {
      return HttpResponse.json(
        {
          message: 'Car not found',
        },
        {
          status: 404,
          statusText: 'Car not found',
        },
      )
    } else {
      return HttpResponse.json({
        message: 'Car found',
        data: {
          car: car,
        }
      })
    }
  }),
  //update car by id
  http.patch('/api/cars/:id', async ({ request, params }) => {
    const { id } = params;
    const body = await request.json();
    const car = cars.find((c) => { return c.id === parseInt(id) });
    if (!car) {
      return HttpResponse.json(
        {
          message: 'Car not found',
        },
        {
          status: 404,
          statusText: 'Car not found',
        },
      )
    } else {
      const updatedCar = {
        ...car,
        userId: body.userId
      }
      cars.splice(cars.indexOf(car), 1, updatedCar)
      return HttpResponse.json({
        message: 'Car purchased successfully',
        data: updatedCar
      })
    }
  }),
  http.get('/api/users', async () => {
    return HttpResponse.json(
      {
        message: 'Users Fetched',
        users: users
      },
      {
        status: 202,
        statusText: 'Successful fetch',
      },
    )
  }),
  //get user car
  http.get('/api/userCar/:id', async ({ params }) => {
    const { id } = params;

    const car = cars.find((c) => { return c.id === parseInt(id) });
    if (!car) {
      return HttpResponse.json(
        {
          message: 'Car not found',
        },
        {
          status: 404,
          statusText: 'Car not found',
        },
      )
    } else {
      const user = users.find((u) => { return u.id === car.userId })
      return HttpResponse.json({
        message: 'Car found',
        data: {
          car: car,
          user: user
        }
      })
    }
  }),

];

const worker = setupWorker(
  ...handler
)

export default worker