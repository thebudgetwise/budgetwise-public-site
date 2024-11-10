<script>
    let email = '';
    let password = '';
    let errorMessage = '';

    function handleLogin(event) {
        event.preventDefault();
        // Add your login logic here
        if (email === '' || password === '') {
            errorMessage = 'Please fill in all fields.';
        } else {
            // Perform login
            console.log('Logging in with', email, password);
            errorMessage = '';
        }
    }

    function handleGoogleLogin() {
        // Add your Google login logic here
        console.log('Logging in with Google');
    }
</script>

<section class="page-section" id="login">
    <div class="container px-4 px-lg-5" data-aos="fade-up" data-aos-delay="100">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-6">
                <h2 class="text-center mt-0">Login</h2>
                <hr class="divider" />
                <form on:submit={handleLogin}>
                    <div class="form-floating mb-3">
                        <input
                            class="form-control"
                            id="email"
                            type="email"
                            bind:value={email}
                            placeholder="name@example.com"
                            required
                        />
                        <label for="email">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            class="form-control"
                            id="password"
                            type="password"
                            bind:value={password}
                            placeholder="Password"
                            required
                        />
                        <label for="password">Password</label>
                    </div>
                    {#if errorMessage}
                        <div class="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    {/if}
                    <div class="d-grid mb-3">
                        <button class="btn btn-primary btn-lg rounded-pill" type="submit">Login</button>
                    </div>
                </form>
                <div class="d-grid">
                    <button class="btn btn-light btn-lg rounded-pill" on:click={handleGoogleLogin}> 
                        <!-- google icon -->
                        
                        Login with Google</button>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .page-section {
        padding: 60px 0;
    }
    .form-floating {
        margin-bottom: 1rem;
    }
    .alert {
        margin-top: 1rem;
    }
</style>