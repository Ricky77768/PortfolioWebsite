const Footer = () => {
  return (
    <div className="mt-8 text-center text-neutral-400 text-md">
      <div className="flex flex-row justify-center gap-2">
        <button 
          type="button" 
          onClick={() => window.location.href = 'mailto:ruikailu@gmail.com'}
          className="w-[40px] h-[40px] rounded-full text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white transition-all">
          <i className="pt-1 pl-[2px] fas fa-envelope fa-lg"></i>
        </button>

        <button 
          type="button" 
          onClick={() => window.location.href = '/Resume.pdf'}
          className="w-[40px] h-[40px] rounded-full text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white transition-all">
          <i className="pt-1 fas fa-address-card fa-lg"></i>
        </button>

        <button 
          type="button" 
          onClick={() => window.location.href = 'https://github.com/Ricky77768'}
          className="w-[40px] h-[40px] rounded-full text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white transition-all">
          <i className="pt-1 fab fa-github fa-lg"></i>
        </button>

        <button 
          type="button" 
          onClick={() => window.location.href = 'https://www.linkedin.com/in/ricky77768/'}
          className="w-[40px] h-[40px] rounded-full text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white transition-all">
          <i className="pt-1 fab fa-linkedin fa-lg"></i>
        </button>
      </div>

      <div>Ricky Lu, 2023</div>
      <div>Made with React, Three.js, and Tailwind CSS</div>
    </div>
  )
}

export default Footer