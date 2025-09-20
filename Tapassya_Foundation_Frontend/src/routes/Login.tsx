import React, { useState } from "react"
import { Link } from "react-router-dom"

type LoginErrors = { username?: string; password?: string }

export default function Login() {
  const [errors, setErrors] = useState<LoginErrors>({})

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const username = String(data.get("username") || "")
    const password = String(data.get("password") || "")

    const next: LoginErrors = {}
    if (!username) next.username = "*Please enter valid email address"
    if (!password) next.password = "*Please enter valid password"

    setErrors(next)

    if (Object.keys(next).length === 0) {
      // TODO: replace with your real auth call
      alert("Logged in (stub)")
    }
  }

  return (
    <div className="min-h-[calc(100vh-112px)] bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex min-h-[600px]">
          {/* Left side - Geometric pattern */}
          <div className="flex-1 bg-amber-500 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 border-2 border-amber-700 rotate-45"></div>
                <div className="absolute inset-0 border-2 border-amber-700 -rotate-45"></div>
                <div className="absolute top-0 left-1/2 w-px h-full bg-amber-700 -translate-x-0.5 rotate-45 origin-top"></div>
                <div className="absolute top-0 right-1/2 w-px h-full bg-amber-700 translate-x-0.5 -rotate-45 origin-top"></div>
              </div>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="flex-1 p-12 flex flex-col justify-center">
            <div className="w-full max-w-sm mx-auto">
              <h1 className="text-2xl font-bold text-gray-900 mb-8">Welcome back!</h1>

              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="username" className="text-sm font-medium text-gray-700">
                    Username*
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  {errors.username && (
                    <p className="text-xs text-red-500 mt-1">{errors.username}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password*
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  {errors.password && (
                    <p className="text-xs text-red-500 mt-1">{errors.password}</p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center text-sm text-gray-600">
                    <input type="checkbox" className="mr-2 accent-amber-600" /> Remember me
                  </label>
                  <Link to="/forgot-password" className="text-sm text-amber-600 hover:text-amber-700">
                    Forgot your password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded-md font-medium transition-colors"
                >
                  Log In
                </button>

                <p className="text-center text-sm text-gray-600">
                  {"Don't have an account? "}
                  <Link to="/register" className="text-amber-600 hover:text-amber-700 font-medium">
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
