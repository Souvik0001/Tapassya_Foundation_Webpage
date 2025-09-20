import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  function onContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: send to your backend
    alert("Thanks! We’ll get back to you.")
  }

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 md:pr-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                SUPPORT THE
                <br />
                CAUSE
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                an impactful line in a few words goes
                <br />a long way to tell a story description
              </p>
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-md text-lg"
              >
                Donate Now
              </Link>
            </div>

            {/* geometric block */}
            <div className="flex-1">
              <div className="w-80 h-64 bg-amber-500 relative rounded-lg mx-auto md:mx-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 relative">
                    <div className="absolute inset-0 border-2 border-amber-700 rotate-45"></div>
                    <div className="absolute inset-0 border-2 border-amber-700 -rotate-45"></div>
                    <div className="absolute top-0 left-1/2 w-px h-full bg-amber-700 -translate-x-0.5 rotate-45 origin-top"></div>
                    <div className="absolute top-0 right-1/2 w-px h-full bg-amber-700 translate-x-0.5 -rotate-45 origin-top"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Tapassya */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Tapassya</h2>

          <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
            <div className="flex-1 md:pr-12">
              <p className="text-gray-700 leading-relaxed mb-6">
                Nabadganta Tapassya Foundation, established in October 2008 in Kolkata, is a voluntary non-profit
                committed to uplifting marginalized communities through education, medical aid, scholarships, and
                tailored outreach programs. Guided by its name—“Tapassya,” which symbolizes disciplined effort—it works
                tirelessly toward creating a better tomorrow for disadvantaged individuals across West Bengal and
                Jharkhand.
              </p>
            </div>
            <div className="w-64 h-48 bg-amber-500 relative rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 border-2 border-amber-700 rotate-45"></div>
                  <div className="absolute inset-0 border-2 border-amber-700 -rotate-45"></div>
                  <div className="absolute top-0 left-1/2 w-px h-full bg-amber-700 -translate-x-0.5 rotate-45 origin-top"></div>
                  <div className="absolute top-0 right-1/2 w-px h-full bg-amber-700 translate-x-0.5 -rotate-45 origin-top"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="w-64 h-48 bg-amber-500 relative rounded-lg md:mr-12">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 border-2 border-amber-700 rotate-45"></div>
                  <div className="absolute inset-0 border-2 border-amber-700 -rotate-45"></div>
                  <div className="absolute top-0 left-1/2 w-px h-full bg-amber-700 -translate-x-0.5 rotate-45 origin-top"></div>
                  <div className="absolute top-0 right-1/2 w-px h-full bg-amber-700 translate-x-0.5 -rotate-45 origin-top"></div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex
              </p>
              <p className="text-gray-700 leading-relaxed">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Schools */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Schools</h2>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            </p>
            <p className="text-gray-700 leading-relaxed mb-12">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol
            </p>

            <Link
              to="/admissions"
              className="inline-flex items-center justify-center bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-md text-lg"
            >
              Explore All
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row min-h-[400px]">
              {/* Left side - Geometric pattern */}
              <div className="flex-1 bg-amber-500 relative min-h-[220px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 relative">
                    <div className="absolute inset-0 border-2 border-amber-700 rotate-45"></div>
                    <div className="absolute inset-0 border-2 border-amber-700 -rotate-45"></div>
                    <div className="absolute top-0 left-1/2 w-px h-full bg-amber-700 -translate-x-0.5 rotate-45 origin-top"></div>
                    <div className="absolute top-0 right-1/2 w-px h-full bg-amber-700 translate-x-0.5 -rotate-45 origin-top"></div>
                  </div>
                </div>
              </div>

              {/* Right side - Contact form */}
              <div className="flex-1 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Us</h3>

                <form className="space-y-6" onSubmit={onContactSubmit}>
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="query" className="text-sm font-medium text-gray-700">
                      Query
                    </label>
                    <textarea
                      id="query"
                      rows={4}
                      placeholder="Write your query"
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded-md font-medium"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
