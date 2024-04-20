import PropTypes from 'prop-types';

const RegisterForm = ({handleSubmit,name,setName,email,setEmail,password,setPassword}) => {
  return (
      <form onSubmit={handleSubmit} className="mt-3">
              <div className="form-group mb-3">
                  <label className="form-label">Your Name</label>
                  <input 
                      type="text" 
                      className="form-control"
                      placeholder="Enter Your Name ..." 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
              </div>
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

              <button disabled={!name || !email || !password} type="submit" className="btn btn-primary">Submit</button>
      </form>
  )
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default RegisterForm;