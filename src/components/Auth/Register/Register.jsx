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
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("buyer");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    /*
      Backend registration will be connected later.
    */

    console.log("Registration:", {
      role,
      ...formData,
    });

    alert(
      `${role.charAt(0).toUpperCase() + role.slice(1)} registration selected.`
    );

    navigate("/login");
  };

  return (
    <main className="register-page">

      <div className="register-background-shape register-shape-one"></div>
      <div className="register-background-shape register-shape-two"></div>

      <div className="register-container">

        {/* Left Information Section */}
        <section className="register-info">

          <Link to="/" className="register-back-link">
            <ArrowLeft size={16} />
            Back to GlobalMart
          </Link>

          <div className="register-brand">

            <div className="register-brand-icon">
              <Globe2 size={21} strokeWidth={2.2} />
            </div>

            <span>
              Global<span>Mart</span>
            </span>

          </div>

          <div className="register-info-content">

            <span className="register-eyebrow">
              <ShieldCheck size={15} />
              Join GlobalMart
            </span>

            <h1>
              Build your
              <span>marketplace journey.</span>
            </h1>

            <p>
              Create your GlobalMart account and connect with
              buyers, vendors, and resellers through one trusted
              marketplace.
            </p>

            <div className="register-benefits">

              <div className="register-benefit">

                <div className="register-benefit-icon">
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <strong>Trusted Platform</strong>
                  <span>
                    Designed for secure marketplace interactions
                  </span>
                </div>

              </div>


              <div className="register-benefit">

                <div className="register-benefit-icon">
                  <Globe2 size={18} />
                </div>

                <div>
                  <strong>Global Opportunities</strong>
                  <span>
                    Connect local businesses with wider markets
                  </span>
                </div>

              </div>


              <div className="register-benefit">

                <div className="register-benefit-icon">
                  <Store size={18} />
                </div>

                <div>
                  <strong>Role-Based Experience</strong>
                  <span>
                    Get an experience designed for your role
                  </span>
                </div>

              </div>

            </div>

          </div>

          <div className="register-info-footer">
            © 2026 GlobalMart
          </div>

        </section>


        {/* Registration Card */}
        <section className="register-card-wrapper">

          <div className="register-card">

            <div className="register-card-header">

              <div className="register-mobile-logo">

                <div className="register-brand-icon">
                  <Globe2 size={20} />
                </div>

                <span>
                  Global<span>Mart</span>
                </span>

              </div>

              <h2>Create your account</h2>

              <p>
                Join GlobalMart and get started with your marketplace
                experience.
              </p>

            </div>


            {/* Role Selection */}
            <div className="register-role-section">

              <label>Select your role</label>

              <div className="register-role-grid">

                {roles.map((item) => {

                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`register-role ${
                        role === item.id ? "active" : ""
                      }`}
                      onClick={() => setRole(item.id)}
                    >

                      <div className="register-role-icon">
                        <Icon size={18} />
                      </div>

                      <div className="register-role-text">

                        <strong>{item.label}</strong>

                        <span>
                          {item.description}
                        </span>

                      </div>

                    </button>
                  );

                })}

              </div>

            </div>


            {/* Registration Form */}
            <form
              className="register-form"
              onSubmit={handleSubmit}
            >

              {/* Full Name */}
              <div className="register-field">

                <label htmlFor="fullName">
                  Full Name
                </label>

                <div className="register-input-wrapper">

                  <UserRound size={17} />

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* Email */}
              <div className="register-field">

                <label htmlFor="email">
                  Email Address
                </label>

                <div className="register-input-wrapper">

                  <Mail size={17} />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* Phone */}
              <div className="register-field">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <div className="register-input-wrapper">

                  <Globe2 size={17} />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* Password */}
              <div className="register-field">

                <label htmlFor="password">
                  Password
                </label>

                <div className="register-input-wrapper">

                  <LockKeyhole size={17} />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="register-password-toggle"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>

                </div>

              </div>


              {/* Confirm Password */}
              <div className="register-field">

                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

                <div className="register-input-wrapper">

                  <LockKeyhole size={17} />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="register-password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>

                </div>

              </div>


              {/* Terms */}
              <label className="register-terms">

                <input
                  type="checkbox"
                  required
                />

                <span>
                  I agree to the GlobalMart{" "}
                  <a href="#">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#">
                    Privacy Policy
                  </a>.
                </span>

              </label>


              {/* Submit */}
              <button
                type="submit"
                className="register-submit"
              >
                Create Account
                <ArrowRight size={17} />
              </button>

            </form>


            {/* Login Link */}
            <div className="register-login">

              <span>
                Already have an account?
              </span>

              <Link to="/login">
                Sign In
              </Link>

            </div>


            <div className="register-security-note">

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

export default Register;