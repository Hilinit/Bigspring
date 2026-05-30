function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-medium text-center mb-20">
        Contact Us
      </h1>

      <div className="grid lg:grid-cols-2 items-start">
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded px-4 py-3 outline-none" />
          <input type="email" placeholder="Your email" className="w-full border border-gray-300 rounded px-4 py-3 outline-none" />
          <input type="text" placeholder="Subject" className="w-full border border-gray-300 rounded px-4 py-3 outline-none" />
          <textarea rows="8" placeholder="Your message" className="w-full border border-gray-300 rounded px-4 py-3 outline-none resize-none" ></textarea>
          <button type="submit" className="bg-[#0aa8a7] text-white font-semibold px-10 py-4 rounded-full " >
            Send Now
          </button>
        </form>

        <div className="lg:pl-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Why you should contact us!
          </h2>

          <p className="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Velit recusandae voluptates doloremque veniam temporibus
            porro culpa ipsa, nisi soluta minima saepe laboriosam
            debitis nesciunt.
          </p>

          <ul className="gap-2">
            <li className="flex items-center gap-4">
              <span className="w-3 h-3 bg-[#0aa8a7] rounded-full"></span>
              <span className="text-xl font-medium">
                phone: +88 125 256 452
              </span>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-3 h-3 bg-[#0aa8a7] rounded-full"></span>
              <span className="text-xl font-medium">
                Mail: info@bigspring.com
              </span>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-3 h-3 bg-[#0aa8a7] rounded-full"></span>
              <span className="text-xl font-medium">
                Address: 360 Main rd, Rio, Brazil
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Contact