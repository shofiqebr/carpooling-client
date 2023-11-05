/* eslint-disable no-undef */
import { useContext,  } from "react";
// import GoogleLogin from "../../components/googleLogin/GoogleLogin";
// import { AuthContext } from "../../authProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import GoogleLogin from './../provider/components/GoogleLogin';
import { AuthContext } from './../provider/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContext);
  


  const handleSubmit = event =>{
    event.preventDefault();
     const form = event.target;
     const name = form.name.value;
     const password = form.password.value;
     const email = form.email.value;
     const photo = form.photo.value;
     console.log(email,name,password,photo);

     if (password.length<6){
      toast.error('Password must be at least 6 characters long.');
      return;
     }

     if (!/[A-Z]/.test(password)) {
      toast.error('Password must contain at least one capital letter.');
      return;
    }

    if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
      toast.error('Password must contain at least one special character.');
      return;
    }
    createUser(email,password)
    .then(res => {
      handleUpdateProfile(name, img)
          .then(() => {
              toast.success('User created successfully');
              navigate('/')

          })
  })
  .catch(error => {
    toast.error(error.message)
})

 
  };
  return (
    <div>


      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  w-full lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="text-center text-3xl font-semibold pt-5">Please Register</div>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name='name'
                  placeholder="Full name"
                  className="input border-indigo-600 bg-slate-100"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input border-indigo-600 bg-slate-100"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">image url</span>
                </label>
                <input
                  type="photo"
                  name="photo"
                  placeholder="image url"
                  className="input border-indigo-600 bg-slate-100"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input border-indigo-600 bg-slate-100"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Register</button>
              </div>
              <div>Already have an account. Please<Link className="font-bold text-blue-700" to='/login'>Login</Link></div>
              <div className="flex justify-center items-center ">

      <GoogleLogin></GoogleLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
