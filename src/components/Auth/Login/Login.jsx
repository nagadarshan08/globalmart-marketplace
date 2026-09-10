import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Globe2,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Store,
  UserRound,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("buyer");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const roles = [
    {
      id: "buyer",
      label: "Buyer",
      description: "Discover & shop products",
      icon: UserRound,
    },
    {
      id: "vendor",
      label: "Vendor",
      description: "Sell & manage products",
      icon: Store,
    },
    {
      id: "reseller",
      label: "Reseller",
      description: "Promote & resell products",
      icon: Globe2,
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      Authentication will be connected to the backend later.

      For now, this is only the frontend login flow.
    */

    console.log("Login attempt:", {
      role,
      email: formData.email,
    });

    alert(`${role.charAt(0).toUpperCase() + role.slice(1)} login selected.`);
  };

  return (
    <main className="login-page">
      <div className="login-background-shape login-shape-one"></div>
      <div className="login-background-shape login-shape-two"></div>

      <div className="login-container">

        {/* Left Side */}
        <section className="login-info">

          <Link to="/" className="login-back-link">
            <ArrowLeft size={16} />
            Back to GlobalMart
          </Link>

          <div className="login-brand">
            <div className="login-brand-icon">
              <Globe2 size={21} strokeWidth={2.2} />
            </div>

            <span>
              Global<span>Mart</span>
            </span>
          </div>

          <div className="login-info-content">
            <span className="login-eyebrow">
              <ShieldCheck size={15} />
              Trusted Marketplace
            </span>

            <h1>
              One marketplace.
              <span>Multiple opportunities.</span>
            </h1>

            <p>
              Connect with trusted buyers, vendors, and resellers
              through one global marketplace.
            </p>

            <div className="login-benefits">

              <div className="login-benefit">
                <div className="login-benefit-icon">
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <strong>Trusted & Secure</strong>
                  <span>Built for reliable marketplace interactions</span>
                </div>
              </div>

              <div className="login-benefit">
                <div className="login-benefit-icon">
                  <Globe2 size={18} />
                </div>

                <div>
                  <strong>Local to Global</strong>
                  <span>Connect businesses with wider markets</span>
                </div>
              </div>

              <div className="login-benefit">
                <div className="login-benefit-icon">
                  <Store size={18} />
                </div>

                <div>
                  <strong>Role-Based Experience</strong>
                  <span>Personalized experience for every user</span>
                </div>
              </div>

            </div>
          </div>

          <div className="login-info-footer">
            © 2026 GlobalMart
          </div>
        </section>


        {/* Right Side */}
        <section className="login-card-wrapper">

          <div className="login-card">

            <div className="login-card-header">

              <div className="login-mobile-logo">
                <div className="login-brand-icon">
                  <Globe2 size={20} />
                </div>

                <span>
                  Global<span>Mart</span>
                </span>
              </div>

              <h2>Welcome back</h2>

              <p>
                Sign in to continue to your GlobalMart account.
              </p>

            </div>


            {/* Role Selection */}
            <div className="login-role-section">

              <label>Select your role</label>

              <div className="login-role-grid">

                {roles.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`login-role ${
                        role === item.id ? "active" : ""
                      }`}
                      onClick={() => setRole(item.id)}
                    >
                      <div className="login-role-icon">
                        <Icon size={18} />
                      </div>

                      <div className="login-role-text">
                        <strong>{item.label}</strong>
                        <span>{item.description}</span>
                      </div>
                    </button>
                  );
                })}

              </div>
            </div>


            {/* Login Form */}
            <form
              className="login-form"
              onSubmit={handleSubmit}
            >

              <div className="login-field">

                <label htmlFor="email">
                  Email or Phone
                </label>

                <div className="login-input-wrapper">

                  <Mail size={17} />

                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter your email or phone"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              <div className="login-field">

                <div className="login-label-row">

                  <label htmlFor="password">
                    Password
                  </label>

                  <button
                    type="button"
                    className="login-forgot"
                    onClick={() => alert("Forgot password flow coming soon.")}
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="login-input-wrapper">

                  <LockKeyhole size={17} />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="login-password-toggle"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>

                </div>

              </div>


              <div className="login-options">

                <label className="login-remember">

                  <input type="checkbox" />

                  <span>Remember me</span>

                </label>

              </div>


              <button
                type="submit"
                className="login-submit"
              >
                Sign In
                <ArrowRight size={17} />
              </button>

            </form>


            {/* Register */}
            <div className="login-register">

              <span>
                Don't have an account?
              </span>

              <Link to="/register">
                Create Account
              </Link>

            </div>


            <div className="login-security-note">

              <ShieldCheck size={15} />

              <span>
                Your account information is protected.
              </span>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

export default Login;