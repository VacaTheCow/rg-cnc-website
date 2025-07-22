"use client";

import { useState } from "react";

export default function RequestQuotePage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/request-quote/email", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setStatus("Quote submitted successfully!");
      form.reset();
    } else {
      setStatus("Failed to submit quote.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Request a Quote</h1>
        <p className="text-gray-600 mb-8">Tell us about your project and we&apos;ll get back to you shortly.</p>

        <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                name="company"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Industry</label>
              <select
                name="industry"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 bg-white focus:ring-blue-500 focus:border-blue-500"
                defaultValue=""
              >
                <option value="" disabled>Select an industry</option>
                <option value="Aerospace">Aerospace</option>
                <option value="Medical">Medical</option>
                <option value="Automotive">Automotive</option>
                <option value="Defense">Defense</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Project Details</label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Briefly describe your project requirements, materials, timelines, etc."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Attachments</label>
            <input
              type="file"
              name="files"
              multiple
              accept=".pdf,.step,.stp,.iges,.igs,.dxf"
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-400 file:text-white hover:file:bg-blue-500 transition"
            />
            <p className="text-sm text-gray-500 mt-1">Hold ⌘ or Ctrl to select multiple files</p>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-400 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-blue-500 transition"
            >
              Submit Request
            </button>
          </div>
        </form>

        {status && (
          <div
            className={`mt-6 text-sm px-4 py-3 rounded ${
              status.includes("successfully")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
