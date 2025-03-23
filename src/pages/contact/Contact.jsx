import React from "react";
import MainLayout from "../../components/MainLayout";
import { useNavigate } from "react-router-dom";

function Contact() {

    const navigate = useNavigate()

  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f1584da5-6352-4592-a502-dc595b9ba572");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      navigate("/")
      alert("Message sent")
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col mx-10 my-5 rounded-3xl p-3 md:p-20 md:mx-15  lg:w-[calc(75%)] lg:mx-auto">
        <div className="text-4xl flex flex-col">
          <h3 className="text-xl">SEND ME A MESSAGE</h3>
          <h1>Send me a message and I will get back to you in 48 hours</h1>
        </div>

        <div className="text-xl bg-blue-100 p-5 mt-10 border-2  rounded-2xl flex flex-col justify-center ">
          <form onSubmit={submit} action="">
            <div className="m-4">
              <label className="block" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="p-2 w-full rounded-xl focus:ring-blue-500 focus:outline-none focus-ring-2 border-gray-300"
              />
            </div>

            <div className="m-4">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="john@gmail.com"
                className="p-2 w-full rounded-xl focus:ring-blue-500 focus:outline-none focus-ring-2 border-gray-300"
              />
            </div>

            <div className="m-4">
              <label className="block" htmlFor="message">
                Message
              </label>
              <textarea
                type="text"
                rows="5"
                name="messge"
                placeholder="We would like to schedule an full stack developer interviw"
                className="p-2 w-full rounded-xl focus:ring-blue-500 focus:outline-none focus-ring-2 border-gray-300"
              />
            </div>

            <button type="submit" className=" m-4 p-2 rounded-2xl text-white hover:text-black transition duration-300 text-2xl bg-blue-600 hover:bg-white">Submit</button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default Contact;
