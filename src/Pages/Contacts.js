import { useState } from "react";

export const Contacts = () => {
  const [names, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({ name: "", email: "", message: "" });

  const validate = () => {
    let isValid = true;
    const errors = { name: "", email: "", message: "" };

    if (!names.match(/^[a-zA-Z\s]*$/)) {
      errors.names = "Name must contain only letters";
      isValid = false;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
      errors.email = "Please provide a valid Gmail address";
      isValid = false;
    }

    if (message.trim().length === 0) {
      errors.message = "Message cannot be empty";
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
    
  };

  return (
    <div>
      <div className="bg-[#f9a8d4] p-10 dark:bg-gray-900">
        <div className=" bg-[#FFF] p-10 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form className="space-y-8">
            <div>
              <label
                for="Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                value={names}
                onChange={(e) => setName(e.target.value)}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your Name"
              />
              {error.names && <span className="text-red-600">{error.names}</span>}
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
              />
              {error.email && (
                <span className="text-red-600">{error.email}</span>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
              {error.message && (
                <span className="text-red-600">{error.message}</span>
              )}
            </div>
            <button
              onClick={handleSubmit}
              className="bg-[#f472b6] w-30 p-3 rounded-md"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
