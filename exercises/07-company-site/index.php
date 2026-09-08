<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercise 07 - Company Site</title>
  <link rel="stylesheet" href="../../assets/css/style.css">
</head>
<body>
  <header class="app-header">
    <nav class="site-mini-nav">
      <a class="shop-brand" href="index.php">NexusSoft</a>
      <div class="shop-links">
        <a href="index.php">Home</a>
        <a href="register.php">Register</a>
        <a href="login.php">Login</a>
        <a href="../../index.html">Portfolio</a>
      </div>
    </nav>
    <section class="app-hero">
      <div>
        <p class="eyebrow">Exercise 07</p>
        <h1>Company Employee and Admin Portal</h1>
        <p>Register users, authenticate login, and show admin or employee details based on role.</p>
      </div>
    </section>
  </header>

  <main class="content-page">
    <section class="info-grid">
      <article>
        <h2>Employee Login</h2>
        <p>Employees can login and view administrator contact details.</p>
      </article>
      <article>
        <h2>Admin Login</h2>
        <p>Admins can login and view all registered employee details.</p>
      </article>
      <article>
        <h2>Database</h2>
        <p>User details are stored in the shared MySQL ex07_users table.</p>
      </article>
    </section>
  </main>
</body>
</html>
