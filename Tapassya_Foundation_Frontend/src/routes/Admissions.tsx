import React from "react"
import { Link } from "react-router-dom"

export default function Admissions() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: wire to your backend
    alert("Form submitted (stub)")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-amber-800 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
              <span className="text-amber-800 font-bold text-sm">TAPASYA</span>
            </div>
            <span className="sr-only">Kishalay Vidyaniketan</span>
          </div>

          <nav className="flex items-center gap-8 text-sm">
            <Link to="/" className="hover:text-amber-200 transition-colors">
              Home
            </Link>
            <Link to="/registration" className="hover:text-amber-200 transition-colors">
              Registration
            </Link>
            <div className="relative">
              <button className="hover:text-amber-200 transition-colors flex items-center">
                About Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full">
              Log Out
            </button>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="relative">
        {/* Background with geometric pattern */}
        <div aria-hidden className="absolute inset-0 bg-amber-500">
          <div className="absolute top-0 left-0 w-32 h-full">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 border-r-2 border-amber-700 rotate-12"></div>
              <div className="absolute inset-0 border-r-2 border-amber-700 -rotate-12"></div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-full">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 border-l-2 border-amber-700 rotate-12"></div>
              <div className="absolute inset-0 border-l-2 border-amber-700 -rotate-12"></div>
            </div>
          </div>
        </div>

        {/* Form container */}
        <div className="relative z-10 max-w-4xl mx-auto p-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Header Section */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">Kishalay Vidyaniketan</h1>
                <div className="flex items-center bg-amber-800 text-white px-4 py-2 rounded-full">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  ENG
                </div>
              </div>
              <p className="text-gray-600 mb-2">
                Dattapukur Matri Ashram, Dattapukur, Shibalay, North 24 Parganas, PIN - 743248
              </p>
              <p className="text-gray-600 mb-8">An initiative of Nabodigonto Tapasya Foundation</p>
              <h2 className="text-2xl font-bold text-gray-900">School Admission Form</h2>
            </div>

            <form className="space-y-8" onSubmit={onSubmit}>
              {/* Student Information */}
              <section className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Student Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Field id="firstName" label="First Name*" placeholder="Enter student's first name" />
                  <Field id="middleName" label="Middle Name" placeholder="Enter student's middle name" />
                  <Field id="lastName" label="Last Name*" placeholder="Enter student's last name" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Field id="aadhaar" label="Aadhaar Number" placeholder="Enter student's Aadhaar Number" />
                  <Field id="gender" label="Gender*" placeholder="Enter student's gender" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Field id="dob" label="Date of Birth*" type="date" />
                  <Field id="age" label="Age*" placeholder="Enter student's age" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Field id="bloodGroup" label="Blood Group" placeholder="Enter student's blood group" />
                  <Field id="admissionClass" label="Class for Admission*" placeholder="Enter student's admission class" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Field id="previousSchool" label="Previous School Name" placeholder="Enter student's previous school" />
                  <Field id="transferCertificate" label="Transfer Certificate Provided*" placeholder="Yes/No" />
                </div>

                <div className="mt-6">
                  <Field id="streetName" label="Street Name*" placeholder="Enter street name" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <Field id="areaName" label="Area name*" placeholder="Enter area name" />
                  <Field id="city" label="City*" placeholder="Enter city name" />
                  <Field id="pincode" label="Pincode*" placeholder="Enter pincode" />
                </div>
              </section>

              {/* Parent Information */}
              <section className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Parent Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field id="fatherName" label="Father's Name*" placeholder="Enter Father's Name" />
                  <Field id="fatherAadhaar" label="Father's Aadhaar Number" placeholder="Enter Father's Aadhaar Number" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Field id="fatherOccupation" label="Father's Occupation" placeholder="Enter Father's Occupation" />
                  <Field id="motherName" label="Mother's Name*" placeholder="Enter Mother's Name" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <Field id="motherAadhaar" label="Mother's Aadhaar Number" placeholder="Enter Mother's Aadhaar Number" />
                  <Field id="motherOccupation" label="Mother's Occupation" placeholder="Enter Mother's Occupation" />
                </div>

                <div className="mt-6">
                  <Field id="familyIncome" label="Family Annual Income" placeholder="Enter Family Annual Income" />
                </div>
              </section>

              <div className="flex justify-end gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-md border px-5 py-2 text-sm hover:bg-gray-50"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-amber-700 px-5 py-2 text-sm font-medium text-white hover:bg-amber-800"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tapasya</h3>
              <p className="text-amber-100 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore
                magna aliqua
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Redirect Links</h3>
              <ul className="space-y-2 text-amber-100">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/programs" className="hover:text-white transition-colors">Our Programs</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Join Our Newsletter</h3>
              <div className="flex gap-2 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white text-gray-900 px-3 py-2 rounded-md border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button className="bg-amber-600 hover:bg-amber-700 px-6 rounded-md">Subscribe</button>
              </div>
              <div className="flex gap-4">
                {["f", "ig", "x", "yt"].map((t) => (
                  <div key={t} className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-100">
            <p>©{new Date().getFullYear()} Kishalay Vidyaniketan</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

/** Small labeled input helper */
function Field({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
      />
    </div>
  )
}
