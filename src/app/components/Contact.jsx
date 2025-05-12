import React from 'react'

const Contact = () => {
  const contactLinks = [
    {
      href: "mailto:keming_wang@outlook.com",
      imgSrc: "/images/mail.png",
      alt: "email"
    },
    {
      href: "https://www.linkedin.com/in/magicoco117/",
      imgSrc: "/images/linkedin.png",
      alt: "linkedin"
    },
    {
      href: "https://github.com/0CocoWang0",
      imgSrc: "/images/github.png",
      alt: "github"
    }
  ]
  return (
    <div className="flex gap-6 align-bottom">
      {
        contactLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" alt={link.alt}>
            <img src={link.imgSrc} className='h-5 w-5 md:h-4 md:w-4 object-contain' />
          </a>
        ))
      }
    </div>
  )
}

export default Contact
