[
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: ({ request }) =>
          fetch("/api/dashboard.json", {
            signal: request.signal,
          }),
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
            loader: redirectIfUser,
          },
          {
            path: "logout",
            action: logoutUser,
          },
        ],
      },
    ],
  },
];

createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="contact" element={<Contact />} />
    <Route
      path="dashboard"
      element={<Dashboard />}
      loader={({ request }) =>
        fetch("/api/dashboard.json", {
          signal: request.signal,
        })
      }
    />
    <Route element={<AuthLayout />}>
      <Route path="login" element={<Login />} loader={redirectIfUser} />
      <Route path="logout" action={logoutUser} />
    </Route>
  </Route>
);
