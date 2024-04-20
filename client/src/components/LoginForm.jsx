import PropTypes from 'prop-types';

const LoginForm = ({handleSubmit,email,setEmail,password,setPassword}) => {
  return (
      <form onSubmit={handleSubmit} className="mt-3">
              <div className="form-group mb-3">
                  <label className="form-label">Your Email</label>
                  <input 
                      type="email" 
                      className="form-control"
                      placeholder="Enter Your Email ..." 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
              </div>

              <div className="form-group mb-3">
                  <label className="form-label">Your Password</label>
                  <input 
                      type="password" 
                      className="form-control"
                      placeholder="Enter Your Password ..." 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
              </div>

              <button disabled={!email || !password} type="submit" className="btn btn-primary">Login</button>
      </form>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default LoginForm;